import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import DataCenters from "@/components/DataCenters";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChoose />
      <DataCenters />
      <Partners />
      <CTA />
    </main>
  );
}
