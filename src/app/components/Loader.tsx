import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg'

const LoaderWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const Loader = () => 
  <LoaderWrapper>
    <ReactSVG src="../../../public/loader.svg" />
  </LoaderWrapper>

export default Loader;
