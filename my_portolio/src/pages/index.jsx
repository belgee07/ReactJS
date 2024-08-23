import { Header, AboutMe, Introduction } from "@/components";
import { Skill } from "@/components/skill";

const Home = () => {
  return (
    <div className="max-w-8xl mx-auto ">
      <Header />
      <AboutMe />
      <Introduction />
      <Skill />
    </div>
  );
};

export default Home;
