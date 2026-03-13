import LegalLayout from "@/components/LegalLayout";
import { privacyPolicy } from "@/lib/legal-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Abhi Kansara Photography",
  description: "How we handle and protect your data at Abhi Kansara Photography.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout 
      title={privacyPolicy.title}
      lastUpdated={privacyPolicy.lastUpdated}
      sections={privacyPolicy.sections}
    />
  );
}
