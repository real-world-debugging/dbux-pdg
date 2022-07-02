import { makePdgLinkId } from '../util/pdgUtil';
import { makeLink } from '../constants/paths';

export default function PDGLink(props) {
  const { linkData, children, title, className } = props;

  // TODO
  const baseUrl = makeLink('gallery', 'pdg#' + encodeURIComponent(linkId));
  const linkId = makePdgLinkId(linkData);
  
  const href = `${baseUrl}${PDGBaseUrl}#${encodeURIComponent(linkId)}`; // join(pkg, path)

  return (
    <a title={title} href={href} className={className}>{children}</a>
  );
}
