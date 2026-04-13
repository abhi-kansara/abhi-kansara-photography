/**
 * CINEMATOGRAPHY - DATA STRUCTURE
 * -------------------------------
 * This file contains the manually curated videos for the "Cinematography" section.
 * 
 * VIDEO URL PATTERN:
 * Use placeholder HLS or video URLs for now.
 * 
 * FLEXIBLE DIMENSIONS:
 * width and height are optional. If left out, the grid defaults to a 3:2 landscape ratio.
 * For vertical (Reels/Shorts), set width: 9 and height: 16.
 */

import { MediaItem } from "./portfolio";

const R2_URL = "https://pub-576c3f4676204ddb823a5e2e2e27435e.r2.dev";

export const cinematographyVideos: MediaItem[] = [
	{
		id: "cine-1",
		type: "video",
		url: `${R2_URL}/videos/portrait-0/portrait0.m3u8`,
		hlsUrl: `${R2_URL}/videos/portrait-0/portrait0.m3u8`,
		posterUrl: "https://placehold.co/1080x1920?text=Cinematography_1.webp",
		alt: "Wedding highlight reel",
		width: 9,
		height: 16,
		duration: "1:42",
	},
	{
		id: "cine-2",
		type: "video",
		url: `${R2_URL}/videos/landscape-0/landscape0.m3u8`,
		hlsUrl: `${R2_URL}/videos/landscape-0/landscape0.m3u8`,
		posterUrl: "https://placehold.co/1920x1080?text=Cinematography_2.webp",
		alt: "Cinematic pre-wedding film",
		width: 16,
		height: 9,
		duration: "2:18",
	},
	{
		id: "cine-3",
		type: "video",
		url: `${R2_URL}/videos/portrait-1/portrait1.m3u8`,
		hlsUrl: `${R2_URL}/videos/portrait-1/portrait1.m3u8`,
		posterUrl: "https://placehold.co/1080x1920?text=Cinematography_3.webp",
		alt: "Editorial fashion reel",
		width: 9,
		height: 16,
		duration: "1:55",
	},
	{
		id: "cine-4",
		type: "video",
		url: `${R2_URL}/videos/landscape-1/landscape1.m3u8`,
		hlsUrl: `${R2_URL}/videos/landscape-1/landscape1.m3u8`,
		posterUrl: "https://placehold.co/1920x1080?text=Cinematography_4.webp",
		alt: "Event recap video",
		width: 16,
		height: 9,
		duration: "3:05",
	},
];
