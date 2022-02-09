import Logo from '../Logo';
import styles from './Header.module.scss';

const Header = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  return (
    <header className={styles.ly_header}>
      <div className={styles.ly_header_inner}>
        <Logo />
        <div className={styles.ly_btnWrapper}>{children}</div>
      </div>
    </header>
  );
};

export default Header;