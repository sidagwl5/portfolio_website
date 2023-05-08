import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import styled from "styled-components";

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12vh;
  width: 100%;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 6vh;
  }
`;

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
