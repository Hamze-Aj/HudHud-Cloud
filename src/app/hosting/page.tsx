import HostingHero from "@/components/HostingHero";
import HostingPlans from "@/components/HostingPlans";
import VPSPlans from "@/components/VPSPlans";
import HostingIncludes from "@/components/HostingIncludes";

export default function HostingPage() {
    return (
        <main className="min-h-screen">
            <HostingHero />
            <HostingPlans />
            <VPSPlans />
            <HostingIncludes />
        </main>
    );
}
