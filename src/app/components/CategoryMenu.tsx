import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const categoriesArray = [
  { label: 'Tümü', value: 'all' },
  { label: 'İş Dünyası', value: 'business' },
  { label: 'Eğlence', value: 'entertainment' },
  { label: 'Sağlık', value: 'health' },
  { label: 'Bilim', value: 'science' },
  { label: 'Spor', value: 'sports' },
  { label: 'Teknoloji', value: 'technology' }
];

const CategoryMenuTitle = styled.h2`
  padding: 0;
  margin: 0 10px;
`;

const CategoryMenuWrapper = styled.div`
  padding: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryMenuItem = styled.a`
  padding: 10px 35px;
  margin: 0 10px;
  border: 1px solid #ebebeb;

  border-radius: 5px;
  background: ${(props: {isActive: boolean}) => props.isActive ? colors.themeGreen : 'transparent'};
  color: ${(props: {isActive: boolean}) => props.isActive ? colors.themeWhite : colors.themeBlack};

  &:hover {
    cursor: pointer;
    color: ${(props: {isActive: boolean}) => props.isActive ? colors.themeWhite : colors.themeBlack};
    background-color: ${(props: {isActive: boolean}) => props.isActive ? colors.themeGreen : '#f9f9f9'};
    text-decoration: none;
  }
`;

const CategoryMenu = (props) => (
  <CategoryMenuWrapper>
    <CategoryMenuTitle>Kategoriler</CategoryMenuTitle>
    {categoriesArray.map((category) =>
      <CategoryMenuItem
        onClick={() => { props.setCategory(category.value) }}
        isActive={props.category === category.value}
      >
        {category.label}
      </CategoryMenuItem>
    )}
  </CategoryMenuWrapper>
);

export default CategoryMenu;
