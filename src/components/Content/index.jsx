import React from 'react';
import {
	About,
	Contact,
	FAQ,
	Intro,
	News,
	Services,
	Testimonials,
	Works,
} from './sections';

export const Content = () => {
	return (
		<div>
			<Intro />
			<About />
			<Services />
			<Works />
			<FAQ />
			<Testimonials />
			<News />
			<Contact />
		</div>
	);
};
