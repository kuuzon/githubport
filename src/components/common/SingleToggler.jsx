import { InnerMoon } from "@theme-toggles/react";
// DOCS: https://toggles.dev/docs/react

import styles from './SingleToggler.module.scss';
import useTheme from '../../hooks/useTheme';

const SingleToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleContainer}>
      <InnerMoon
        className={theme === "dark" ? styles.darkToggle : styles.lightToggle}
        toggled={theme === "dark"}
        toggle={toggleTheme}
      />
    </div>
  );
}

export default SingleToggler