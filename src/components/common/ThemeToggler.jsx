import { Fragment } from 'react';
import Switch from "react-switch";
import { MdLightMode, MdDarkMode } from 'react-icons/md';

import styles from './ThemeToggler.module.scss';
import useTheme from '../../hooks/useTheme';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <Fragment>
      <label className={styles.toggleContainer}>
        <span className={styles.label}>Switch Theme</span>
        <Switch
          // Use context values
          onChange={toggleTheme}
          checked={theme === "dark"}

          // NON-TOGGLED MODE: light
          checkedIcon={false}
          checkedHandleIcon={
            <MdDarkMode
              style={{ color: "black", paddingLeft: "5px", fontSize: "20px" }}
            />
          }
          offColor='#eab308'
          
          // TOGGLED MODE: dark
          uncheckedIcon={false}
          uncheckedHandleIcon={
            <MdLightMode
              style={{ color: "black", paddingLeft: "5px", fontSize: "20px" }}
            />
          }
          onColor='#6366f1'
        />
      </label>
    </Fragment>
  );
}

export default ThemeToggler