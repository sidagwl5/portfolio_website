import React from "react";
import { DiFirebase, DiReact, DiZend, DiJavascript1 } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { RiToolsFill } from "react-icons/ri";

const Tag = ({ title }) => (
  <div
    style={{
      padding: "6px 12px",
      borderRadius: "30px",
      border: "2px rgba(208,187,87, 0.5) solid",
      fontSize: "14px",
    }}
  >
    {title}
  </div>
);

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        </ListContainer>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {[
            "ReactJS",
            "NextJS",
            "AstroJS",
            "StoryBook",
            "MUI",
            "TailwindCSS",
            "HTML",
            "CSS",
            "Redux",
            "React-Query",
            "Frontend-SEO",
          ].map((title) => (
            <Tag title={title} />
          ))}
        </div>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
        </ListContainer>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {[
            "ExpressJS",
            "NodeJS",
            "NestJS",
            "MongoDB",
            "Postgres",
            "API",
            "Firebase",
            "Supabase",
          ].map((title) => (
            <Tag title={title} />
          ))}
        </div>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
        </ListContainer>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {["Figma"].map((title) => (
            <Tag title={title} />
          ))}
        </div>
      </ListItem>

      <ListItem>
        <picture>
          <DiJavascript1 size="2.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
        </ListContainer>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {["Javascript", "Typescript", "Solidity"].map((title) => (
            <Tag title={title} />
          ))}
        </div>
      </ListItem>

      <ListItem>
        <picture>
          <RiToolsFill size="2.3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Tools</ListTitle>
        </ListContainer>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {[
            "Nx-Monorepo",
            "VSCode",
            "Git/Github",
            "Git/Gitlab",
            "Heroku",
            "Netlify",
            "Vercel",
            "Postman",
            "JIRA",
            "Asana",
          ].map((title) => (
            <Tag title={title} />
          ))}
        </div>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
