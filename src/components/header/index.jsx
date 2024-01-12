"use client";
import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DehazeIcon from '@mui/icons-material/Dehaze';
import styles from "./header.module.scss";
import {
  // IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { FaHome, FaRocketchat, FaUserCircle, FaSearch } from "react-icons/fa";




const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];




const options = [
  'คณะผู้บริหารและบุคลากร',
  'แผนพัฒนาท้องถิ่น',
  'ข้อมูลพื้นฐาน',
  'รายงานผลการดำเนินการ',
  'จัดซื้อ-จัดจ้าง',
  'กฏหมายที่เกี่ยวข้อง',
  'การควบคุมภายใน',
  'คู่มือมาตรฐานการให้บริการ',
  'การบริหารทรัพยากรบุคคล',
  'การให้บริการ',
  'นโยบาย No Gift Policy',
];

const ITEM_HEIGHT = 580;

const iconRount = [
  { icon: <FaHome size="25" />, name: "home", rounte: "" },
  { icon: <FaRocketchat size="25" />, name: "chat", rounte: "" },
  { icon: <FaUserCircle size="25" />, name: "user", rounte: "" },
];
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [text, setText] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setText(value);

    console.log("handleSearch", value);
  };
  const handleRounter = () => {
    console.log("handleRounter", event);
  };
  const submitSearch = () => {
    console.log("submitSearch", text);
    setText("");
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
          {/* <div className="mobile-menu block md:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex bg-black items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex bg-black items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null} */}


        {/* Main Navbar burger long blue */}
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              className={styles.burger}
              onClick={handleClick}
            >
              <DehazeIcon style={{width: 100, scale: 2}} className={styles.burgersize}/>
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  // overflow: 'inherit',
                  background: '#1e88e5',
                  height: 5000,
                  // maxHeight: ITEM_HEIGHT * 4.5,
                  // width: '20ch',
                  width: 500
                },
              }}
            >
          {options.map((option) => (
            <MenuItem style={{ fontSize: 20}} key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              <div style={{fontSize: 40, color: '#fff'}}>
                {option}
              </div>
            </MenuItem>
          ))}
        </Menu>
        {iconRount.map(({ icon, name }) => {
          return (
            <IconButton key={name} onClick={() => handleRounter(name)}>
              {icon}
            </IconButton>
          );
        })}
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "27ch" }} variant="outlined">
          <OutlinedInput
            id="search-input"
            type="text"
            size="small"
            placeholder="ค้นหาข้อมูล อบต. บางเสาธง"
            value={text}
            onChange={handleSearch}
            endAdornment={
              <InputAdornment position="end">
                <IconButton className="pr-4" onClick={submitSearch} edge="end">
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              "&.MuiInputBase-root": {
                borderRadius: "2rem",
              },
            }}
          />
        </FormControl>
      </div>
    </div>
  );
}
