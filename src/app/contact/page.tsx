import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactDataCenters from "@/components/ContactDataCenters";
import ContactFAQ from "@/components/ContactFAQ";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactForm />
            <ContactDataCenters />
            <ContactFAQ />
        </main>
    );
}
