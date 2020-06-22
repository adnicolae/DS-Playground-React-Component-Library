import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { useSpring, animated, config } from 'react-spring';
import { EmailInput, PasswordInput } from "./TextFields";

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

const RowModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
`;

const ModalHeader = styled.h4`
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

export const SignUpModal = ({ showModal, setShowModal}) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow
  });

  return (
    <animated.div style={ animation }>
      <ModalWrapper>
        <img src={ Illustrations.VdfSignUp } alt="Sign up for account" aria-hidden="true" />
        <ModalHeader>Sign up!</ModalHeader>
        <SignUpText>Sign up today to get access to your account!</SignUpText>
        <PrimaryButton>Sign up</PrimaryButton>
        <CloseModalButton aria-label="Close modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
}

export const SignInModal = ({ showModal, setShowModal}) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow
  });

  return (
    <animated.div style={ animation }>
      <RowModalWrapper>
        <div>
          <ModalHeader style={{ marginBottom: '20px' }}>Sign In</ModalHeader>
          <EmailInput label="Email" placeholder="andrei.nicolae@vodafone.com" />
          <PasswordInput label="Password" />
          <SecondaryButton style={{ margin: "16px 16px 0 0" }}>Sign up</SecondaryButton>
          <PrimaryButton>Sign in</PrimaryButton>
        </div>
        <img src={ Illustrations.VdfSignIn } alt="Sign up for account" aria-hidden="true" />
      </RowModalWrapper>
    </animated.div>
  );
}