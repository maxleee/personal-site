import Link from 'next/link';
import Icon from './icon';

export default function ButtonLink({ href, icon, children, size }) {
  return (
    <Link href={href} className={`button-link ${size === 'large' && 'large'}`}>
      {icon?.position == 'start' && <Icon icon={icon.type} />}
      {children}
      {icon?.position == 'end' && <Icon icon={icon.type} />}
    </Link>
  );
}
