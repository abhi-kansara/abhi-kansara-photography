/**
 * BEST OF US - DATA STRUCTURE
 * ---------------------------
 * This file contains the manually curated photos for the "Best of Us" section.
 * 
 * PHOTO URL PATTERN:
 * Use unique placeholders for now. Example:
 * images/best-of-us/photo-1.webp, images/best-of-us/photo-2.webp, etc.
 * 
 * FLEXIBLE DIMENSIONS:
 * width and height are optional. If left out, the grid defaults to a 3:2 landscape ratio.
 * For portrait, set width: 2 and height: 3.
 */

import { MediaItem } from "./portfolio";

export const bestOfUsPhotos: MediaItem[] = [
	{
		id: "bou-1",
		type: "photo",
		url: "https://placehold.co/1200x800?text=BestOfUs_1.webp",
		alt: "Candid bridal moment",
		width: 3,
		height: 2,
	},
	{
		id: "bou-2",
		type: "photo",
		url: "https://placehold.co/800x1200?text=BestOfUs_2.webp",
		alt: "Editorial portrait",
		width: 2,
		height: 3,
	},
	{
		id: "bou-3",
		type: "photo",
		url: "https://placehold.co/1200x800?text=BestOfUs_3.webp",
		alt: "Golden hour sunset",
	},
	{
		id: "bou-4",
		type: "photo",
		url: "https://placehold.co/1200x800?text=BestOfUs_4.webp",
		alt: "Architectural frame",
	},
	{
		id: "bou-5",
		type: "photo",
		url: "https://placehold.co/800x1200?text=BestOfUs_5.webp",
		alt: "Emotion in motion",
		width: 2,
		height: 3,
	},
	{
		id: "bou-6",
		type: "photo",
		url: "https://placehold.co/1200x800?text=BestOfUs_6.webp",
		alt: "Luxury wedding reception",
	},
];
