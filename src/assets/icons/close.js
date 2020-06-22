import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path d="M16.7678 14.8L25.6066 23.521L23.8388 25.2652L15 16.5442L6.16117 25.2652L4.3934 23.521L13.2322 14.8L4.3934 6.07901L6.16117 4.33481L15 13.0558L23.8388 4.33481L25.6066 6.07901L16.7678 14.8Z" fill="#0C2C61"/>
  </CloseIconWrapper>
)