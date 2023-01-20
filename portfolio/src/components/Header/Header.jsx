import styles from "./Header.module.scss";
import { RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram, AiOutlineArrowDown } from "react-icons/ai";
import useSanityImage from "src/hooks/useSanityImage";

const Header = ({ header }) => {
  const { image, name, ocupation, summary } = header;

  const imageUrl = useSanityImage()


  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.image}>
        <img src={imageUrl(image).url()}/>
        </div>
        <div className={styles.content}>
          <span>{name}</span>
          <h1>{ocupation}</h1>
          <p>{summary}</p>
        </div>
        <div className={styles.social}>
          <a href="#">
            <RiLinkedinFill className={styles.icon} />
          </a>
          <a href="#">
            <RiWhatsappFill className={styles.icon} />
          </a>
          <a href="#">
            <AiFillInstagram className={styles.icon} />
          </a>
        </div>
        <a href="#" className={styles.arrow}>
          <AiOutlineArrowDown className={styles.icon} />
        </a>
      </div>
    </header>
  );
};

export default Header;
