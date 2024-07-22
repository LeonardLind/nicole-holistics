import aboutImage from "../../assets/images/aboutImage.png";
import aboutVideo from "../../assets/images/aboutVideo.png";
import abstractTwo from "../../assets/images/abstract-two.svg";
import Button from "../Button";
import SectionHeader from "../SectionHeader";

const About = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center gap-16 lg:mt-44 mt-20 lg:px-80 p-5 relative">
			<SectionHeader
				title="about me"
				description="Work with me"
			/>
			<div className="flex lg:flex-row flex-col items-start gap-12">
				<img
					src={aboutImage}
					alt="aboutImage"
				/>
				<div className="flex flex-col">
					<img
						src={aboutVideo}
						alt="aboutVideo"
					/>
					<span className="font-Urbanist font-medium text-xl text-secondary mt-12">
						I’m a dedicated life coach committed to positively impacting lives.
					</span>
					<span className="font-Urbanist text-lg text-disabled mt-3">
						Coaching has given me purpose and joy. I thrive on seeing each person’s potential and resilience.
						Helping clients grow and succeed is deeply fulfilling.
					</span>
					<Button to="/about" className="mt-10">About me</Button>
				</div>
			</div>
			<img
				src={abstractTwo}
				alt="abstractTwo"
				className="absolute top-0 left-0 z-[-1] lg:block hidden"
			/>
		</div>
	);
};

export default About;
