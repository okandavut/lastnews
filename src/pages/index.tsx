import React, { useState } from 'react';
import styled from 'styled-components';

import NewsList from '../components/NewsList';
import CategoryMenu from '../components/CategoryMenu';
import CountryMenu from '../components/CountryMenu';

import { colors } from '../utils/colors';


const Home = () => {

  const MenuWrapper = styled.section`
padding: 20px;
`;

  const NewsContent = styled.section`
width: 100%;
padding-bottom: 40px;
`;

const Footer = styled.section`
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid ${colors.themeGrey};

    background-color: ${colors.themeBlack};
    text-align: center;
`;

  const FooterLink = styled.a`
color: ${colors.themeGreen};

&:hover {
  color: ${colors.themeGreen};
}
`;
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("tr");

  return (
    <>
      <MenuWrapper>
        <CategoryMenu
          category={category}
          setCategory={setCategory}
        />
        <CountryMenu
          country={country}
          setCountry={setCountry}
        />
      </MenuWrapper>
      <NewsContent>
        <NewsList category={category} country={country} />
      </NewsContent>
      <Footer>
        <FooterLink href="https://newsapi.org/" target="_blank">Api from newsapi.org</FooterLink>
      </Footer>
    </>
  );
}

export default Home;
