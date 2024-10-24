
import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import './Navbar.scss';

export const MobileIcon = ({ onClick }) => (
  <div className="mobile-icon" onClick={onClick}>
    <i className="fas fa-bars"></i>
  </div>
);

export const Nav = ({ children }) => (
  <nav className="nav">{children}</nav>
);

export const NavbarContainer = ({ children }) => (
  <div className="navbar-container">{children}</div>
);

export const NavLogo = ({ href, children }) => (
  <a href={href} className="nav-logo">
    {children}
  </a>
);

export const NavMenu = ({ children }) => (
  <ul className="nav-menu">{children}</ul>
);

export const NavItem = ({ children }) => (
  <li className="nav-item">{children}</li>
);

export const NavLinks = ({ to, children }) => (
  <LinkScroll to={to} className="nav-links">
    {children}
  </LinkScroll>
);

export const NavBtn = ({ children }) => (
  <nav className="nav-btn">{children}</nav>
);

export const NavBtnLink = ({ href, children }) => (
  <a href={href} className="nav-btn-link">
    {children}
  </a>
);
