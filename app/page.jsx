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
        <div className="flex w-full justify-center justify-items-center flex-wrap">
          <NotificationPanel />
          <DepartmentCarousel />
        </div>
        <div className="bg-blue-500 flex justify-evenly p-10 mt-30 text-white text-xl">
          <div className="flex-col justify-center justify-items-center">
            <img className="w-27 mb-3" src="./images/graduate.png" alt="" />
            <p className="">Under Graduate</p>
          </div>
          <div className="flex-col justify-center justify-items-center">
            <img className="w-27 mb-3" src="./images/postgraduate.png" alt="" />
            <p className="flex-col justify-center justify-items-center">Post Graduate</p>
          </div>
          <div className="flex-col justify-center justify-items-center">
            <img className="w-27 mb-3" src="./images/degree.png" alt="" />
            <p className="">Research Scholars</p>
          </div>
        </div>
      </div>
    </div>
  );
}
