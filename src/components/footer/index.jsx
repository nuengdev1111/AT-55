"use client";
import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footwid}>
        <div className={styles.allfoot}>
        {/* <div className="w-full bg-black text-white text-center text-sm py-5 translate-y-[3630px]"> */}
          <p>© 2018 องค์การบริหารส่วนตำบลบางเสาธง. All rights reserved.</p>
          <p>ถ.เทพรัตน กม.26 ตำบลบางเสาธง อำเภอเสาธง จังหวัดสมุทรปราการ 10570</p>
          <p>โทรศัพท์ : 02-7071671 แฟกซ์ : 02-7071674</p>
        </div>
    </div>
  );
}
