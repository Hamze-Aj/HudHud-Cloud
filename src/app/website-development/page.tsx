import WebDevHero from "@/components/WebDevHero";
import WebDevPackages from "@/components/WebDevPackages";
import WebDevProcess from "@/components/WebDevProcess";
import WebDevTech from "@/components/WebDevTech";
import WebDevCTA from "@/components/WebDevCTA";

export default function WebsiteDevelopmentPage() {
    return (
        <main className="min-h-screen">
            <WebDevHero />
            <WebDevPackages />
            <WebDevProcess />
            <WebDevTech />
            <WebDevCTA />
        </main>
    );
}
