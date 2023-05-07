import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "12vh",
          width: "100%",
          alignItems: "center",
        }}
      >
        {children}
      </main>
      <Footer />
    </Container>
  );
};
