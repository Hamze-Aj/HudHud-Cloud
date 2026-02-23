import PartnersHero from "@/components/PartnersHero";
import PartnersGrid from "@/components/PartnersGrid";
import PartnersCertifications from "@/components/PartnersCertifications";

export default function PartnersPage() {
    return (
        <main className="min-h-screen">
            <PartnersHero />
            <PartnersGrid />
            <PartnersCertifications />
        </main>
    );
}
