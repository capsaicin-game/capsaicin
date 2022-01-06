import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Game } from './Game';

export const App = (): React.ReactElement => {
  const App = styled.div`
    height: 100%;
  `;
  return (
    <App><Game /></App>
  );
};
