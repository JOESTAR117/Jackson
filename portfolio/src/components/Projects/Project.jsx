import useSanityImage from "src/hooks/useSanityImage";
import styles from "./Project.module.scss";
import { AiFillGithub } from "react-icons/ai";

const Project = ({ project }) => {
  const { image, title, technologies, description, url } = project;

  const imageUrl = useSanityImage();
  console.log(imageUrl);

  const renderTechnologies = technologies.map((technology) => (
    <span key={technology._key}>{technology.technology}</span>
  ));
  return (
    <li className={styles.project}>
      <a href={url} target='_blank'>
        <div className={styles.image}>
          <AiFillGithub className={styles.icon} />
         <img src={imageUrl(image).url()} alt="" />
        </div>
        {renderTechnologies}
        <h3 className="h5">{title}</h3>
        <p>{description}</p>
      </a>
    </li>
  );
};

export default Project;
