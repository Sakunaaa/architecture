import React from 'react';

export const Nav = () => {
	const navItems = [
		'Intro',
		'About',
		'Services',
		'Works',
		'FAQ',
		'Testimonials',
		'News',
		'Contact',
	];
	return (
		<nav>
			<ol className="nav-items">
				{navItems.map((item, index) => {
					const stringIndex = String(index + 1);
					const textIndex =
						stringIndex.length > 1 ? stringIndex : `0${stringIndex}`;
					return <li>{`${textIndex}. ${item}`}</li>;
				})}
			</ol>
		</nav>
	);
};
