import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { CharProvider } from "@/contexts/context";

export default function Home() {
  return (
    <div>
      <CharProvider>
        <Header />
        <Section />
        <Footer />
      </CharProvider>
    </div>
  );
}
