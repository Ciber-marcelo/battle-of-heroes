import Section from "@/components/Section";
import { CharProvider } from "@/contexts/context";

export default function Home() {
  return (
    <div>
      <CharProvider>
        <Section />
      </CharProvider>
    </div>
  );
}
