// FormElement.js
import './FormElement.scss';

// Updated to use divs with class names instead of styled-components
export const FormWrap = ({ children }) => <div className="FormWrap">{children}</div>;
export const FormContent = ({ children }) => <div className="FormContent">{children}</div>;
export const Form = ({ children, ...props }) => <form className="Form" {...props}>{children}</form>;
export const FormLabel = ({ children, ...props }) => <label className="FormLabel" {...props}>{children}</label>;
export const HalfWidthInput = (props) => <input className="HalfWidthInput" {...props} />;
export const FormTextArea = (props) => <textarea className="FormTextArea" {...props} />;
export const FormSelect = (props) => <select className="FormSelect" {...props} />;
export const FormButton = (props) => <button className="FormButton" {...props} />;
export const Text = ({ children }) => <span className="Text">{children}</span>;
export const FormRow = ({ children }) => <div className="FormRow">{children}</div>;

export const InfoContainer = ({ children, lightBg, ...props }) => (
  <div className={`InfoContainer ${lightBg ? 'lightBg' : ''}`} {...props}>
    {children}
  </div>
);

export const InfoWrapper = ({ children }) => <div className="InfoWrapper">{children}</div>;
export const InfoRow = ({ children }) => <div className="InfoRow">{children}</div>;
export const Column1 = ({ children }) => <div className="Column1">{children}</div>;
export const Column2 = ({ children }) => <div className="Column2">{children}</div>;

export const TextWrapper = ({ children }) => <div className="TextWrapper">{children}</div>;
export const TopLine = ({ children }) => <p className="TopLine">{children}</p>;
export const Heading = ({ children, lightText }) => (
  <h1 className={`Heading ${lightText ? 'lightText' : ''}`}>{children}</h1>
);
export const Subtitle = ({ children }) => <p className="Subtitle">{children}</p>;

export const BtnWrap = ({ children }) => <div className="BtnWrap">{children}</div>;
export const ImgWrap = ({ children }) => <div className="ImgWrap">{children}</div>;
export const Img = (props) => <img className="Img" {...props} />;
