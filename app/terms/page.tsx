import LegalLayout from "@/components/LegalLayout";
import { termsOfService } from "@/lib/legal-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Abhi Kansara Photography",
  description: "Rules and intellectual property terms for using Abhi Kansara Photography's website.",
};

export default function TermsPage() {
  return (
    <LegalLayout 
      title={termsOfService.title}
      lastUpdated={termsOfService.lastUpdated}
      sections={termsOfService.sections}
    />
  );
}
