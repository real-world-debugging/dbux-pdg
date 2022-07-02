import { makePdgKey } from '../util/pdgUtil';
import { makeLink } from '../constants/paths';

export default function PDGLink(props) {
  const { linkData, children, title, className } = props;

  const pdgKey = makePdgKey(linkData);
  const href = makeLink('pdg', '#' + encodeURIComponent(pdgKey));

  return (
    <a title={title} href={href} className={className}>{children}</a>
  );
}
