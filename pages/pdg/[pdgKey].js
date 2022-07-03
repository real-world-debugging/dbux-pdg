import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import PDG from '../../components/PDG';
// import useGraphs from '@src/hooks/useGraphs';

import { parsePdgLinkId } from '../../util/pdgUtil';
import { publicResourcePath } from '../../constants/paths';

/**
 * No SSR for graphviz stuff.
 * 
 * @see https://stackoverflow.com/a/57173209
 */
const Pdg = dynamic(() => Promise.resolve(_Pdg), {
  ssr: false
});
export default Pdg;


// function PdgLoader() {
//   return <MultiScriptLoader scripts={requiredScripts} Component={_Pdg} />;
// }

function _Pdg() {
  const router = useRouter();

  const { pdgKey } = router.query;

  // const graphs = useGraphs();
  // const renderData = graphs.getById(pdgKey);
  const [sampleData, setSampleData] = useState(null);

  const linkData = useMemo(() => pdgKey && parsePdgLinkId(pdgKey), [pdgKey]);


  useEffect(() => {
    (async () => {
      if (!linkData) {
        return;
      }
      // const chapterGroup = 'sorting';
      // const chapter = 'bubble-sort';
      // const exerciseId = 'javascript-algorithms#31';
      const {
        chapterGroup,
        chapter,
        exercise: exerciseId
      } = linkData;

      const url = publicResourcePath(
        `data/pdgs/${chapterGroup}/${chapter}/${encodeURIComponent(exerciseId)}/pdgData.json`
      );
      const res = await fetch(url);
      const rawData = await res.json();

      const selected = linkData.pdgTitle ?
        rawData.find(d => d.pdgTitle === linkData.pdgTitle) :
        rawData[0];

      document.title = 'Dbux-PDG: ' + selected.pdgTitle;

      setSampleData({
        chapterGroup: chapterGroup,
        chapter: chapter,
        exerciseId,
        pdgTitle: selected.pdgTitle,
        renderData: selected,
      });
    })();
  }, [linkData]);

  if (!router.isReady) {
    return 'loading...';
  }

  if (!linkData) {
    return <span className="danger">404 - invalid PDG id: ${pdgKey}</span>;
  }

  if (!sampleData) {
    return 'loading...';
  }

  if (!sampleData.renderData) {
    return <span className="danger">404 - invalid link - could not find PDG of title "{linkData.pdgTitle}"</span>;
  }

  // console.log('renderData', sampleData);

  return (<>
    {/* Render PDG itself */}
    <PDG {...sampleData}></PDG>
  </>);
}
