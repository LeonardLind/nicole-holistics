import abstractOne from "../assets/images/abstract-one.svg";
import header from "../assets/images/aboutMe.png";
import House from "../assets/images/house.svg";
import Design from "../assets/images/design.svg";
import Maintenance from "../assets/images/maintenance.svg";

const features = [
  {
    icon: House,
    title: "Body",
    description:
      "I'm a passionate life coach driven by a desire to make a positive impact on people's lives. Becoming a life coach has enriched my own journey, providing me with a sense of purpose and fulfillment. I draw energy from witnessing the resilience and potential within each individual. Guiding others and witnessing their growth fuels my own personal development. I'm honored to walk alongside clients, empowering them to tap into their strengths, achieve their goals, and live authentically. Let's embark on this transformative journey together!",
  },
  {
    icon: Design,
    title: "Mind",
    description:
      "I'm a passionate life coach driven by a desire to make a positive impact on people's lives. Becoming a life coach has enriched my own journey, providing me with a sense of purpose and fulfillment. I draw energy from witnessing the resilience and potential within each individual. Guiding others and witnessing their growth fuels my own personal development. I'm honored to walk alongside clients, empowering them to tap into their strengths, achieve their goals, and live authentically. Let's embark on this transformative journey together!",
  },
  {
    icon: Maintenance,
    title: "Soul",
    description:
      "I'm a passionate life coach driven by a desire to make a positive impact on people's lives. Becoming a life coach has enriched my own journey, providing me with a sense of purpose and fulfillment. I draw energy from witnessing the resilience and potential within each individual. Guiding others and witnessing their growth fuels my own personal development. I'm honored to walk alongside clients, empowering them to tap into their strengths, achieve their goals, and live authentically. Let's embark on this transformative journey together!",
  },
];
const Header = () => {
	return (
		<div className="relative w-full">
			<img
				src={abstractOne}
				alt="abstractOne"
				className="absolute top-0 right-0 z-[-1] lg:block hidden"
			/>
			<div className="flex w-full lg:flex-row flex-col-reverse items-center justify-between lg:mt-36 mt-5 lg:px-80 px-5 lg:gap-0 gap-8">
				<div className="flex flex-col gap-6">
					<span className="text-secondary font-Fira text-6xl lg:text-[60px] md:text-[40px] sm:text-[30px] lg:max-w-[500px] max-w-[95%] font-bold">
						It's never to late to be happy.
					</span>
					<p className="font-Urbanist text-lightText lg:max-w-[500px] max-w-[95%] lg:text-[24px] md:text-[22px] sm:text-[18px]  ">
           I'm a passionate life coach driven by a desire to make a positive impact on people's lives. 
           Becoming a life coach has enriched my own journey, providing me with a sense of purpose and fulfillment. 
           I draw energy from witnessing the resilience and potential within each individual. Guiding others and witnessing 
           their growth fuels my own personal development. I'm honored to walk alongside clients, empowering them to tap into their strengths, 
           achieve their goals, and live authentically. Let's embark on this transformative journey together!
					</p>
				</div>
				<img
					src={header}
					alt="header"
				/>
			</div>


      <div className="w-full flex flex-col items-center justify-between mt-44 px-5 gap-12">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center gap-3 max-w-[800px] w-full"
        >
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-[71px]"
          />
          <span className="text-secondary font-Fira text-[26px] font-bold">
            {feature.title}
          </span>
          <p className="text-lightText font-Urbanist text-lg text-center w-full">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
	
		</div>
	);
};

export default Header;
