'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "../styles/menudesign.module.css";
import Link from "next/link";
import viewstyles from "../styles/view.module.css";
import { useState } from "react";
import Sheet from "./@Sheet/page";
import Manageuser from "./@manageuser/page";
import Academic from "./@academic/page";
import TimeTable from "./@timetable/page";
import HelpDesk from "./@helpdesk/page";
import Attendance from "./@attendance/page"
import Task from "./@task/page";
import Placement from "./@placement/page";
import Directory from "./@directory/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {

  const [activeComponent, setActiveComponent] = useState("Manageuser");

  const renderComponent = (e) => {
    switch (activeComponent) {
      case "Manageuser":
        return <Manageuser />;
      case "Academic":
        return <Academic />;
      case "Time Table":
        return <TimeTable />;
      case "Attendance":
        return <Attendance />;
      case "Help Desk":
        return <HelpDesk />;
      case "Task":
        return <Task />;
      case "Placement":
        return <Placement />;
      case "Directory":
        return <Directory />;      
      default:
        return <Sheet />;
    }
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.gridcolumn}>
          <div>
            <div className={styles.menuRows}>
                <div><Link href="#" className={styles.overviewButton}>Overview</Link></div>
                <div>
                    <div className={styles.itemsButton}>
                        <div onClick={()=>setActiveComponent ('Manageuser')}> <div className={styles.itemsBox}></div> Manage User  </div>
                        <div onClick={()=>setActiveComponent ('Academic')}> <div className={styles.itemsBox}></div> Academic      </div>
                        <div onClick={()=>setActiveComponent ('Time Table')}> <div className={styles.itemsBox}></div> Time Table    </div>
                        <div onClick={()=>setActiveComponent ('Attendance')}> <div className={styles.itemsBox}></div> Attendance    </div>
                        <div onClick={()=>setActiveComponent ('Help Desk')}> <div className={styles.itemsBox}></div> Help Desk     </div>
                        <div onClick={()=>setActiveComponent ('Task')}> <div className={styles.itemsBox}></div> Task          </div>
                        <div onClick={()=>setActiveComponent ('Placement')}> <div className={styles.itemsBox}></div> Placement     </div>
                        <div onClick={()=>setActiveComponent ('Directory')}> <div className={styles.itemsBox}></div> Directory     </div>
                        <div onClick={()=>setActiveComponent ('Exam')}> <div className={styles.itemsBox}></div> Exam          </div>
                    </div>
                </div>
                <div><Link href="#" className={styles.addButton}>Add New</Link></div>
            </div>
          </div>
          <div className={viewstyles.container}>
            {renderComponent()}
          </div>
        </div>
      </body>
    </html>
  );
}
