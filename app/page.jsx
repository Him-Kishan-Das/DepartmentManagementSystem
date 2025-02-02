import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import NotificationPanel from "../components/NotificationPanel";
import DepartmentCarousel from "../components/DepartmentCarousel";
import "./globals.css";

export default function Home() {
  return (
    <div className={styles}>
      <Navbar />
      <div className="p-9">
        <div className="flex w-full justify-center justify-items-center">
          <NotificationPanel />
          <DepartmentCarousel />
        </div>
      </div>

   </div>
  );
}
