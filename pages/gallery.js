import Head from 'next/head';
import ChapterGroup from '../components/ChapterGroup';
import useGraphs from '../hooks/useGraphs';

/**
 * NOTE: This is the originally submitted link
 */
export default function Gallery() {
  const graphs = useGraphs();

  return (<>
    <Head>
      <title>Dbux-PDG Gallery</title>
      <meta name="description" content="The Dbux-PDG Gallery hosts visual results of the Dbux-PDG prototype applied to a diverse set of algorithms." />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <div className="container">
      <h1>Dbux-PDG Gallery</h1>
      {graphs.chapterGroups.map(chapterGroup => {
        return <ChapterGroup key={chapterGroup.name} chapterGroup={chapterGroup}></ChapterGroup>;
      })}
    </div>
  </>);
}