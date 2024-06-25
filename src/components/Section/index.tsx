'use client'

import styles from "./styles.module.css";
import HeroStats from "../Hero-stats";
import HeroList from "../Hero-list";

export default function Section() {
   return (
      <div className={styles.main}>
         <HeroList />
         <HeroStats />
      </div>
   )
}