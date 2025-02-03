'use client'
import Link from "next/link"
import Viewstyles from "../../styles/view.module.css";
import styles from "../../styles/sheet.module.css";
export default function Home() {
    return (
        <>
            <div className={Viewstyles.containerRows}>
                <div className={Viewstyles.FirstRow}>
                    <div className={Viewstyles.FirstRowColumn}>
                        <div>Exam</div>
                        <div>Exam/Dashboard/BMU_Mid_CIA2_APR24&BVOC&PATT&1&3&5</div>
                    </div>
                    <div className={Viewstyles.search}> </div>
                    <Link href="#" className={Viewstyles.FirstRowButton}><span className="fa fa-plus"></span>Create Exam</Link>
                    <Link href="#" className={Viewstyles.FirstRowButton}>Exam History</Link>
                </div>

                <div className={Viewstyles.SecondRow}>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', borderLeft: '2px solid #EEEEEE' }}>
                            <div className={Viewstyles.profile}></div>
                            <div style={{ display: 'grid', gridTemplateRows: 'repeat(3,1fr)' }}>
                                <div>Bhagwan Mahavir Univercity</div>
                                <div>Mid Term CIA 2 Exam April - 2024</div>
                                <div>Semester 1 | Batch 2022-25</div>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateRows: 'repeat(2,1fr)', rowGap: '50%' }}>
                            <div> Bachlor of Vocation </div>
                            <div> Pratical Accounting, Taxation & Tally</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingLeft: '5%', height: '60%', width: '40%', color: 'white', backgroundColor: '#8F0B0B', paddingTop: '2%', borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }}>
                            Postpone
                        </div>
                        <div style={{ display: 'grid', gridTemplateRows: 'repeat(2,1fr)', paddingLeft: '4%', paddingRight: '4%' }}>
                            <div style={{ gridTemplateRows: 'auto auto' }}>
                                <div>
                                    Pre exam task : 41 / 94
                                </div>
                                <div style={{ border: "2px solid #FF2400", height: '2%', marginTop: '2%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Viewstyles.ThirdRow}>
                    <div></div>
                    <div>
                        <div className={styles.dataList}>
                            <div>
                                <div>Exam Conducted</div>
                                <div>
                                    <div>Subject Code: <b>4110343181</b> </div>
                                    <b>introduction to functional English</b>
                                    <div>Exam Date: <u style={{ color: "#43C6DB" }}>01-01-2025</u></div>
                                </div>
                                <div>Student Attendance &nbsp; <span>Draft</span></div>
                                <div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Total Student</div>
                                        <b style={{ color: "blue" }}>58</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Present Student</div>
                                        <b style={{ color: "green" }}>52</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Absent Student</div>
                                        <b style={{ color: "red" }}>02</b>
                                    </div>
                                </div>
                                <div>
                                    <u>4 student</u> remain for mark Attendance
                                </div>
                                <div>
                                    Mark / Edit Student's Attendance
                                </div>
                            </div>
                            <div>
                                <div>Exam Conducted</div>
                                <div>
                                    <div>Subject Code: <b>4110343181</b> </div>
                                    <b>introduction to functional English</b>
                                    <div>Exam Date: <u style={{ color: "#43C6DB" }}>01-01-2025</u></div>
                                </div>
                                <div>Student Attendance &nbsp; <span>Draft</span></div>
                                <div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Total Student</div>
                                        <b style={{ color: "blue" }}>58</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Present Student</div>
                                        <b style={{ color: "green" }}>52</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Absent Student</div>
                                        <b style={{ color: "red" }}>02</b>
                                    </div>
                                </div>
                                <div>
                                    <u>4 student</u> remain for mark Attendance
                                </div>
                                <div>
                                    Mark / Edit Student's Attendance
                                </div>
                            </div>
                            <div>
                                <div>Exam Conducted</div>
                                <div>
                                    <div>Subject Code: <b>4110343181</b> </div>
                                    <b>introduction to functional English</b>
                                    <div>Exam Date: <u style={{ color: "#43C6DB" }}>01-01-2025</u></div>
                                </div>
                                <div>Student Attendance &nbsp; <span>Draft</span></div>
                                <div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Total Student</div>
                                        <b style={{ color: "blue" }}>58</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Present Student</div>
                                        <b style={{ color: "green" }}>52</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Absent Student</div>
                                        <b style={{ color: "red" }}>02</b>
                                    </div>
                                </div>
                                <div>
                                    <u>4 student</u>remain for mark Attendance
                                </div>
                                <div>
                                    Mark / Edit Student's Attendance
                                </div>
                            </div>
                            <div>
                                <div>Exam Conducted</div>
                                <div>
                                    <div>Subject Code: <b>4110343181</b> </div>
                                    <b>introduction to functional English</b>
                                    <div>Exam Date: <u style={{ color: "#43C6DB" }}>01-01-2025</u></div>
                                </div>
                                <div>Student Attendance &nbsp; <span>Draft</span></div>
                                <div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Total Student</div>
                                        <b style={{ color: "blue" }}>58</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Present Student</div>
                                        <b style={{ color: "green" }}>52</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Absent Student</div>
                                        <b style={{ color: "red" }}>02</b>
                                    </div>
                                </div>
                                <div>
                                    <u>4 student</u> remain for mark Attendance
                                </div>
                                <div>
                                    Mark / Edit Student's Attendance
                                </div>
                            </div>
                            <div>
                                <div>Exam Conducted</div>
                                <div>
                                    <div>Subject Code: <b>4110343181</b> </div>
                                    <b>introduction to functional English</b>
                                    <div>Exam Date: <u style={{ color: "#43C6DB" }}>01-01-2025</u></div>
                                </div>
                                <div>Student Attendance &nbsp; <span>Draft</span></div>
                                <div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Total Student</div>
                                        <b style={{ color: "blue" }}>58</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Present Student</div>
                                        <b style={{ color: "green" }}>52</b>
                                    </div>
                                    <div className={styles.studentAttendancelist}>
                                        <div>Absent Student</div>
                                        <b style={{ color: "red" }}>02</b>
                                    </div>
                                </div>
                                <div>
                                    <u>4 student</u> remain for mark Attendance
                                </div>
                                <div>
                                    Mark / Edit Student's Attendance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
