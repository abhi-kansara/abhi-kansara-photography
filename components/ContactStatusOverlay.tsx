"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { useEffect } from "react";

interface ContactStatusOverlayProps {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  onClose: () => void;
}

export default function ContactStatusOverlay({ status, message, onClose }: ContactStatusOverlayProps) {
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  if (status === "idle") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 flex items-center justify-center px-6 bg-black/40 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white p-10 sm:p-16 max-w-lg w-full text-center shadow-2xl rounded-sm border border-slate-100 flex flex-col items-center gap-8"
        >
          {status === "loading" && (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="w-16 h-16 text-accent-gold" />
              </motion.div>
              <h3 className="font-serif text-3xl text-slate-900 italic">Sending your story...</h3>
            </>
          )}

          {status === "success" && (
            <>
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <CheckCircle2 className="w-20 h-20 text-emerald-500" />
                </motion.div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-4xl text-slate-900 italic">Inquiry Sent</h3>
                <p className="text-slate-500 font-light text-lg">
                  Thank you for sharing your Story. <br />
                  I will be in touch with you shortly.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="mt-4 px-10 py-3 uppercase tracking-[0.2em] text-[10px] font-bold text-white bg-slate-900 hover:bg-accent-gold transition-colors duration-300"
              >
                Close
              </button>
            </>
          )}

          {status === "error" && (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <XCircle className="w-20 h-20 text-rose-500" />
              </motion.div>
              <div className="space-y-4">
                <h3 className="font-serif text-4xl text-slate-900 italic">Something went wrong</h3>
                <p className="text-slate-500 font-light text-lg">
                  {message || "We couldn't deliver your message. Please try again or email me directly."}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="mt-4 px-10 py-3 uppercase tracking-[0.2em] text-[10px] font-bold text-white bg-slate-900 hover:bg-accent-gold transition-colors duration-300"
              >
                Try Again
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
