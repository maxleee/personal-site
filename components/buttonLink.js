import Link from 'next/link';

export default function ButtonLink({ href, icon, children }) {
  return (
    <Link href={href} className='button-link'>
      {children}
    </Link>
  );
}
