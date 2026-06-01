import "./test.css";
import SiteHeader from "./_components/SiteHeader";
import HeroInterview from "./_components/HeroInterview";
import MembersSection from "./_components/MembersSection";
import EntryCTA from "./_components/EntryCTA";
import SiteFooter from "./_components/SiteFooter";

export const metadata = {
  title: "[TEST] Phỏng vấn nhân viên — Tinh Hoa",
};

export default function TestInterviewPage() {
  return (
    <div className="test-interview-root antialiased">
      <SiteHeader />
      <HeroInterview />
      <MembersSection />
      <EntryCTA />
      <SiteFooter />
    </div>
  );
}
