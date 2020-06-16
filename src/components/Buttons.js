import styled from 'styled-components';

const primary300 = "#4477C9";

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
`;

export const PrimaryButton = styled(Button)`
  background: ${ primary300 };  
  color: #fff;
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${ primary300 };
  border: 1px solid ${ primary300 };
  box-sizing: border-box;
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${ primary300 };
  box-shadow: none;
`;