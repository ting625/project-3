// SigninElements.js
import './SigninElements.scss';
import { Link } from 'react-router-dom';

export const Container = ({ children }) => <div className="Container">{children}</div>;
export const FormWrap = ({ children }) => <div className="FormWrap">{children}</div>;
export const Icon = (props) => <Link className="Icon" {...props} />;
export const FormContent = ({ children }) => <div className="FormContent">{children}</div>;
export const Form = ({ children, ...props }) => <form className="Form" {...props}>{children}</form>;
export const FormLabel = ({ children, ...props }) => <label className="FormLabel" {...props}>{children}</label>;
export const FormInput = (props) => <input className="FormInput" {...props} />;
export const FormButton = (props) => <button className="FormButton" {...props} />;
export const Text = ({ children }) => <span className="Text">{children}</span>;
export const FormH1 = ({ children }) => <h1 className="FormH1">{children}</h1>;
