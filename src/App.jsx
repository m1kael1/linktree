import MainLayout from "./layouts/main-layout";
import imageProfile from "./assets/profile.jpg";
import Message from "./components/message";
import SocialMedia from "./components/social-media";
import links from "./data/social-media";

function App() {
	return (
		<MainLayout>
			<div className=" flex flex-col group items-center mb-4 transition-all relative ">
				<img
					className=" w-[120px] rounded-full border-2 cursor-pointer border-my-gray-200 group-hover:border-4	 group-hover:border-my-gray-800 transition-all aspect-square object-cover overflow-hidden z-50"
					src={imageProfile}
					alt="profile"
				/>

				<Message />
			</div>
			{links.map((links, index) => (
				<SocialMedia key={index} data={links} />
			))}
		</MainLayout>
	);
}

export default App;
