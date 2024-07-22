import abstractOne from "../../assets/images/abstract-one.svg";
import header from "../../assets/images/header.png";
import Button from "../Button";

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
					<span className="text-secondary font-Fira text-6xl lg:max-w-[500px] max-w-[95%] font-bold">
						This is the end for the old you.
					</span>
					<p className="text-lg font-Urbanist text-lightText lg:max-w-[500px] max-w-[95%]">
						Begin your self-healing journey with me. 
						This is where your transformation starts.
					</p>
					<Button to="/services" className="mt-3">View My Services</Button>
				</div>
				<img
					src={header}
					alt="header"
				/>
			</div>
		</div>
	);
};

export default Header;
