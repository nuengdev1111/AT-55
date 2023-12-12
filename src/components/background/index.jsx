import Image from 'next/image';
import styled from './background.module.scss';

export default function Background() {
  return (
    <div className={styled.background}>
      <div className={styled.backgroundImage}>
        <Image src="/bg.jpg" alt="Background Image" layout="fill" />
      </div>
      <a href='/home' className={styled.overlayImage}>
        <Image src="/btnintro.png" alt="Overlay Image" height={1000} width={350} />
      </a>
      <div className={styled.overlayImage2}>
        <Image src="/5dec.png" alt="Overlay Image2" height={1000} width={400} />
      </div>
      <div className={styled.overlayImage3}>
        <Image src="/king1.png" alt="Overlay Image3" height={500} width={500} />
      </div>
     <div className={styled.textoverlay}>
      <ol className={styled.overlaytext}>
  <li >
           เนื่องในโอกาสวันคล้ายวันพระบรมราชสมภพ
  </li>
  <li>
  พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร
  </li>
  <li>
  วันชาติ และวันพ่อแห่งชาติ
  </li>
  <li>
  น้อมรำลึกในพระมหากรุณาธิคุณเป็นล้นพ้นอย่างหาที่สุดมิได้
  </li>
  <li>
  ข้าพระพุทธเจ้า ผู้บริหาร ข้าราชการ พนักงานและลูกจ้าง
  </li>
  <li>
  องค์การบริหารส่วนตำบลปกาสัย อ.เสาธง จ.สมุทรปราการ  (อบต.บางเสาธง)
  </li>
</ol>
</div>

    </div>
  );
}
