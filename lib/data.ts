// Centralized Data Layer

export interface PortfolioImage {
	id: string;
	src: string;
	title?: string;
	category?: string;
	span?: string;
}

export interface Service {
	id: string;
	title: string;
	image: string;
}

export const servicesData: Service[] = [
	{ id: "s0", title: "Pre-Wedding", image: "/images/placeholders/work0.jpg" },
	{ id: "s1", title: "Wedding", image: "/images/placeholders/AK1.jpg" },
	{ id: "s2", title: "Baby Shower", image: "/images/placeholders/work2.jpg" },
	{ id: "s3", title: "Photography", image: "/images/placeholders/AK3.jpg" },
	{ id: "s4", title: "Wedding", image: "/images/placeholders/work4.jpg" },
	{ id: "s5", title: "Wedding", image: "/images/placeholders/work5.jpg" },
	{ id: "s6", title: "Editorial", image: "/images/placeholders/work6.jpg" },
	{ id: "s7", title: "Wedding", image: "/images/placeholders/work7.jpg" },
	{ id: "s8", title: "Photography", image: "/images/placeholders/work8.jpg" },
	{ id: "s9", title: "Editorial", image: "/images/placeholders/work9.jpg" },
];

export const portfolioImages: PortfolioImage[] = [
	{
		id: "p1",
		title: "Aaina & Daideep",
		category: "Wedding",
		src: "/images/placeholders/AK4.jpg",
		span: "row-span-2 col-span-1",
	},
	{
		id: "p2",
		title: "Sapan & Sajnee",
		category: "Pre-Wedding",
		src: "/images/placeholders/work7.jpg",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p3",
		title: "Aditya Gadhvi",
		category: "Events",
		src: "/images/placeholders/AK5.jpg",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p4",
		title: "Vidhi & Kashyap",
		category: "Baby Shower",
		src: "/images/placeholders/work2.jpg",
		span: "col-span-2 row-span-2",
	},
	{
		id: "p5",
		title: "Priya & Preean",
		category: "Product",
		src: "/images/placeholders/work5.jpg",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p6",
		title: "Vidhi & Rushi",
		category: "Editorial",
		src: "/images/placeholders/work6.jpg",
		span: "col-span-1 row-span-1",
	},
];

export const backgroundImages = [
	"/images/placeholders/bg3.jpg",
	"/images/placeholders/bg0.jpg",
	"/images/placeholders/bg4.jpg",
	"/images/placeholders/bg5.jpg",
	"/images/placeholders/bg1.jpg",
	"/images/placeholders/bg2.jpg",
];

export const videoSources = {
	portraitOne:
		"https://videos.smugmug.com/PORTFOLIO/Cinematography/i-2ShkqrZ/0/KhXGMH8sqwr7pNbwB5MprsjRwS2bDWgs4vZFLNrCW/SMIL/2ShkqrZ.smil/master.m3u8",
	portraitOnePoster:
		"https://photos.smugmug.com/PORTFOLIO/Cinematography/i-2ShkqrZ/0/KG2BCVP9VwC2fbzF4FgM969c59cHJFQKtd7kcMxdP/L/Jeel%20%26%20Parth-L.jpg",
	portraitTwo:
		"https://videos.smugmug.com/PORTFOLIO/Cinematography/i-B6CFM8k/0/MTGv5ccBKgWrdW26V67hH7qPsGqnM8xMXrHLFDFqf/SMIL/B6CFM8k.smil/master.m3u8",
	portraitTwoPoster:
		"https://photos.smugmug.com/PORTFOLIO/Cinematography/i-B6CFM8k/0/M5dtGfrPv4Phcfp6DnChXcSBkqkK2tB7Cz5ws68z2/X2/Reel%2001-X2.jpg",
	landscape:
		"https://videos.smugmug.com/PORTFOLIO/Cinematography/i-dbRpQLs/0/Kx6H3jvjhhsNVnx3rNmdGzfC7dWFKBTqrZvTS3tR6/SMIL/dbRpQLs.smil/master.m3u8",
	landscapePoster:
		"https://photos.smugmug.com/PORTFOLIO/Cinematography/i-dbRpQLs/0/KRNw4rsc7rSZVmCnLb8w4GdSx4zxCs2cNFvxwQb9M/X3/2023113019403916-7931054866584463286--1920-X3.jpg",
};
