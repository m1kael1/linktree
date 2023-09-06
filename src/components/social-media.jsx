const SocialMedia = ({ data }) => {
	return (
		<a
			href={data.link}
			className={`text-white  text-lg hover:scale-110 sm:w-96 transition-all w-full  font-medium rounded-lg  px-5 py-3  mb-2 flex justify-center items-center gap-2 min-w-fit ${data.add_class_name} `}
		>
			{data.icon}
			{data.social_media}
		</a>
	);
};

export default SocialMedia;
