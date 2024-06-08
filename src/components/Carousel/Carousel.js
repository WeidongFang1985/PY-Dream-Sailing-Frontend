import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const PrevArrow = (props) => {
	const { className, onClick } = props;
	return (
		<button className={`${className} arrow-btn`} onClick={onClick}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
			</svg>
		</button>
	);
};

const NextArrow = (props) => {
	const { className, onClick } = props;
	return (
		<button className={`${className} arrow-btn`} onClick={onClick}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"></path>
			</svg>
		</button>
	);
};

const Carousel = ({ items }) => {
	const mainSlider = useRef(null);
	const navSlider = useRef(null);
	const [settingsMain, setSettingsMain] = useState({});
	const [settingsThumbs, setSettingsThumbs] = useState({});

	useEffect(() => {
		setSettingsMain({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: navSlider.current,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />
		});
		setSettingsThumbs({
			slidesToShow: 6,
			slidesToScroll: 1,
			asNavFor: mainSlider.current,
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			swipeToSlide: false,
			draggable: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}, []);

	return (
		<div>
			<Slider ref={mainSlider} {...settingsMain}>
				{items.map((item, index) => (
					<div key={index}>
						<img src={item.image} alt={item.altText} style={{ width: "40%", height: "auto" }} />
					</div>
				))}
			</Slider>
			<div className="thumbnail-slider-wrap">
				<Slider ref={navSlider} {...settingsThumbs}>
					{items.map((item, index) => (
						<div key={index}>
							<img src={item.image} alt={item.altText} style={{ width: "100%", cursor: "pointer" }} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Carousel;
