import Section from "@/components/Section";
import { CharProvider } from "@/contexts/context";

export default function Home() {
  return (
    <div className="vh">
      <CharProvider>
        <Section />
      </CharProvider>
    </div>
  );
}
