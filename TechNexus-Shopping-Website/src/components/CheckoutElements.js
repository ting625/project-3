
import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 800px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const CheckoutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const CheckoutItem = styled.div`
  font-size: 1rem;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
  width: 100%;
  text-align: left;
`;

export const CheckoutTotal = styled.h3`
  font-size: 1.5rem;
  margin-top: 20px;
  color: #333;
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01bf71;
  }
`;
