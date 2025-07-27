import TechIcon from "../components/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { iconsList } from "../constants";

const TechStack = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full md:my-40 my-20">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title="TECH STACK"
            number="02"
            text="My Go-To Tools for Crafting Solutions"
          />
        </div>
        <div className="md:mt-20 mt-10 relative">
          <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
          <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
          <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
              {iconsList.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
