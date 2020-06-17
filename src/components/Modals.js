import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
  background-color: ${ props => props.theme.formModalBackground };
  color: ${ props => props.theme.formModalTextColor };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  margin-left: 50px;
`;

const SignUpHeader = styled.h4`
  font-size: ${ typeScale.h4 };
  margin-top: 10px;
  margin-bottom: 15px;
`;

const SignUpText = styled.p`
  font-size: ${ typeScale.p };
  max-width: 70%;
  text-align: center;
  margin-bottom: 49px;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img src={ Illustrations.SignUp } alt="Sign up for account" aria-hidden="true" />
      <SignUpHeader>Sign up!</SignUpHeader>
      <SignUpText>Sign up today to get access to your account!</SignUpText>
      <PrimaryButton>Sign up</PrimaryButton>
      <CloseModalButton aria-label="Close modal">
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  );
}