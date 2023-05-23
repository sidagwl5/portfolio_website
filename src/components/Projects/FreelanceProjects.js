import React from "react";

import { freelanceProjects } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";

const FreelanceProjects = () => (
  <Section nopadding id="projects">
    <SectionDivider divider />
    <SectionTitle>Freelance Projects</SectionTitle>
    <GridContainer>
      {freelanceProjects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target="_blank" href={p.visit}>
                Visit
              </ExternalLinks>
              {p.source && (
                <ExternalLinks target="_blank" href={p.source}>
                  Source
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default FreelanceProjects;
