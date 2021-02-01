import React from 'react';
import styled from 'styled-components';

const DialogBox = styled.div`
  width: 80%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const DialogMessage = styled.div`
  width: 90%;
  background-color: white;
  height: 100%;
  padding-left: 16px;
  display: flex;
  align-items: center;
  border-top-right-radius: 1000px;
  border-bottom-right-radius: 1000px;
  border-top-left-radius: 200px;
  border-bottom-left-radius: 200px;
  margin-left: 5px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export { DialogBox, DialogMessage, Avatar };
