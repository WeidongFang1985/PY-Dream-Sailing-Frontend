import Header from "../../components/Header/Header";
import Campaign from "../../components/Campaign/Campaign";
import './HomePage.css';
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
	const items = [
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/1.webp",
			altText: "Image 1",
			title: "Extending the Threshold: Proposing a New Age Limit for Social Media Access",
			description: "Resilience to navigate the complexities and pressures inherent in online environments. This pivotal period should instead prioritize the cultivation of a stable sense of identity and the development of interpersonal skills, free from the digital burdens that social media can impose. Spearheaded by Nova radio's Michael ‘Wippa’ Wipfli and FINCH's Rob Galluzzo, \"Extending the Threshold\" aims to shield our youth by delaying their exposure to social media. We encourage families, educators, and community leaders to unite with us, endorse our petition, and assist us in presenting this critical issue to parliament."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/2.jpeg",
			altText: "Image 1",
			title: "Extending the Threshold: Proposing a New Age Limit for Social Media Access",
			description: "Resilience to navigate the complexities and pressures inherent in online environments. This pivotal period should instead prioritize the cultivation of a stable sense of identity and the development of interpersonal skills, free from the digital burdens that social media can impose. Spearheaded by Nova radio's Michael ‘Wippa’ Wipfli and FINCH's Rob Galluzzo, \"Extending the Threshold\" aims to shield our youth by delaying their exposure to social media. We encourage families, educators, and community leaders to unite with us, endorse our petition, and assist us in presenting this critical issue to parliament."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/3.webp",
			altText: "Image 1",
			title: "Extending the Threshold: Proposing a New Age Limit for Social Media Access",
			description: "Resilience to navigate the complexities and pressures inherent in online environments. This pivotal period should instead prioritize the cultivation of a stable sense of identity and the development of interpersonal skills, free from the digital burdens that social media can impose. Spearheaded by Nova radio's Michael ‘Wippa’ Wipfli and FINCH's Rob Galluzzo, \"Extending the Threshold\" aims to shield our youth by delaying their exposure to social media. We encourage families, educators, and community leaders to unite with us, endorse our petition, and assist us in presenting this critical issue to parliament."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/4.jpeg",
			altText: "Image 1",
			title: "Extending the Threshold: Proposing a New Age Limit for Social Media Access",
			description: "Resilience to navigate the complexities and pressures inherent in online environments. This pivotal period should instead prioritize the cultivation of a stable sense of identity and the development of interpersonal skills, free from the digital burdens that social media can impose. Spearheaded by Nova radio's Michael ‘Wippa’ Wipfli and FINCH's Rob Galluzzo, \"Extending the Threshold\" aims to shield our youth by delaying their exposure to social media. We encourage families, educators, and community leaders to unite with us, endorse our petition, and assist us in presenting this critical issue to parliament."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/5.webp",
			altText: "Image 1",
			title: "Extending the Threshold: Proposing a New Age Limit for Social Media Access",
			description: "Resilience to navigate the complexities and pressures inherent in online environments. This pivotal period should instead prioritize the cultivation of a stable sense of identity and the development of interpersonal skills, free from the digital burdens that social media can impose. Spearheaded by Nova radio's Michael ‘Wippa’ Wipfli and FINCH's Rob Galluzzo, \"Extending the Threshold\" aims to shield our youth by delaying their exposure to social media. We encourage families, educators, and community leaders to unite with us, endorse our petition, and assist us in presenting this critical issue to parliament."
		},
		{
			image: "https://py-uploadimages.s3.ap-southeast-2.amazonaws.com/6.webp",
			altText: "Image 1",
			title: "Extending the Threshold: Proposing a New Age Limit for Social Media Access",
			description: "Resilience to navigate the complexities and pressures inherent in online environments. This pivotal period should instead prioritize the cultivation of a stable sense of identity and the development of interpersonal skills, free from the digital burdens that social media can impose. Spearheaded by Nova radio's Michael ‘Wippa’ Wipfli and FINCH's Rob Galluzzo, \"Extending the Threshold\" aims to shield our youth by delaying their exposure to social media. We encourage families, educators, and community leaders to unite with us, endorse our petition, and assist us in presenting this critical issue to parliament."
		},
	];

	return (
		<div className="homepage">
			<Header />
			<div className="main">
				<Carousel items={items} />
				<Campaign />
			</div>

		</div>
	);
};

export default HomePage;
