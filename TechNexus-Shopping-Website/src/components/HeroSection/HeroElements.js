// HeroElements.js
import './HeroElements.scss';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = ({ children }) => <div className="HeroContainer">{children}</div>;
export const HeroBg = ({ children }) => <div className="HeroBg">{children}</div>;
export const VideoBg = (props) => <video className="VideoBg" {...props} />;
export const HeroContent = ({ children }) => <div className="HeroContent">{children}</div>;
export const HeroH1 = ({ children }) => <h1 className="HeroH1">{children}</h1>;
export const HeroP = ({ children }) => <p className="HeroP">{children}</p>;
export const HeroBtnWrapper = ({ children }) => <div className="HeroBtnWrapper">{children}</div>;
export const ArrowForward = () => <MdArrowForward className="ArrowForward" />;
export const ArrowRight = () => <MdKeyboardArrowRight className="ArrowRight" />;
