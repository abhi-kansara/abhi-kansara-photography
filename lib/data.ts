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

// Pre-Wedding | Wedding | Baby Shower | Product | Photography | Editorial | Event
export const servicesData: Service[] = [
	{ id: "s0", title: "Wedding", image: "/images/work/work0.jpg" },
	{ id: "s1", title: "Event", image: "/images/work/work1.jpg" },
	{ id: "s2", title: "Product", image: "/images/work/work2.jpg" },
	{ id: "s3", title: "Photography", image: "/images/work/work3.jpg" },
	{ id: "s4", title: "Pre-Wedding", image: "/images/work/work4.jpg" },
	{ id: "s5", title: "Photography", image: "/images/work/work5.jpg" },
	{ id: "s6", title: "Event", image: "/images/work/work6.jpg" },
	{ id: "s7", title: "Event", image: "/images/work/work7.jpg" },
	{ id: "s8", title: "Event", image: "/images/work/work8.jpg" },
	{ id: "s9", title: "Photography", image: "/images/work/work9.jpg" },
	{ id: "s10", title: "Editorial", image: "/images/work/work10.jpg" },
	{ id: "s11", title: "Pre-Wedding", image: "/images/work/work11.jpg" },
	{ id: "s12", title: "Photography", image: "/images/work/work12.jpg" },
	{ id: "s13", title: "Baby Shower", image: "/images/work/work13.jpg" },
];

export const portfolioImages: PortfolioImage[] = [
	{
		id: "p1",
		title: "Aaina & Daideep",
		category: "Wedding",
		src: "/images/feature/feature0.jpg",
		span: "row-span-2 col-span-1",
	},
	{
		id: "p2",
		title: "Sapan & Sajnee",
		category: "Pre-Wedding",
		src: "/images/feature/feature1.jpg",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p3",
		title: "Aditya Gadhvi",
		category: "Events",
		src: "/images/feature/feature2.jpg",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p4",
		title: "Vidhi & Kashyap",
		category: "Baby Shower",
		src: "/images/feature/feature3.jpg",
		span: "col-span-2 row-span-2",
	},
	{
		id: "p5",
		title: "MV",
		category: "Product",
		src: "/images/feature/feature4.jpg",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p6",
		title: "Vidhi & Rushi",
		category: "Editorial",
		src: "/images/feature/feature5.jpg",
		span: "col-span-1 row-span-1",
	},
];

export const backgroundImages = [
	"/images/bg/bg1.jpg",
	"/images/bg/bg0.jpg",
	"/images/bg/bg2.jpg",
	"/images/bg/bg3.jpg",
	"/images/bg/bg4.jpg",
	"/images/bg/bg5.jpg",
	"/images/bg/bg6.jpg",
	"/images/bg/bg7.jpg",
];

export const videoSources = {
	portrait0Poster: "/images/thumbnail/t-portrait-0.png",
	portrait0: "", 
	portrait1Poster: "/images/thumbnail/t-portrait-1.jpg",
	portrait1: "",
	landscape0Poster: "/images/thumbnail/t-landscape-0.png",
	landscape0: "",
	landscape1Poster: "/images/thumbnail/t-landscape-1.png",
	landscape1: "",
};
