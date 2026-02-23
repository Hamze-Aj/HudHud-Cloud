import DomainHero from "@/components/DomainHero";
import PopularExtensions from "@/components/PopularExtensions";
import DomainFeatures from "@/components/DomainFeatures";

export default function DomainsPage() {
    return (
        <main className="min-h-screen">
            <DomainHero />
            <PopularExtensions />
            <DomainFeatures />
        </main>
    );
}
