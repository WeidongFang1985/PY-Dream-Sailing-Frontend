import Header from "../../components/Header/Header";
import Campaign from "../../components/Campaign/Campaign";
import './HomePage.css';
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
	const items = [
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/15.webp",
			altText: "Image 1",
			title: "Allow Aussie Pets on Transport",
			description: "Australia is renowned as a nation of pet lovers, yet our furry friends face limitations when it comes to traveling on public transport or domestic airlines. Despite 69% of households owning pets, many states and territories prohibit pets on transport, causing distress to pets and owners alike.We urge transport operators and ministers to update regulations and allow pets on transport, promoting inclusivity and supporting pet owners. Other regions, like the United States and Europe, permit pets on public transport under specific conditions, setting a precedent for Australia to follow.Allowing pets on transport offers numerous benefits, including improving pet health and well-being, reducing reliance on cars, supporting return-to-office initiatives, boosting the economy, and enhancing mental health benefits associated with pet companionship.We propose implementing specific guidelines to address concerns, such as designated pet areas, carrier requirements, and online training resources for pet owners. By legislating uniform regulations nationwide, we ensure consistency and ease of compliance.Join us in supporting transport operators and state Transport Ministers to allow pets on transport. Sign the petition and share #petsontransport to show your support and help make this change a reality."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/13.jpeg",
			altText: "Image 2",
			title: "Preserve Mount Evelyn's Residential Character: Say No to McDonald's",
			description: "'Planning & Property Partners' has applied to build a fast-food restaurant at 19-23 Hereford Road, Mount Evelyn, sparking concerns among residents and the broader community. This residential area is unsuitable for such development, raising objections based on the loss of community character, safety concerns, distance from the town center, and adverse impacts on wildlife, including the endangered powerful owl.Residents fear the negative effects on local businesses, as well as the potential noise, odor, bright lights, traffic congestion, litter, and vermin associated with a fast-food establishment. Given these concerns, we call on the Yarra Ranges Council to reject the proposal and preserve Mount Evelyn's residential character.Please support our efforts to prevent the construction of a fast-food restaurant at 19-23 Hereford Road, Mount Evelyn. Let's protect our community and its natural surroundings from unsuitable development."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/16.jpeg",
			altText: "Image 3",
			title: "Urgent Call to Increase Government Funding for the Arts",
			description: "The Australian music industry is facing a crisis with venues closing, festivals being cancelled, and musicians struggling to sustain their careers. The recent cancellation of Splendour in the Grass highlights the precarious state of our music festivals, leaving musicians and music-lovers concerned about the future of Australian music events.The financial strain on individuals due to the cost of living crisis affects musicians profoundly. As a musician myself, every setback in the music industry undermines our careers and aspirations. It's a painful reality we face daily.I urge Tony Burke, the Labor Minister for Arts, to prioritize increased funding for the arts sector, with a specific focus on supporting music festivals and venues. These establishments are vital to our communities, providing not only entertainment but also cultural enrichment and economic contribution.Now is the time for our government to recognize the invaluable role of the arts and provide the necessary financial support. We cannot afford to let our cultural institutions crumble. We need the arts now more than ever."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/4.jpeg",
			altText: "Image 4",
			title: "Protecting the Integrity of IGP Dog Sport in South Australia",
			description: "As concerned dog owners and advocates for animal welfare, we stand in opposition to proposed legislation in South Australia that inaccurately labels IGP (Internationale Gebrauchshund Prüfungsordnung) as \"attack dog training.\" This mischaracterization poses a threat to responsible owners and their IGP-trained companions, undermining efforts to foster positive human-animal relationships. IGP is a sport recognized by the FCI (Fédération Cynologique Internationale), designed to promote the well-being of working dog breeds through discipline, teamwork, and obedience. It emphasizes positive reinforcement and explicitly discourages aggression.Despite past reviews affirming the clear distinction between IGP and attack training, the current stance of the government lacks evidence and overlooks insights from experts in the field. By mislabeling IGP as \"attack dog training,\" the proposed legislation unfairly targets a legitimate and respected dog sport, potentially leading to unwarranted restrictions or penalties for participants. This approach undermines the principles of fairness and transparency that should guide the regulation of dog sports.We urge the government to engage in meaningful dialogue with stakeholders and base its decisions on evidence and expert advice. By taking an evidence-based approach, policymakers can ensure that regulations accurately reflect the nature of IGP as a sport focused on positive reinforcement and responsible dog ownership. This approach will uphold fairness and transparency while safeguarding the rights of responsible dog owners and their companions."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/8.webp",
			altText: "Image 5",
			title: "End Placement Poverty: Inclusion of Medical Students in Paid Placement Reform",
			description: "The Australian government's commitment to pay nursing, midwifery, social work, and teaching students for mandatory workplace placements is a positive step. However, it's concerning that medical students have been left out of this reform. Medical placements, characterized by their length and inflexibility, uniquely contribute to placement poverty among students. The structure of medical degrees demands over 2,000 hours of unpaid labor and study, coupled with inflexible timetables that often require relocation, making part-time work nearly impossible.Excluding medical students from paid placement reforms exacerbates the cost-of-living crisis they face, limiting access to the medical workforce to those who can afford it. Research indicates that students from low-SES and rural backgrounds are most likely to return to these areas to practice medicine, making paid placements a vital investment in these communities. Moreover, medical students play a crucial role in filling workforce shortages, both in clinical and administrative capacities, particularly in under-funded hospitals. However, without financial support during placements, they're often forced to seek additional employment, hindering their ability to contribute fully to the healthcare system.It's imperative that Minister Clare includes medical students in full-time placement reforms to end placement poverty and ensure an energized and supported medical student cohort capable of addressing healthcare workforce shortages effectively."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/10.webp",
			altText: "Image 6",
			title: "Urgent Call for Widening Centenary Highway Both Ways in Springfield Central",
			description: "The Centenary Highway in Springfield Central is struggling to meet the needs of our rapidly growing community. With areas like Ripley experiencing over 12% growth annually and neighboring suburbs expanding quickly, the current single-lane highway is causing significant delays and safety concerns for commuters.It's evident that we've outgrown this highway. To address the increasing traffic volume and ensure commuter safety, urgent action is needed to widen it to a minimum of two lanes each way. The current layout has led to numerous head-on collisions, posing a serious risk to drivers and passengers alike.Join us in calling on local authorities to prioritize the widening of Centenary Highway through Springfield Central. Let's ensure commuters have a faster, safer route, allowing them to spend more time with their families and less time stuck in traffic. Share this campaign to amplify our message and push for immediate action."
		},
	];

	return (
		<div className="homepage">
			<Header />
			<div className="main">
				<div className="main-container">
					<Carousel items={items} />
					<Campaign />
				</div>

			</div>

		</div>
	);
};

export default HomePage;
