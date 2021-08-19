import { FC, useCallback, useState } from "react";

import { Chat } from "../commonComponents/Icons/Chat";
import { Chart } from "../commonComponents/Icons/Chart";
import { Folder } from "../commonComponents/Icons/Folder";
import { TabItem } from "./TabItem";
import { Home } from "../commonComponents/Icons/Home";
import { Calendar } from "../commonComponents/Icons/Calendar";

import styles from "./Sidebar.module.scss";




interface Props {
  anyProp?: string;
}

const Sidebar: FC<Props> = () => {
  


  const tabs = [
    { id: 0, name: "Overview", icon: <Home className={styles.icon} fill="#999999" />, count:0 },
    { id: 1, name: "Stats", icon: <Chart className={styles.icon} fill="#999999" /> ,count:0  },
    { id: 2, name: "Projects", icon: <Folder className={styles.icon} fill="#999999" />, count:0  },
    { id: 3, name: "Chat", icon: <Chat className={styles.icon} fill="#999999" />, count:0  },
    { id: 4, name: "Done", icon: <Calendar className={styles.icon} fill="#999999" />, count:0  },
  ];
  const [active, setActive] = useState({
    objectActive: 0,
  });

  const toggleActive  = useCallback((id: number) => {
    console.log('Me volvi ejecuctar');
    setActive( {objectActive:id });
  }, [setActive]);

  return (
    <div className={ styles.container }>
      
      {
        tabs.map((item => 
          <TabItem toggleActive={toggleActive} key={ item.id } item={item} /> 
        ))
      }

    </div>
  );
};

export default Sidebar;
