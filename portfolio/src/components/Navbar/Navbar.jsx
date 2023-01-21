import styles from "./Navbar.module.scss";
import NavLink from "./NavLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const commonAttributes = {
    className: styles.icon,
    onClick: () => setIsMenu(!isMenu),
  };

  return (
    <section className={styles["navbar-wrapper"]}>
      <div className={styles.navbar}>
        <nav>
          <ul className={styles.list}>
            <NavLink url="#home" text="Home" />
            <NavLink url="#about" text="Sobre mim" />
            <NavLink url="#skills" text="Experiências" />
            <NavLink url="#projects" text="Projetos" />
            <NavLink url="#footer" text="Contato" />
          </ul>
        </nav>

        <div className={`${styles.mobile} ${isMenu ? styles.active : ""}`}>
          <RxHamburgerMenu {...commonAttributes} />

          <div className={styles.backgroud}>
            <AiOutlineClose {...commonAttributes} />
            <nav>
              <ul className={styles["mobile-list"]}>
                <NavLink
                  url="#home"
                  text="Home"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <NavLink
                  url="#about"
                  text="Sobre mim"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <NavLink
                  url="#skills"
                  text="Experiências"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <NavLink
                  url="#projects"
                  text="Projetos"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <NavLink
                  url="#footer"
                  text="Contato"
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
