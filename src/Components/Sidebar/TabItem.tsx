import * as React from 'react';

import styles from './Sidebar.module.scss';

type Item = {
    id: number,
    name: string,
    icon?: JSX.Element,
    count: number,
}

interface Props {
  toggleActive: (n:number)=>void;
  item: Item;
}

export const TabItem: React.FC<Props> = React.memo( ({ item, toggleActive }) => {
  console.log('Me volvi ha Renderizar')
  return (
      <div onClick={()=> toggleActive(item.id)} className={styles.tab_container}  >
        <div style={{ display:'flex', alignItems: 'center' }}>
          {item.icon}
          <span className={styles.link}>{item.name}</span>
        </div>
        {
          item.count > 0 && <div className={styles.count}>{item.count}</div>
        }
      </div>
    )
} );
