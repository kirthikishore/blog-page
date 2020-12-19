import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Domain',
        path: '/domain',
        icon: < AiIcons.AiOutlineGlobal />,
        cName: 'nav-text'
    },
    {
        title: 'Booking',
        path: '/booking',
        icon: <AiIcons.AiFillCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Store',
        path: '/store',
        icon: <FaIcons.FaStore />,
        cName: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <FaIcons.FaBlogger />,
        cName: 'nav-text'
    },
    {
        title: 'Email',
        path: '/email',
        icon: <AiIcons.AiOutlineMail />,
        cName: 'nav-text'
    },
]
