import React from 'react';
import Chapter from './Chapter';

export default function ChapterGroup(props) {
  const { chapterGroup, i } = props;
  const { name, chapters } = chapterGroup;
  //  {i + 1}
  return <div className="">
    <details className="row">
      <summary>
        <h3 className="ilb"><u>Folder: {name}</u></h3>
      </summary>
      <div>
        {chapters.map(chapter => {
          return <div key={chapter.name}>
            <Chapter chapterGroup={name} chapter={chapter}></Chapter>
          </div>;
        })}
      </div>
    </details>
  </div>;
}
