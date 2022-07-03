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
    return (<p className="text-danger">
      {exercise.label}
      <span> (failed: no PDG data available)</span>
    </p>);
  }

  if (!Array.isArray(pdgs)) {
    return <p className="text-danger">
      {exercise.label}
      <span> (failed: "{pdgs.failedReason}")</span>
    </p>;
  }

  return (<div>
    {exercise.label}
    <ul>
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
            <button className="btn btn-info ms-2 p-0 font-08" onClick={() => copyPDGArgs(renderData)}>copy</button>
          </li>;
        }
        else {
          return <li key={i}>
            <PDGLink linkData={linkData} className="btn btn-primary text-danger">PDG failed: {renderData.failedReason}</PDGLink>
          </li>;
        }
      })}
    </ul>
  </div>);
}
