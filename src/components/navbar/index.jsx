"use client";

import React from 'react';
import styles from './navbar.module.scss';


export default function TopNav() {
  const links = [
    { name: 'หน้าแรก', href: '#home', isActive: true },
    { name: 'ข่าวสาร', href: '#news', isActive: false },
    { name: 'ติดต่อ', href: '#contact', isActive: false },
    { name: 'อื่นๆ', href: '#about', isActive: false },
  ];

  return (
    <div className={styles.topnav}>
      {links.map((link, index) => (
        <a
          key={index}
          className={link.isActive ? 'active' : ''}
          href={link.href}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

