import useSanityImage from "src/hooks/useSanityImage";
import Box from "../Ui/Box";
import styles from "./About.module.scss";

const About = ({ about }) => {
  const { image, title, text, button, url } = about;

  const imageUrl = useSanityImage()

  const renderBiography = text.map((text) => (
    <p key={text._key}>{text.paragraph}</p>
  ));

  return (
    <section className={styles.about}>
      <div className={styles.image}>
       <img src={imageUrl(image).url()} alt="imagem sobre"  />
       <div className={styles.box}>
        <Box text='Sobre' />
       </div>
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        {renderBiography}
        <a href={url} className="btn btn-primary">
          {button}
        </a>
      </div>
    </section>
  );
};

export default About;
