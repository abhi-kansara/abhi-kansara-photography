"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

/**
 * useOverlay Hook
 * 
 * Centralized logic for all overlay components (Modals, Lightboxes, Share Sheets).
 * Handles:
 * 1. Scroll Locking (Preserving position)
 * 2. Browser Back Button Interception
 * 3. Keyboard Escape Handling
 * 
 * @param isOpen - Boolean state of the overlay
 * @param onClose - Function to call when the overlay should close
 */
export function useOverlay(isOpen: boolean, onClose: () => void) {
	const lenis = useLenis();
	
	// Create a stable reference to the onClose callback to prevent 
	// re-triggering effects if the parent passes an unstable anonymous function.
	const onCloseRef = useRef(onClose);
	useEffect(() => {
		onCloseRef.current = onClose;
	}, [onClose]);

	// 1. Scroll Locking & Position Preservation
	useEffect(() => {
		if (isOpen) {
			// Programmatic freeze for Lenis
			if (lenis) lenis.stop();
			
			// Visual lock for native overflow
			document.documentElement.classList.add("lenis-stopped");
			document.body.style.overflow = "hidden";
		} else {
			// Resume exactly where we left off
			if (lenis) lenis.start();
			document.documentElement.classList.remove("lenis-stopped");
			document.body.style.overflow = "";
		}

		return () => {
			if (lenis) lenis.start();
			document.documentElement.classList.remove("lenis-stopped");
			document.body.style.overflow = "";
		};
	}, [isOpen, lenis]);

	// 2. Keyboard Control (Escape)
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onCloseRef.current();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	// 3. Browser Back Button Interception (Popstate)
	useEffect(() => {
		if (!isOpen) return;

		// Push a virtual state to the history
		// This creates a "checkpoint" that the back button will hit first
		window.history.pushState({ overlayOpen: true }, "");

		const handlePopState = () => {
			// When the back button is pressed, history.back() is called
			// We intercept this by closing the modal instead of navigating the page away
			onCloseRef.current();
		};

		window.addEventListener("popstate", handlePopState);

		return () => {
			window.removeEventListener("popstate", handlePopState);
			
			// Clean up the virtual state if the modal was closed via X button/Esc
			// instead of the back button. This prevents the user from having to 
			// press "back" twice later.
			if (window.history.state?.overlayOpen) {
				window.history.back();
			}
		};
	}, [isOpen]);
}
