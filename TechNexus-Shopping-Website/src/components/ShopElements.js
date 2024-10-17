
import styled from 'styled-components';

export const ShopContainer = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
`;

export const ShopH1 = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 64px;
`;

export const ShopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`;

export const ShopCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ShopIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ShopH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ShopP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const AddToCartButton = styled.button`
  border-radius: 20px;
  background: #01bf71;
  white-space: nowrap;
  padding: 8px 16px; /* Make the button thinner */
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px 0; /* Add margin for spacing */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01bf71;
  }
`;

export const RemoveFromCartButton = styled.button`
  border-radius: 20px;
  background: #ff4040;
  white-space: nowrap;
  padding: 8px 16px; /* Make the button thinner */
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px 0; /* Add margin for spacing */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ff4040;
  }
`;

export const CartSummaryContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const CartTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const CartItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  text-align: left;
`;

export const CartItem = styled.li`
  font-size: 1rem;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
`;

export const RemoveItemButton = styled.button`
  border-radius: 5px;
  background: #ff4040;
  white-space: nowrap;
  padding: 5px 10px;
  color: #fff;
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ff4040;
  }
`;

export const CartTotal = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;
