import { makePdgKey } from '../util/pdgUtil';
import { makeHref } from '../constants/paths';
import Link from 'next/link';

export default function PDGLink(props) {
  const { linkData, children, title, className } = props;

  const pdgKey = makePdgKey(linkData);
  const href = makeHref('pdg/' + encodeURIComponent(pdgKey));

  return (
    <Link title={title} href={href} className={className}>
      <a>
        {children}
      </a>
    </Link>
  );
}
