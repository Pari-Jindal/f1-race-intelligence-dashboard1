import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounters from "@/components/StatsCounters";
import SectionDivider from "@/components/SectionDivider";
import ProjectOverview from "@/components/ProjectOverview";
import IntelligenceDimensions from "@/components/IntelligenceDimensions";
import DashboardEmbed from "@/components/DashboardEmbed";
import StoryEmbed from "@/components/StoryEmbed";
import KeyInsights from "@/components/KeyInsights";
import HowItWasBuilt from "@/components/HowItWasBuilt";
import ContactFooter from "@/components/ContactFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-base text-white">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <StatsCounters />
        <SectionDivider />
        <ProjectOverview />
        <SectionDivider />
        <IntelligenceDimensions />
        <SectionDivider />
        <DashboardEmbed />
        <SectionDivider />
        <StoryEmbed />
        <SectionDivider />
        <KeyInsights />
        <SectionDivider />
        <HowItWasBuilt />
        <ContactFooter />
      </main>
    </div>
  );
}
