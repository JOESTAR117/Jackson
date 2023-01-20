import About from "src/components/About/About";
import Header from "src/components/Header/Header";
import Skills from "src/components/Skills/Skills";
import client from "src/sanity";

export default function Home({ header, about, skills }) {
  return (
    <>
      <Header header={header} />
      <main>
        <About about={about} />
        <Skills skills={skills} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const skills = await client.fetch(`*[_type == "skills"][0]`);

  return {
    props: {
      header,
      about,
      skills
    },
  };
};
