const R2_URL = "https://pub-576c3f4676204ddb823a5e2e2e27435e.r2.dev";

export interface FeaturedProject {
	id: string;
	title: string;
	category: string;
	src: string;
	slug: string; // Links to client gallery slug in portfolio.ts
	span?: string;
}

export const featuredProjects: FeaturedProject[] = [
	{
		id: "p1",
		title: "Aaina & Daideep",
		category: "Wedding",
		src: `${R2_URL}/images/feature/feature0.webp`,
		slug: "aaina-daideep",
		span: "row-span-2 col-span-1",
	},
	{
		id: "p2",
		title: "Sapan & Sajnee",
		category: "Pre-Wedding",
		src: `${R2_URL}/images/feature/feature1.webp`,
		slug: "sapan-sajnee",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p3",
		title: "Aditya Gadhvi",
		category: "Events",
		src: `${R2_URL}/images/feature/feature2.webp`,
		slug: "aditya-gadhvi-live",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p4",
		title: "Vidhi & Kashyap",
		category: "Baby Shower",
		src: `${R2_URL}/images/feature/feature3.webp`,
		slug: "vidhi-kashyap",
		span: "col-span-2 row-span-2",
	},
	{
		id: "p5",
		title: "MV",
		category: "Product",
		src: `${R2_URL}/images/feature/feature4.webp`,
		slug: "mv-collection",
		span: "col-span-1 row-span-1",
	},
	{
		id: "p6",
		title: "Vidhi & Rushi",
		category: "Editorial",
		src: `${R2_URL}/images/feature/feature5.webp`,
		slug: "vidhi-rushi",
		span: "col-span-1 row-span-1",
	},
];
