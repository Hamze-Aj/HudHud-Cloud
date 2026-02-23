import SaaSHero from "@/components/SaaSHero";
import SaaSEMS from "@/components/SaaSEMS";
import SaaSHMS from "@/components/SaaSHMS";
import SaaSSMS from "@/components/SaaSSMS";
import SaaSWhatsApp from "@/components/SaaSWhatsApp";
import SaaSPOS from "@/components/SaaSPOS";
import SaaSWhyChoose from "@/components/SaaSWhyChoose";

export default function SaaSPage() {
    return (
        <main className="min-h-screen">
            <SaaSHero />
            <SaaSEMS />
            <SaaSHMS />
            <SaaSSMS />
            <SaaSWhatsApp />
            <SaaSPOS />
            <SaaSWhyChoose />
        </main>
    );
}
