import styles from './Footer.module.scss';
import useTheme from '../../hooks/useTheme';

function Footer() {
  const { theme } = useTheme(); 

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <span>&copy; 2024 react-base</span>
    </footer>
  )
}

export default Footer