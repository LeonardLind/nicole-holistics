import banner1 from "../../assets/images/banner1.png";
import comma from "../../assets/images/comma.png";

const Banner = () => {
	return (
		<div className="w-full lg:mt-44 mt-20 h-[800px] bg-black relative flex items-center justify-center gap-3 lg:px-0 px-5">
			<img
				src={banner1}
				alt="banner1"
				className="absolute top-0 left-0 w-full h-full z-[50]"
			/>
			<div className="flex items-start gap-6 lg:flex-row flex-col">
				<img
					src={comma}
					alt="comma"
					className="z-[100]"
				/>
				<div className="flex flex-col gap-8">
					<span className="text-white max-w-[1200px] font-Urbanist  lg:text-[45px] md:text-[36px] sm:text-[28px] text-[24px] font-semibold z-[100]">
        				Thank you, Nicole, for guiding me on my journey of self-discovery. Your easy rapport, safe space,
        				and attentive listening helped me gain clarity and embrace vulnerability. You made me feel valued and understood. It’s a joy to work with you.
     				 </span>
     				 <span className="text-white font-Fira text-lg lg:text-lg md:text-base sm:text-sm font-medium z-[100]">
      					WITH RESPECT, KAMI
     				 </span>
				</div>
			</div>
		</div>
	);
};

export default Banner;
