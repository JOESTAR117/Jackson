import styles from "./Header.module.scss";
import { RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowDown,
} from "react-icons/ai";
import useSanityImage from "src/hooks/useSanityImage";

const Header = ({ header, social }) => {
  const { image, name, ocupation, summary } = header;
  const { linkedin, instagram, whatsapp, github } = social;

  const imageUrl = useSanityImage();

  return (
    <header className={styles["header-wrapper"]} id='home'>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={imageUrl(image).url()} />
        </div>
        <div className={styles.content}>
          <span>{name}</span>
          <h1>{ocupation}</h1>
          <p>{summary}</p>
        </div>
        <div className={styles.social}>
          <a href={linkedin} target="_blank">
            <RiLinkedinFill className={styles.icon} />
          </a>
          <a href={whatsapp} target="_blank">
            <RiWhatsappFill className={styles.icon} />
          </a>
          <a href={instagram} target="_blank">
            <AiFillInstagram className={styles.icon} />
          </a>
          <a href={github} target="_blank">
            <AiFillGithub className={styles.icon} />
          </a>
        </div>
        <a href="#footer" className={styles.arrow}>
          <AiOutlineArrowDown className={styles.icon} />
        </a>
      </div>
    </header>
  );
};

export default Header;
