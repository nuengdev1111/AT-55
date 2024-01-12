import Link from "next/link";
import styles from "./header.module.scss";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
    //   className={styles.navbartoggle}
      className="block bg-sky-500 text-white py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
