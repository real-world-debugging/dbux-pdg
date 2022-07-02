import React from 'react';
import PDGLink from './PDGLink';

export default function Exercise(props) {
  const { chapterGroup, chapter, exercise } = props;
  const { pdgs } = exercise;

  function copyPDGArgs(renderData) {
    navigator.clipboard.writeText(JSON.stringify({
      exerciseName: exercise.name,
      pdgTitle: renderData.pdgTitle
    }, null, 2));
  }

  if (!pdgs) {
    return <p className="text-danger">(PDG data not exported yet)</p>;
  }

  if (!Array.isArray(pdgs)) {
    return <p className="text-danger">{pdgs.failedReason}</p>;
  }

  return <ul>
    {pdgs.map((renderData, i) => {
      const linkData = {
        chapterGroup,
        chapter,
        exercise: exercise.id,
        pdgTitle: renderData.pdgTitle
      };

      if (!renderData.failedReason) {
        return <li key={i}>
          <PDGLink linkData={linkData}>{renderData.uniqueTitle}</PDGLink>
          <button className="ms-2" onClick={() => copyPDGArgs(renderData)}>copy</button>
        </li>;
      }
      else {
        return <li key={i}>
          <PDGLink linkData={linkData} className="text-danger">PDG failed: {renderData.failedReason}</PDGLink>
        </li>;
      }
    })}
  </ul>;
}
