export default function Icon({ icon }) {
  switch (icon) {
    case 'external':
      return (
        <svg
          width='19'
          height='18'
          viewBox='0 0 19 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8.25 2.75H5.25C3.04086 2.75 1.25 4.54086 1.25 6.75V12.75C1.25 14.9591 3.04086 16.75 5.25 16.75H11.25C13.4591 16.75 15.25 14.9591 15.25 12.75V9.75'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.625 9.625L17.0625 1.1875M17.0625 1.1875H12M17.0625 1.1875V6'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
      break;
    case 'home':
      return (
        <svg
          width='13'
          height='15'
          viewBox='0 0 13 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M11.5 7.02552V10.5134C11.5 12.1702 10.1569 13.5134 8.5 13.5134H4.5C2.84315 13.5134 1.5 12.1702 1.5 10.5134V7.04654C1.5 6.23452 1.82917 5.45719 2.41231 4.89211L5.84519 1.56556C6.2355 1.18733 6.85645 1.1901 7.24337 1.5718L10.6068 4.88982C11.1783 5.45356 11.5 6.2228 11.5 7.02552Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
      break;
    default:
      return;
      break;
  }
}
