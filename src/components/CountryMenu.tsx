import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const categoriesArray = [
  { label: 'Türkiye', value: 'tr'},
  { label: 'Almanya', value: 'de'}
];

const CountryMenuTitle = styled.h2`
  padding: 0;
  margin: 0 10px;

  color: ${colors.themeBlack};
  font-size: 21px;
  font-weight: 500;
`;

const CountryMenuWrapper = styled.div`
  padding: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountryMenuItem = styled.a`
  padding: 10px 35px;
  margin: 0 10px;
  border: 1px solid ${colors.themeGrey};

  border-radius: 5px;
  background: ${(props: {isActive: boolean}) => props.isActive ? colors.themeGreen : 'transparent'};
  color: ${(props: {isActive: boolean}) => props.isActive ? colors.themeWhite : colors.themeBlack};

  &:hover {
    cursor: pointer;
    color: ${(props: {isActive: boolean}) => props.isActive ? colors.themeWhite : colors.themeBlack};
    background-color: ${(props: {isActive: boolean}) => props.isActive ? colors.themeGreen : colors.themeButtonHoverBg};
    text-decoration: none;
  }
`;

const CountryMenu = (props : any) => (
  <CountryMenuWrapper>
    <CountryMenuTitle>Ülke</CountryMenuTitle>
    {categoriesArray.map((country: any, index: number) =>
      <CountryMenuItem
      key={index}
        onClick={() => { props.setCountry(country.value) }}
        isActive={props.country === country.value}
      >
        {country.label}
      </CountryMenuItem>
    )}
  </CountryMenuWrapper>
);

export default CountryMenu;
