import {isValidElement, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

type MacDownloadLinkProps = {
  children: ReactNode;
  className?: string;
};

function normalizeChildren(children: ReactNode): ReactNode {
  if (isValidElement<{children?: ReactNode}>(children) && children.type === 'p') {
    return children.props.children;
  }

  return children;
}

export default function MacDownloadLink({
  children,
  className,
}: MacDownloadLinkProps): ReactNode {
  const to = useBaseUrl('/docs/mac/');

  return (
    <Link className={className} to={to}>
      {normalizeChildren(children)}
    </Link>
  );
}
