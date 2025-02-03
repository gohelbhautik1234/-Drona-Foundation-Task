'use client'
import Link from "next/link"
import styles from "../../styles/menudesign.module.css"

export default function Page()
{
    return(
        <>
            <div className={styles.menuRows}>
                <div><Link href="#" className={styles.overviewButton}>Overview</Link></div>
                <div>
                    <div className={styles.itemsButton}>
                        <div> <div className={styles.itemsBox}></div> Manage User   </div>
                        <div> <div className={styles.itemsBox}></div> Academic      </div>
                        <div> <div className={styles.itemsBox}></div> Time Table    </div>
                        <div> <div className={styles.itemsBox}></div> Attendance    </div>
                        <div> <div className={styles.itemsBox}></div> Help Desk     </div>
                        <div> <div className={styles.itemsBox}></div> Task          </div>
                        <div> <div className={styles.itemsBox}></div> Placement     </div>
                        <div> <div className={styles.itemsBox}></div> Directory     </div>
                        <div> <div className={styles.itemsBox}></div> Exam          </div>
                    </div>
                </div>
                <div><Link href="#" className={styles.addButton}>Add New</Link></div>
            </div>        
        </>
    )
}