import React, { Fragment } from 'react';
import Switch from "react-switch";
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import useTheme from '../../hooks/useTheme';
// DOCS: https://github.com/markusenglund/react-switch#readme

// Invoke the theme context within child components
const ThemeToggler = () => {
  // Access the theme context values & store
  const { theme, toggleTheme } = useTheme(); 

  return (
    <Fragment>
      <label>
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