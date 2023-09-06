const MainLayout = ({ children }) => {
	return (
		<section className=" min-h-screen bg-gradient-to-tl from-my-gray-900 to-my-gray-400 ">
			<div className="flex flex-col justify-center items-center min-h-[80vh] px-8  ">
				{children}
			</div>
		</section>
	);
};
export default MainLayout;
