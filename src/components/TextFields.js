import React from 'react';
import styled from 'styled-components';
import { typeScale, primaryFont, primaryMono } from '../utils';

const Input = styled.input`
  width: 313px;
  height: 52px;
  background-color: ${ props => props.theme.textFieldBackground };
  font-family: ${ primaryMono };
  border: none;
  border-radius: 2px;
`;

const Label = styled.label`
  color: ${ props => props.theme.textFieldLabelColor };
  font-size: ${ typeScale.helperText };
  font-family: ${ primaryMono };
  margin-bottom: 8px;
`;

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const EmailInput = ({ label, placeholder }) => (
  <FormInputWrapper>
    <Label htmlFor='email'>{ label }</Label>
    <Input id="email" type="email" placeholder={ placeholder } />
  </FormInputWrapper>
);

export const PasswordInput = ({ label, placeholder }) => (
  <FormInputWrapper>
    <Label htmlFor='password'>{ label }</Label>
    <Input id="password" type="password" placeholder={ placeholder } />
  </FormInputWrapper>
);