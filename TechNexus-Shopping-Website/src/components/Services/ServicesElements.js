// ServicesElements.js
import './ServicesElements.scss';

export const ServicesContainer = ({ children }) => <div className="ServicesContainer">{children}</div>;
export const ServicesWrapper = ({ children }) => <div className="ServicesWrapper">{children}</div>;
export const ServicesCard = ({ children, ...props }) => <div className="ServicesCard" {...props}>{children}</div>;
export const ServicesIcon = (props) => <img className="ServicesIcon" {...props} />;
export const ServicesH1 = ({ children }) => <h1 className="ServicesH1">{children}</h1>;
export const ServicesH2 = ({ children }) => <h2 className="ServicesH2">{children}</h2>;
export const ServicesP = ({ children }) => <p className="ServicesP">{children}</p>;
