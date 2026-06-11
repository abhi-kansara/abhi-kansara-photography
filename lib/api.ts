// ─────────────────────────────────────────────────────────
//  Type Definitions — Services Domain
// ─────────────────────────────────────────────────────────

export interface ServiceFAQ {
	id?: string;
	question: string;
	answer: string;
}

export interface ServiceProcess {
	id?: string;
	stepNumber: number;
	title: string;
	description: string;
	icon?: string;
}

export interface ServiceTestimonial {
	id?: string;
	clientName: string;
	event?: string;
	quote: string;
	rating?: number;
	avatar?: string;
}

export interface DetailedService {
	id: string;
	slug: string;
	title: string;
	tagline: string;
	coverImage: string;
	icon?: string;
	shortDescription: string;
	detailedDescription: string;
	features: string[];
	highlights?: string[];
	processSteps: ServiceProcess[]; // Renamed from process to match C# property
	testimonials?: ServiceTestimonial[];
	faqs: ServiceFAQ[];
	galleryImages: string[];
	category?: string;
	order?: number;
	isFeatured?: boolean;
}

// ─────────────────────────────────────────────────────────
//  Type Definitions — Portfolio Domain
// ─────────────────────────────────────────────────────────

export type GalleryCategory =
	| "Wedding"
	| "Pre-Wedding"
	| "Baby Shower"
	| "Event"
	| "Product"
	| "Editorial"
	| "Portrait";

export interface MediaItem {
	id: string;
	type: "photo" | "video";
	url: string;
	width: number;
	height: number;
	alt?: string;
	posterUrl?: string;
	hlsUrl?: string;
	duration?: string;
}

export interface Gallery {
	id: string;
	slug: string;
	clientName: string;
	category: GalleryCategory;
	coverPhotoUrl: string;
	shootDate?: string;
	/** Alias for shootDate — used in GalleryView */
	date?: string;
	location?: string;
	description?: string;
	media: MediaItem[];
	isFeatured?: boolean;
	order?: number;
	// ── SmugMug Integration (future sync) ──
	smugMugAlbumId?: string;
	smugMugAlbumKey?: string;
	lastSmugMugSync?: string;
}

// Base API URL with fallback for local dev
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5027/api";

// Configuration for Next.js 15+ Server Components fetch
// Set to 'no-store' during development for instant updates
const FETCH_CONFIG: RequestInit = {
	cache: "no-store",
	// Next.js 15 ISR: next: { revalidate: 3600 }
};

/** Ensure API errors throw so we fail fast locally */
async function fetchWithFailFast<T>(
	url: string,
	options?: RequestInit,
): Promise<T> {
	let res;
	try {
		res = await fetch(url, { ...FETCH_CONFIG, ...options });
	} catch (error) {
		if (error instanceof TypeError) {
			throw new Error(
				`Fetch failed for ${url}. Make sure your backend API is running. Details: ${error.message}`,
			);
		}
		// Re-throw Next.js control-flow errors (like DynamicServerError) so we don't break the build
		throw error;
	}

	if (!res.ok) {
		const errorText = await res.text().catch(() => "No error text");
		throw new Error(
			`API error: ${res.status} ${res.statusText} at ${url}\n${errorText}`,
		);
	}

	return res.json();
}

// ─────────────────────────────────────────────────────────
//  Extended Types (Migrating from legacy data)
// ─────────────────────────────────────────────────────────

export interface SiteBio {
	id: string;
	artistName: string;
	tagline: string;
	intro: string;
	history: string;
	philosophy: string;
	portraitImage: string;
}

export interface PageConfig {
	id: string;
	pageKey: string;
	heroTagline: string;
	heroTitle: string;
	heroSubtitle: string;
	ctaText?: string;
	ctaLink?: string;
	heroInterval?: number; // Added for landing page pacing
}

export interface HeroBackground {
	id: string;
	imageUrl: string;
	altText?: string;
	order: number;
}

