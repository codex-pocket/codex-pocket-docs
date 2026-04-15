import {isValidElement, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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
  const {siteConfig} = useDocusaurusContext();
  const href = String(
    siteConfig.customFields?.macDownloadUrl ??
      'https://github.com/codex-pocket/codex-pocket-releases/releases',
  );

  return (
    <Link className={className} href={href}>
      {normalizeChildren(children)}
    </Link>
  );
}
