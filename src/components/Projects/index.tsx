import { Link } from 'react-router-dom';
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import SectionHeader from "../SectionHeader";
const Projects = () => {
	const projects = [
	  { title: "Jaguare garment industry", image: p1, path: '/books' },
	  { title: "Outbox creatives building", image: p2, path: '/books' },
	  { title: "Slova private residence", image: p3, path: '/books' },
	];
  
	return (
	  <div className="w-full flex flex-col items-center justify-center gap-6 lg:mt-44 mt-20 lg:px-80 p-5">
		<SectionHeader
		  title="latest books"
		  description="Explore my books"
		/>
		<div className="w-full flex lg:flex-row flex-col items-center justify-between gap-6">
		  {projects.map((project) => (
			<Link to={project.path} key={project.title} className="flex flex-col gap-2 cursor-pointer">
			  <img
				src={project.image}
				alt={project.title}
			  />
			  <span className="text-secondary font-Fira font-medium text-[22px]">
				{project.title}
			  </span>
			</Link>
		  ))}
		</div>
	  </div>
	);
  };
  
  export default Projects;
