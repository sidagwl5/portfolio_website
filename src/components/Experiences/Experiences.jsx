import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React from "react";
import { css, tw } from "twind/style";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { StepConnector } from "@mui/material";

const steps = [
  {
    company: "Versai",
    designation: "Software Developer (SDE-1, SDE-2)",
    time: "06 / 21 - present",
    tasks: [
      "Worked on new features and solved bugs making application failure proof.",
      "Helped solving the doubts of other developers alongside Team Leader.",
      "Deployed features and patch updates to production.",
      "Worked on backend when work pressure was more there.",
      "Implemented Monorepo setup and contributed in creating a UI library with Storybook.",
      "One of the Founding members who started the project from scratch",
    ],
  },
  {
    company: "Namasys Consultants",
    designation: "Frontend Developer (Intern, SDE-1)",
    time: "08 / 20 - 05 / 21",
    tasks: [
      "Worked as Main Frontend Developer in a client based project.",
      "Managed other developers, solved there doubts and guided them.",
      "Worked on data intensive applications consisting of tables, organisations and folder system.",
      "Regularly organized tasks and scrums for the team.",
    ],
  },
  {
    designation: "UI Designer Intern",
    company: "Brandyse Media LLP",
    time: "05 / 20 - 06 / 20",
    tasks: [
      "Created 21 pages total (mobile, tablet and desktop)",
      "Synced with frontend developer for designs and asset exports",
      "Used figma plugins and noun project for icons",
      "Worked on the feedbacks/suggestions given by the founder of the company.",
      "Attended regular scrums related to current progress and future work",
    ],
  },
];

const Experiences = () => {
  return (
    <Section id="about">
      <SectionDivider divider colorAlt />
      <SectionTitle>Experiences</SectionTitle>
      {/*<SectionText>
      Hi, I'm Siddharth Agrawal, a frontend developer with a passion for
      crafting beautiful, responsive and engaging user experiences. With
      almost 2 years of experience in the industry, I specialize in using
      cutting-edge technologies such as
      <span style={{ color: "white" }}>
        {" "}
        ReactJS, NextJS, JavaScript and many more{" "}
      </span>{" "}
      to create scalable and performant web applications.
    </SectionText>

    <SectionText>
      I'm a strong believer in the power of collaboration and am always eager
      to work with designers, developers and other stakeholders to bring
      projects to life. Whether it's developing new features, improving code
      quality or optimizing performance, I thrive on solving complex problems
      and delivering high-quality results.
    </SectionText>
    */}
      <Stepper
        activeStep={undefined}
        orientation="vertical"
        className={tw("mt-4")}
        connector={
          <StepConnector
            classes={{
              lineVertical: tw("ml-7! border-l-[3px] border-l-white"),
              root: tw("m-0!"),
            }}
          />
        }
      >
        {steps.map(({ company, designation, time, tasks }, idx) => {
          return (
            <Step active={true}>
              <StepLabel
                classes={{
                  iconContainer: tw(
                    css({
                      "& svg": {
                        "@apply": "sm:mr-4",
                        width: "36px",
                        height: "36px",
                        fill: "transparent",
                        background:
                          "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%) !important",
                        borderRadius: "100%",
                      },
                      "& svg text": {
                        fontSize: "1rem",
                      },
                    })
                  ),
                }}
              >
                <SectionText className={tw("p-0! text-[#9cc9e3]")}>
                  {designation}
                </SectionText>
              </StepLabel>
              <StepContent
                className={tw("ml-7! border-l-[3px] border-l-white")}
              >
                <div className={tw("ml-2 sm:ml-8")}>
                  <SectionText
                    className={tw("p-0! text-white text-opacity-70")}
                  >
                    {company} ( {time} )
                  </SectionText>

                  <ol
                    type="1"
                    className={tw("pl-7 flex flex-col gap-1 sm:gap-0.5! mt-2")}
                  >
                    {tasks.map((task, idx) => (
                      <SectionSubText
                        className={tw("text-white list-item! list-decimal!")}
                      >
                        {task}
                      </SectionSubText>
                    ))}
                  </ol>
                </div>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Section>
  );
};

export default Experiences;
