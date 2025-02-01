import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import NotificationPanel from "../components/NotificationPanel";
import "./globals.css";

export default function Home() {
  return (
    <div className={styles}>
      <Navbar />
      <div className="p-9">
        <NotificationPanel />

      </div>

   </div>
  );
}
