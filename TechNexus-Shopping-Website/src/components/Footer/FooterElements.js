// FooterElements.js
import './FooterElements.scss';
import { Link } from 'react-router-dom';

export const FooterContainer = ({ children }) => <footer className="FooterContainer">{children}</footer>;
export const FooterWrap = ({ children }) => <div className="FooterWrap">{children}</div>;
export const FooterLinksContainer = ({ children }) => <div className="FooterLinksContainer">{children}</div>;
export const FooterLinksWrapper = ({ children }) => <div className="FooterLinksWrapper">{children}</div>;
export const FooterLinkItems = ({ children }) => <div className="FooterLinkItems">{children}</div>;
export const FooterLinkTitle = ({ children }) => <h1 className="FooterLinkTitle">{children}</h1>;
export const FooterLink = (props) => <Link className="FooterLink" {...props} />;
export const SocialMedia = ({ children }) => <section className="SocialMedia">{children}</section>;
export const SocialMediaWrap = ({ children }) => <div className="SocialMediaWrap">{children}</div>;
export const SocialLogo = (props) => <Link className="SocialLogo" {...props} />;
export const WebsiteRights = ({ children }) => <small className="WebsiteRights">{children}</small>;
export const SocialIcons = ({ children }) => <div className="SocialIcons">{children}</div>;
export const SocialIconLink = (props) => <a className="SocialIconLink" {...props} />;
