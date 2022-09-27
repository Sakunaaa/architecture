import React from 'react';

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

export const Nav = () => {
	return (
		<nav>
			<ol className="nav-items">
				{navItems.map((item, index) => {
					const stringIndex = String(index + 1);
					const textIndex =
						stringIndex.length > 1 ? stringIndex : `0${stringIndex}`;
					return (
						<li>
							<a
								href={`#${item.toLocaleLowerCase()}`}
							>{`${textIndex}. ${item}`}</a>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};
