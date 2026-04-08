"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	X,
	Copy,
	Check,
	Smartphone,
	ExternalLink,
	Facebook,
	Twitter,
	Mail,
	MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useOverlay } from "@/hooks/useOverlay";

// ─────────────────────────────────────────────────────────
//  Share Modal — Advanced Gallery Sharing
//  Copy link, mobile PWA link, social share
// ─────────────────────────────────────────────────────────

const PinterestIcon = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
		<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.121 1.12.345 2.301.533 3.527.533 6.621 0 11.988-5.367 11.988-11.987C23.991 5.367 18.638 0 12.017 0z" />
	</svg>
);

const socialPlatforms = [
	{
		name: "WhatsApp",
		icon: <MessageCircle className="h-4 w-4 fill-current" />,
		getUrl: (url: string, text: string) =>
			`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
	},
	{
		name: "Facebook",
		icon: <Facebook className="h-4 w-4 fill-current" />,
		getUrl: (url: string) =>
			`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
	},
	{
		name: "Twitter",
		icon: <Twitter className="h-4 w-4 fill-current" />,
		getUrl: (url: string, text: string) =>
			`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
	},
	{
		name: "Pinterest",
		icon: <PinterestIcon className="h-4 w-4" />,
		getUrl: (url: string, text: string) =>
			`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`,
	},
	{
		name: "Email",
		icon: <Mail className="h-4 w-4" />,
		getUrl: (url: string, text: string) =>
			`mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`Check out this gallery: ${url}`)}`,
	},
];

interface ShareModalProps {
	isOpen: boolean;
	onClose: () => void;
	galleryName: string;
	gallerySlug: string;
}

export default function ShareModal({
	isOpen,
	onClose,
	galleryName,
	gallerySlug,
}: ShareModalProps) {
	const [copied, setCopied] = useState(false);
	const [mobileCopied, setMobileCopied] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
	const galleryUrl = `${baseUrl}/portfolio/clients/${gallerySlug}`;
	const mobileUrl = `${galleryUrl}?mobile=true`;
	const shareText = `Check out "${galleryName}" — captured by Abhi Kansara Photography`;

	// Unified Overlay logic (Scroll Lock, Esc Key, Back Button)
	useOverlay(isOpen, onClose);

	// Close on outside click
	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) onClose();
	};

	const copyToClipboard = async (text: string, type: "main" | "mobile") => {
		try {
			await navigator.clipboard.writeText(text);
			if (type === "main") {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			} else {
				setMobileCopied(true);
				setTimeout(() => setMobileCopied(false), 2000);
			}
		} catch {
			// Fallback
			const ta = document.createElement("textarea");
			ta.value = text;
			document.body.appendChild(ta);
			ta.select();
			document.execCommand("copy");
			document.body.removeChild(ta);
		}
	};

	// Use native share API if available
	const handleNativeShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: galleryName,
					text: shareText,
					url: galleryUrl,
				});
			} catch {
				// User cancelled share
			}
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25 }}
					className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-xl flex items-center justify-center px-4"
					onClick={handleBackdropClick}
				>
					<motion.div
						ref={modalRef}
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
						className="relative w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
					>
						{/* Close button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
						>
							<X className="h-4 w-4" />
						</button>

						{/* Header */}
						<div className="mb-8">
							<span className="text-accent-gold text-[10px] uppercase tracking-[0.25em] font-bold block mb-2">
								Share Gallery
							</span>
							<h3 className="text-white text-xl sm:text-2xl font-serif italic">
								{galleryName}
							</h3>
						</div>

						{/* Copy Link */}
						<div className="space-y-3 mb-6">
							<label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold block">
								Gallery Link
							</label>
							<div className="flex gap-2">
								<div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/60 text-sm truncate font-mono">
									{galleryUrl}
								</div>
								<button
									onClick={() => copyToClipboard(galleryUrl, "main")}
									className={cn(
										"h-12 w-12 rounded-xl border flex items-center justify-center transition-all duration-300 shrink-0",
										copied
											? "bg-accent-gold/20 border-accent-gold/50 text-accent-gold"
											: "bg-white/5 border-white/10 text-white/60 hover:text-accent-gold hover:border-accent-gold/50"
									)}
								>
									{copied ? (
										<Check className="h-4 w-4" />
									) : (
										<Copy className="h-4 w-4" />
									)}
								</button>
							</div>
						</div>

						{/* Mobile Optimized Link */}
						<div className="space-y-3 mb-8">
							<label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
								<Smartphone className="h-3 w-3" />
								Mobile Home Screen Link
							</label>
							<div className="flex gap-2">
								<div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/60 text-sm truncate font-mono">
									{mobileUrl}
								</div>
								<button
									onClick={() => copyToClipboard(mobileUrl, "mobile")}
									className={cn(
										"h-12 w-12 rounded-xl border flex items-center justify-center transition-all duration-300 shrink-0",
										mobileCopied
											? "bg-accent-gold/20 border-accent-gold/50 text-accent-gold"
											: "bg-white/5 border-white/10 text-white/60 hover:text-accent-gold hover:border-accent-gold/50"
									)}
								>
									{mobileCopied ? (
										<Check className="h-4 w-4" />
									) : (
										<Copy className="h-4 w-4" />
									)}
								</button>
							</div>
							<p className="text-white/25 text-[10px] leading-relaxed">
								Opens in a mobile-optimized view. Clients can add it to their
								home screen as an app.
							</p>
						</div>

						{/* Social Share Buttons */}
						<div className="space-y-3 mb-6">
							<label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold block">
								Share On
							</label>
							<div className="flex flex-wrap gap-2">
								{socialPlatforms.map((platform) => (
									<a
										key={platform.name}
										href={platform.getUrl(galleryUrl, shareText)}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-wider hover:border-accent-gold/50 hover:text-white transition-all duration-300"
									>
										<span>{platform.icon}</span>
										<span>{platform.name}</span>
									</a>
								))}
							</div>
						</div>

						{/* Native Share (mobile) */}
						{typeof navigator !== "undefined" && "share" in navigator && (
							<button
								onClick={handleNativeShare}
								className="w-full py-3 rounded-xl bg-accent-gold text-black text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-white transition-all duration-300"
							>
								<ExternalLink className="h-4 w-4" />
								Share via Device
							</button>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
