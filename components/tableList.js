export default function TableList({ color = 'pink', align = 'left', items, header }) {
  return (
    <div className={`table-list ${align}`}>
      <h3 className={`table-list--title ${color}`}>{header}</h3>
      <ul className='table-list--list'>
        {items.map(item => (
          <li className='table-list--item' key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
