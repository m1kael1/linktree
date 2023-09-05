import "./App.css";
import MainLayout from "./layouts/main-layout";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";
import imageProfile from "./assets/profile.jpg";
import Massege from "./components/massege";

function App() {
	return (
		<MainLayout>
			<div className=" flex flex-col group items-center mb-4 transition-all relative ">
				<img
					className="bg-[#fe3e31]  w-[120px] rounded-full border-2 cursor-pointer border-my-gray-200 group-hover:border-4	 group-hover:border-my-gray-800 transition-all aspect-square object-contain overflow-hidden z-50"
					src={imageProfile}
					alt=""
				/>

				<Massege />
			</div>

			<a
				href=""
				className="text-white bg-[#24292F] text-lg hover:scale-110 sm:w-96 transition-all w-full hover:bg-[#24292F]/90 font-medium rounded-lg  px-5 py-3  mb-2 flex justify-center items-center gap-2 min-w-fit"
			>
				<GrGithub size={25} />
				Github
			</a>
			<a
				href=""
				className="text-white bg-gradient-to-r from-blue-700 to-blue-500 text-lg hover:scale-110 sm:w-96 transition-all w-full hover:bg-[#24292F]/90 font-medium rounded-lg  px-5 py-3  mb-2 flex justify-center items-center gap-2 min-w-fit"
			>
				<GrLinkedin size={25} />
				Linkedin
			</a>

			<a
				href=""
				className="text-white bg-gradient-to-r  from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-lg hover:scale-110 sm:w-96 transition-all w-full hover:bg-[#24292F]/90 font-medium rounded-lg  px-5 py-3  mb-2 flex justify-center items-center gap-2 min-w-fit"
			>
				<GrInstagram size={25} />
				Instagram
			</a>
		</MainLayout>
	);
}

export default App;
