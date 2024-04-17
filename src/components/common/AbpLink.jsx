import { Link } from 'react-router-dom';
import styles from './AbpLink.module.scss'

const AbpLink = ({ path, children }) => {
  return (
    <Link className={styles.btn} to={path}>
      {children}
    </Link>
  );
};

export default AbpLink