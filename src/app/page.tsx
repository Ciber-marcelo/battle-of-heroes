import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <p>BATTLE OF HEROES</p>
      <Card />
    </div>
    
    // <main className={styles.main}></main>
  );
}
