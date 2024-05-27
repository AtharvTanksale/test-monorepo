import { Box } from "@camonk/design-system/components";
import {
  ResumeResultScore,
  ResumeResultRow,
} from "@camonk/design-system/custom-components";
import { Description } from "@camonk/design-system/icons";

function ArticleshipScorerResult() {
  return (
    <>
      <ResumeResultScore
        percentageValue={65}
        description={
          "You're on the right track, but your resume could definitely use some turing up. We recommend looking over our analysis below and seeing what you have to work on in order to take your resume to the next level."
        }
      />

      <Box>
        <ResumeResultRow
          icon={<Description />}
          title="Resume File Name"
          paragraph="Your resume file name follows our naming convention. Good Job!"
          isGood={true}
          noTopBorderRadius={true}
        />
        <ResumeResultRow
          icon={<Description />}
          title="Resume File Name"
          paragraph="Your resume file name follows our naming convention. Good Job!"
          isGood={false}
        />
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

export default ArticleshipScorerResult;
