// app/interview/page.tsx
import SiteHeader from "@/components/SiteHeader";
import HeroInterview from "@/components/HeroInterview";
import MembersSection from "@/components/MembersSection";
import EntryCTA from "@/components/EntryCTA";
import SiteFooter from "@/components/SiteFooter";

export default function InterviewPage() {
  return (
    <main className="min-h-screen bg-cream text-ink antialiased">
      <SiteHeader />
      <HeroInterview />
      <MembersSection />
      <EntryCTA />
      <SiteFooter />
    </main>
  );
}
