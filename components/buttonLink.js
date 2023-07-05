import Link from 'next/link';
import Icon from './icon';

export default function ButtonLink({ href, icon, children }) {
  return (
    <Link href={href} className='button-link'>
      {icon?.position == 'start' && <Icon icon={icon.type} />}
      {children}
      {icon?.position == 'end' && <Icon icon={icon.type} />}
    </Link>
  );
}
