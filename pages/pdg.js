import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PDG from '../components/PDG';
// import useGraphs from '@src/hooks/useGraphs';

import { parsePdgLinkId } from '../util/pdgUtil';

export default function Pdg() {
  const { asPath } = useRouter();
  const pdgLinkId = asPath.split('#', 2)[1];
  // const graphs = useGraphs();
  // const renderData = graphs.getById(pdgId);
  const [sampleData, setSampleData] = useState(null);
  
  const linkData = parsePdgLinkId(decodeURIComponent(pdgLinkId));

  useEffect(() => {
    (async () => {
      // const chapterGroup = 'sorting';
      // const chapter = 'bubble-sort';
      // const exerciseId = 'javascript-algorithms#31';
      const {
        chapterGroup,
        chapter,
        exercise: exerciseId,
        pdgTitle
      } = linkData;
      const rawData = await import(`../../../data/gallery/pdg/${chapterGroup}/${chapter}/${exerciseId}/pdgData.json`);
      const selected = rawData.default.find(d => d.pdgTitle === pdgTitle);

      document.title = 'Dbux-PDG: ' + linkData.pdgTitle;
      
      setSampleData({
        chapterGroup: chapterGroup,
        chapter: chapter,
        exerciseId,
        pdgTitle,
        renderData: selected,
      });
    })();
  }, []);

  if (!linkData) {
    return <span className="danger">404 - invalid link: ${pdgLinkId}</span>;
  }

  if (!sampleData) {
    return 'loading...';
  }

  if (!sampleData.renderData) {
    return <span className="danger">404 - invalid link - could not find PDG of title "{linkData.pdgTitle}"</span>;
  }

  // console.log('renderData', sampleData);

  return <PDG {...sampleData}></PDG>;
}
