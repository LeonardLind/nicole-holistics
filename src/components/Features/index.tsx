import House from "../../assets/images/house.svg";
import Design from "../../assets/images/design.svg";
import Maintenance from "../../assets/images/maintenance.svg";
import { CaretForwardOutline } from "react-ionicons";
import { Link } from 'react-router-dom';

const Features = () => {
	const features = [
		{
			icon: House,
			title: "Body",
			description:
				"Physical and mental health are linked. Prioritize exercise, nutrition, rest, and self-image for balance.",
		},
		{
			icon: Design,
			title: "Mind",
			description:
				"Mindfulness, cognitive fitness, and social connections help us find joy, resilience, and fulfillment.",
		},
		{
			icon: Maintenance,
			title: "Soul",
			description:
				"Connecting with our inner selves, gratitude, purpose, and stillness leads to joy and fulfillment.",
		},
	];
	return (
		<div className="w-full flex lg:flex-row flex-col items-center justify-between lg:mt-44 mt-20 lg:px-80 px-5 lg:gap-0 gap-12">
			{features.map((feature) => (
				<div
					key={feature.title}
					className="flex flex-col lg:items-start items-center gap-3"
				>
					<img
						src={feature.icon}
						alt={feature.title}
						className="w-[71px]"
					/>
					<span className="text-secondary font-Fira text-[26px] font-bold">
						{feature.title}
					</span>
					<p className="text-lightText font-Urbanist text-lg max-w-[400px] lg:text-left text-center">
						{feature.description}
					</p>
					<Link to="/about" className="flex items-center gap-2 cursor-pointer mt-2">
						<span className="font-Urbanist font-semibold text-lg text-secondary">
							View Details
						</span>
					 <CaretForwardOutline cssClasses={"!fill-secondary !text-secondary"} />
					</Link>
				</div>
			))}
		</div>
	);
};

export default Features;
