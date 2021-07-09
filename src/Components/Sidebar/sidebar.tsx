import * as React from "react";
import styles from "./Sidebar.module.scss";

import overview from "../../assets/bi_grid-3x3-gap.svg";
import calendar from "../../assets/calendar.svg";
import star from "../../assets/star.svg";
import alarm from "../../assets/alarm-clock.svg";
import checked from "../../assets/calendar-check.svg";

const tabs = [
  { name: "Overview", icon: overview },
  { name: "Today", icon: calendar },
  { name: "Important", icon: star },
  { name: "Scheduled", icon: alarm },
  { name: "Done", icon: checked },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        {tabs.map((item, key: number) => {
          return (
            <li key={key}>
              <div className={styles.tab_container}>
                <img className={styles.icon} alt="overview" src={item.icon} />
                <span className={styles.link}>{item.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
