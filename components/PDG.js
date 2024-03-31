import React, { useState } from 'react';
import cl from 'classnames';
import Image from 'next/image';
// import { useLocation } from '@docusaurus/router';
// import useGraphs from '@src/hooks/useGraphs';
import GraphvizDot from './GraphvizDot';
import JSALink from './JSALink';

import backImg from '../assets/img/back.svg';
import { useRouter } from 'next/router';
import { makeHref } from '../constants/paths';
import Link from 'next/link';
import InfoBar from './InfoBar';

// function getDot(screenshots, index) {
//   const screenshot = screenshots[index];
//   if (screenshot.dot) {
//     return screenshot.dot;
//   }
//   else if ('sameAs' in screenshot) {
//     return getDot(screenshots, screenshot.sameAs);
//   }
//   else {
//     return null;
//   }
// }

const backButtonStyles = {
  lineHeight: 0,
  textAlign: 'center',
  width: '2rem',
  height: '2rem'
};

const backBtnSize = 30;

/**
 * hackfix: hard-coded this since old data does not contain PDGSummaryMode data yet
 * @see @dbux/data/src/pdg/PDGSummaryMode.js
 */
const SummaryModeIcons = [
  '⛒',
  'ExpandSelf',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  'ExpandSubgraph',
];

function getSameAsOrigin(screenshots, index) {
  const screenshot = screenshots[index];
  if ('sameAs' in screenshot) {
    return getSameAsOrigin(screenshots, screenshot.sameAs);
  }
  else {
    return index;
  }
}

function InfoButtons() {
  return <div className="flex-align-center lh-1">
    <InfoBar />
  </div>;
}

function BackBtn() {
  return (<>
    <Link href={makeHref('/')}>
      <a title="Go back to Gallery Overview" style={backButtonStyles} className="btn btn-outline-info p-0">
        <Image src={backImg} width={backBtnSize} height={backBtnSize} alt="Back to Gallery" />
      </a>
    </Link>
  </>);
}

export default function PDG(props) {
  // const pdgId = useLocation().hash.substring(1);
  const { chapterGroup, chapter, exerciseId, renderData } = props;
  const router = useRouter();
  const [index, setIndex] = useState(0);

  if (exerciseId === undefined) {
    return (<h2>
      <BackBtn />
      <div className="space-1" />
      <pre>
        {`404 - PDG not found`}
      </pre>
    </h2>);
  }

  const success = renderData.success !== false && !renderData.failedReason;
  const { testLoc, algoLoc, failedReason, screenshots } = renderData;

  // linksEl
  let linksEl;
  if (success) {
    linksEl = <>
      <JSALink loc={testLoc} target="_blank"><u>Source code: Test</u></JSALink>
      <div className="space-1"></div>
      <JSALink loc={algoLoc} target="_blank"><u>Source code: Algorithm</u></JSALink>
    </>;
  }
  else {
    linksEl = null;
  }

  // graphEl
  let graphContentEl;
  if (!success) {
    graphContentEl = <>
      <h2 className="mt-4 text-center alert-danger">Failed: {failedReason}</h2>
      <pre className="alert-danger">{renderData.error}</pre>
    </>;
  }
  else if (!screenshots) {
    graphContentEl = <>
      <h2 className="mt-4 text-center alert-danger">Could not find PDG data</h2>
      <pre className="">{JSON.stringify(renderData, null, 2)}</pre>
    </>;
  }
  else if (screenshots[index].crash) {
    graphContentEl = <>
      <h2 className="mt-4 text-center">crash: true</h2>
      <pre className="">{screenshots[index].error}</pre>
    </>;
  }
  else {
    const { dot, sameAs } = screenshots[index];
    if (dot) {
      graphContentEl = <GraphvizDot dot={dot} exerciseId={exerciseId} index={index}></GraphvizDot>;
    }
    else if (sameAs !== undefined) {
      const originIndex = getSameAsOrigin(screenshots, index);
      graphContentEl = <h2 className="mt-4 text-center">
        Graph same as {originIndex}
        <button className="mx-4 p-2" onClick={() => setIndex(originIndex)}>Go</button>
      </h2>;
    }
    else {
      throw new Error(`Invalid screenshot missing "dot" or "sameAs", ${JSON.stringify(screenshots[index])}`);
    }
  }

  const modeButtons = screenshots?.map((screenshot, i) =>
    <button key={i} className={cl(
      "mx-1 p-2 btn btn-info",
      {
        active: (i === index),
        'bg-gray': !screenshot.dot
      }
    )}
      onClick={() => setIndex(i)}>{SummaryModeIcons[i]}
    </button>
  );

  // paginationEl
  let paginationEl;
  if (success) {
    paginationEl = <div className="d-flex flex-row">
      <button className="border-gray" onClick={() => setIndex(index - 1)} disabled={index === 0}>
        &lt;
      </button>
      <button className="border-gray" onClick={() => setIndex(index + 1)} disabled={index === screenshots?.length - 1}>
        &gt;
      </button>

      {modeButtons}
    </div>;
  }
  else {
    paginationEl = null;
  }

  // TODO: fix this
  // const graphs = useGraphs();
  // const previousPdgId = graphs.getPreviousId(pdgId);
  // const nextPdgId = graphs.getNextId(pdgId);

  return <>
    <div className="flex flex-col h-full">
      <div className="container">
        <h3 className="my-2">
          {/* <PDGLink title="Previous exercise" pdgId={previousPdgId}>
            <button className="p-2" disabled={!previousPdgId}>&laquo;</button>
          </PDGLink>
          <PDGLink title="Next exercise" pdgId={nextPdgId}>
            <button className="p-2" disabled={!nextPdgId}>&raquo;</button>
          </PDGLink> */}
          <BackBtn />
          <div className="space-1" />
          {chapterGroup}/{chapter} &gt; {renderData.pdgTitle}
        </h3>
        <div className="d-flex flex-row">
          {paginationEl}
          <div className="space-1"></div>
          {linksEl}
          <div className="space-1"></div>
          <div style={{ flexGrow: 2 }} />
          <InfoButtons />
        </div>
      </div>

      <div className="mt-3 vh-100 border of-hidden border-white" key={index}>
        {graphContentEl}
      </div>
    </div>
  </>;
}
