import About from "src/components/About/About";
import Footer from "src/components/Footer/Footer";
import Header from "src/components/Header/Header";
import Navbar from "src/components/Navbar/Navbar";
import Projects from "src/components/Projects/Projects";
import Skills from "src/components/Skills/Skills";
import client from "src/sanity";

export default function Home({
  header,
  social,
  about,
  skills,
  projects,
  footer,
}) {
  return (
    <>
      <Navbar />
      <Header header={header} social={social} />
      <main>
        <About about={about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
      </main>
      <Footer footer={footer} />
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const social = await client.fetch(`*[_type == "social"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const skills = await client.fetch(`*[_type == "skills"][0]`);
  const projects = await client.fetch(`*[_type == "projects"][0]`);
  const footer = await client.fetch(`*[_type == "footer"][0]`);

  return {
    props: {
      header,
      social,
      about,
      skills,
      projects,
      footer,
    },
  };
};
