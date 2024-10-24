
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import './Sidebar.scss';

export const CloseIcon = FaTimes;
export const SidebarContainer = ({ isOpen, children }) => (
  <aside className={`sidebar-container ${isOpen ? 'open' : ''}`}>
    {children}
  </aside>
);

export const Icon = ({ onClick }) => (
  <div className="icon" onClick={onClick}>
    <CloseIcon className="close-icon" />
  </div>
);

export const SidebarWrapper = ({ children }) => (
  <div className="sidebar-wrapper">{children}</div>
);

export const SidebarMenu = ({ children }) => (
  <ul className="sidebar-menu">{children}</ul>
);

export const SidebarLink = ({ to, onClick, children }) => (
  <LinkScroll to={to} className="sidebar-link" onClick={onClick}>
    {children}
  </LinkScroll>
);

export const SideBtnWrap = ({ children }) => (
  <div className="side-btn-wrap">{children}</div>
);

export const SidebarRoute = ({ href, children }) => (
  <a href={href} className="sidebar-route">
    {children}
  </a>
);
