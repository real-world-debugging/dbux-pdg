
const requiredScripts = [
  '//d3js.org/d3.v5.min.js',
  'https://unpkg.com/@hpcc-js/wasm@0.3.11/dist/index.min.js',
  'https://unpkg.com/d3-graphviz@3.0.5/build/d3-graphviz.js',
];

/** 
 * NOTE: we are currently not using this, since it does not respect relative dependencies, and does not allow
 * for a serial waterflow of script loadings.
 * 
 * Import scripts and wait for them to finish loading before rendering `Component`.
 * 
 * @see https://stackoverflow.com/a/68768587
 * @see https://nextjs.org/docs/basic-features/script
 */
function MultiScriptLoader({ scripts, loadIndicator, Component }) {
  const loadCount = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(() => {
    loadCount.current += 1;
    if (loadCount.current === scripts.length) {
      // finished loading
      setLoaded(true);
    }

    return () => {
      // cleanup
      loadCount.current = 0;
      setLoaded(false);
    };
  }, [scripts.length]);

  // TODO: add scripts incrementally
  const scriptEls = scripts.map((src, i) => <Script key={i} src={src} onLoad={onLoad} />);

  if (!loaded) {
    return (<>
      {scriptEls}
      {loadIndicator || 'loading...'}
    </>);
  }

  // finished loading
  //   (important: keep scripts alive)
  return (<>
    {scriptEls}
    <Component />
  </>);
}
