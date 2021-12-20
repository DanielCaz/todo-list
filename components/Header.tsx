import styles from "../styles/Header.module.scss";

const Header = ({
  title,
  userStatus,
}: {
  title: string;
  userStatus: number;
}) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {userStatus > -1 && (
        <button>{userStatus === 0 ? "Sign In" : "Sign Out"}</button>
      )}
    </header>
  );
};

Header.defaultProps = {
  userStatus: -1,
};

export default Header;
