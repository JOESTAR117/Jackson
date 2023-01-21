import styles from "./NavLink.module.scss";

const NavLink = ({ url, text, toggleMenu = null }) => {
  return (
    <li className={styles.item}>
      <a href={url} className="h6" onClick={toggleMenu}>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
