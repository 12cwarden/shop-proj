import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 25%;
  padding: 15px;
`;
export const NavLinks = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const NavTitle = styled.h1`
font-family: 'Creepster', cursive;
color: #8b0000;
font-size: 50px;
  display: flex;
  height: 100%;
  width 50%;
  justify-content: center;
  align-items: center;
`;
