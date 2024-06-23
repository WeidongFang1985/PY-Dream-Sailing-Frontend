import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';
import top from '../../assets/top.svg';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 1200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		isVisible && (
			<span className="back-to-top-button" onClick={scrollToTop}>
                <img src={top} alt="Back to Top"/>
                <span>Top</span>
            </span>
		)
	);
};

export default BackToTopButton;
