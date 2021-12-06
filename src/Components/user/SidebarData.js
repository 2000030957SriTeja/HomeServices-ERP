 import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from "react-icons/bs";
import SideBar from './SideBar';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/sidebar',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  
  {
    title: 'Services',
    path: '/services',
    icon: <FaIcons.FaCartPlus />
  },
  
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
   title: 'FAQ`S',
   path: '/sidebar/faq',
   icon: <BsIcons.BsFillPeopleFill/>
 },
 {
   title: 'Terms&Conditions',
   path: '/terms',
   icon: <IoIcons.IoMdAlert/>
 },
 {
   title: 'logout',
   path: '/',
   icon: <RiIcons.RiLogoutCircleRFill/>
 },
];