// ─────────────────────────────────────────────────────────
//  Fetching Functions
// ─────────────────────────────────────────────────────────

export async function getServices(): Promise<DetailedService[]> {
	return fetchWithFailFast<DetailedService[]>(`${API_URL}/services`);
}

export async function getServiceBySlug(slug: string): Promise<DetailedService> {
	return fetchWithFailFast<DetailedService>(`${API_URL}/services/${slug}`);
}

export async function getGalleries(): Promise<Gallery[]> {
	return fetchWithFailFast<Gallery[]>(`${API_URL}/galleries`);
}

export async function getFeaturedGalleries(): Promise<Gallery[]> {
	return fetchWithFailFast<Gallery[]>(`${API_URL}/galleries/featured`);
}

export async function getGalleryBySlug(slug: string): Promise<Gallery> {
	return fetchWithFailFast<Gallery>(`${API_URL}/galleries/${slug}`);
}
// ─────────────────────────────────────────────────────────
//  Carousel Items API
// ─────────────────────────────────────────────────────────

export interface CarouselItem {
	id: string;
	title: string;
	imageUrl: string;
	sortOrder: number;
	/** Optional destination URL when user clicks the card */
	link?: string;
}

export async function getCarouselItems(): Promise<CarouselItem[]> {
	return fetchWithFailFast<CarouselItem[]>(`${API_URL}/carousel`);
}

const DEFAULT_BIO: SiteBio = {
	id: "",
	artistName: "Abhi Kansara",
	tagline: "I believe in the beauty of unscripted moments.",
	intro: "My approach is deeply rooted in editorial elegance and raw, emotional authenticity.",
	history:
		"Based in India and traveling worldwide, I've spent the last decade documenting love stories.",
	philosophy:
		"To photograph truthfully and effectively is to see beneath the surfaces.",
	portraitImage:
		"https://pub-576c3f4676204ddb823a5e2e2e27435e.r2.dev/images/Abhi.webp",
};

const DEFAULT_PAGE_CONFIGS: Record<string, Partial<PageConfig>> = {
	home: {
		pageKey: "home",
		heroTagline: "STORYTELLER",
		heroTitle: "ABHI KANSARA",
		heroSubtitle:
			"Capturing the essence of your most precious moments with a cinematic and timeless touch.",
		heroInterval: 4.5,
	},
	services: {
		pageKey: "services",
		heroTagline: "Experiences",
		heroTitle: "Crafted with Intention",
		heroSubtitle: "Every frame tells a story.",
		ctaText: "Book a Consultation",
		ctaLink: "/contact",
	},
	portfolio: {
		pageKey: "portfolio",
		heroTagline: "Portfolio",
		heroTitle: "Our Work",
		heroSubtitle: "A curated collection of moments and stories.",
	},
};

export async function getBio(): Promise<SiteBio> {
	return fetchWithFailFast<SiteBio>(`${API_URL}/siteconfig/bio`).catch(
		(err) => {
			console.warn("Failed to fetch site bio:", err.message);
			return DEFAULT_BIO;
		},
	);
}

export async function getPageConfig(pageKey: string): Promise<PageConfig> {
	return fetchWithFailFast<PageConfig>(
		`${API_URL}/siteconfig/page/${pageKey}`,
	).catch((err) => {
		console.warn(
			`Failed to fetch page config for '${pageKey}':`,
			err.message,
		);
		const fallback = DEFAULT_PAGE_CONFIGS[pageKey] || {};
		return {
			id: "",
			pageKey,
			heroTagline: "",
			heroTitle: "",
			heroSubtitle: "",
			heroInterval: 0,
			...fallback,
		} as PageConfig;
	});
}

export async function getHeroBackgrounds(): Promise<HeroBackground[]> {
	return fetchWithFailFast<HeroBackground[]>(
		`${API_URL}/HeroBackgrounds`,
	).catch(() => []);
}
