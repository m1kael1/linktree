import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";

const links = [
	{
		social_media: "Github",
		link: "https://github.com/m1kael1",
		add_class_name: " bg-[#24292F] hover:bg-[#24292F]/90 ",
		icon: <GrGithub size={25} />,
	},
	{
		social_media: "Linkedin",
		link: "https://github.com/m1kael1",
		add_class_name:
			" hover:bg-gradient-to-l bg-gradient-to-r from-blue-700 to-blue-500  ",
		icon: <GrLinkedin size={25} />,
	},
	{
		social_media: "Instagram",
		link: "https://github.com/m1kael1",
		add_class_name:
			" bg-gradient-to-r  from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:bg-gradient-to-l ",
		icon: <GrInstagram size={25} />,
	},
];

export default links;
