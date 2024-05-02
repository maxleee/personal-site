import React from 'react';

const TableList = React.forwardRef(({ color = 'pink', items, header }, ref) => {
  return (
    <div ref={ref} className='table-list'>
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
});

export default TableList;
