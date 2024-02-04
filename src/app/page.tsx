import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div>
      <p>BATTLE OF HEROES</p>
      <Card />
      <Section />
    </div>
    
    // <main className={styles.main}></main>
  );
}
