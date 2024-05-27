import React from "react";
import { Box } from "@camonk/design-system/components";
import {
  ResumeResultRow,
  ResumeResultScore,
} from "@camonk/design-system/custom-components";
import { Description } from "@camonk/design-system/icons";
import DomainScores from "./DomainScores";

function ResumeScorerResult() {
  return (
    <>
      <ResumeResultScore
        percentageValue={70}
        description={
          "You're on the right track, but your resume could definitely use some turing up. We recommend looking over our analysis below and seeing what you have to work on in order to take your resume to the next level."
        }
      />

      <Box sx={{ mt: { md: 4, xs: 2 } }}>
        <DomainScores />
      </Box>

      <Box sx={{ mt: { md: 4, xs: 2 } }}>
        <ResumeResultRow
          icon={<Description />}
          title="Resume File Name"
          paragraph="Your resume file name follows our naming convention. Good Job!"
          isGood={false}
        />
      </Box>
    </>
  );
}

export default ResumeScorerResult;
