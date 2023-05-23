import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Experiences from "../components/Experiences/Experiences";
import Hero from "../components/Hero/Hero";
import FreelanceProjects from "../components/Projects/FreelanceProjects";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Experiences />
      <Projects />
      <FreelanceProjects />
      <Technologies />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
