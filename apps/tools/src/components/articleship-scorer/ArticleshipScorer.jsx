import { FormProvider, useForm } from "@camonk/react-hook-form";
import { useTheme } from "@camonk/design-system";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import {
  Input,
  CustomToggleButtonGroup,
  RadioGroup,
  UploadFileButton,
} from "@camonk/design-system/custom-components";

import {
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAltOutlined,
  SentimentVeryDissatisfied,
  SentimentVerySatisfiedOutlined,
  UploadFileOutlined,
} from "@camonk/design-system/icons";
import { CoinsImage } from "@camonk/design-system/images";

import ArticleshipScorerResult from "./ArticleshipScorerResult";

function ArticleshipScorer() {
  const theme = useTheme();
  const methods = useForm();

  function onSubmit(data) {
    // mutate(data);
    console.log(data);
    console.log(data.uploadResume[0]);
    methods.reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <Paper
        component="section"
        sx={{
          borderRadius: 4,
          m: "0 auto",
          width: { md: "85%", xs: "90%" },
          py: { md: 8, xs: 4 },
          my: 8,
        }}
      >
        <Stack direction="column" spacing={6} sx={{ px: { md: 8, xs: 4 } }}>
          <Box>
            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{ mb: 2 }}
            >
              Articleship Scorer
            </Typography>
            <Typography
              variant="body2"
              component="h6"
              align="center"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
                opacity: 0.8,
              }}
            >
              <img
                src={CoinsImage}
                alt="coins"
                style={{ width: "22px", height: "22px" }}
              />
              10 Coins Required
            </Typography>
          </Box>
          <FormProvider {...methods}>
            <Box
              component="form"
              sx={{ my: 4 }}
              onSubmit={methods.handleSubmit(onSubmit, onError)}
            >
              <Grid container rowSpacing={{ md: 8, xs: 6 }} columnSpacing={12}>
                <Grid item xs={12} md={6}>
                  <Input
                    id="tenthMarks"
                    label="10th Class Score ( Out of 100 )"
                    placeholder="Enter your marks"
                    size="large"
                    type="number"
                    validation={{
                      required: "This field is required",
                      min: {
                        value: 1,
                        message: "Marks must be at least 1",
                      },
                      max: {
                        value: 100,
                        message: "Marks cannot be more than 100",
                      },
                      valueAsNumber: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input
                    id="twelfthMarks"
                    label="12th Class Score ( Out of 100 )"
                    placeholder="Enter your marks"
                    size="large"
                    type="number"
                    validation={{
                      required: "This field is required",
                      min: {
                        value: 1,
                        message: "Marks must be at least 1",
                      },
                      max: {
                        value: 100,
                        message: "Marks cannot be more than 100",
                      },
                      valueAsNumber: true,
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Input
                    id="caFoundationScore"
                    label="Score % in CA Foundation"
                    placeholder="Enter Your CA Score in %"
                    size="large"
                    type="number"
                    validation={{
                      required: "This field is required",
                      min: {
                        value: 1,
                        message: "Marks must be at least 1",
                      },
                      max: {
                        value: 100,
                        message: "Marks cannot be more than 100",
                      },
                      valueAsNumber: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input
                    id="caInterMarks"
                    label="Score % in CA Inter ( Combined )"
                    placeholder="Enter Your CA Score in %"
                    size="large"
                    type="number"
                    validation={{
                      required: "This field is required",
                      min: {
                        value: 1,
                        message: "Marks must be at least 1",
                      },
                      max: {
                        value: 100,
                        message: "Marks cannot be more than 100",
                      },
                      valueAsNumber: true,
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomToggleButtonGroup
                    label="Number of Attempts in CA Inter ( group 1 )"
                    id="numberOfAttemptsInCAInterGroup1"
                    values={[1, 2, 3, 4, 5, 6]}
                    bgcolor={true}
                    validation={{ required: "This field is required" }}
                    icons={[
                      <Typography
                        component="p"
                        key={1}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        1
                      </Typography>,
                      <Typography
                        component="p"
                        key={2}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        2
                      </Typography>,
                      <Typography
                        component="p"
                        key={3}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        3
                      </Typography>,
                      <Typography
                        component="p"
                        key={4}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        4
                      </Typography>,
                      <Typography
                        component="p"
                        key={5}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        5
                      </Typography>,
                      <Typography
                        component="p"
                        key={6}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        5+
                      </Typography>,
                    ]}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomToggleButtonGroup
                    label="Number of Attempts in CA Inter ( group 2 )"
                    id="numberOfAttemptsInCAInterGroup2"
                    values={[1, 2, 3, 4, 5, 6]}
                    bgcolor={true}
                    validation={{ required: "This field is required" }}
                    icons={[
                      <Typography
                        component="p"
                        key={1}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        1
                      </Typography>,
                      <Typography
                        component="p"
                        key={2}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        2
                      </Typography>,
                      <Typography
                        component="p"
                        key={3}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        3
                      </Typography>,
                      <Typography
                        component="p"
                        key={4}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        4
                      </Typography>,
                      <Typography
                        component="p"
                        key={5}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        5
                      </Typography>,
                      <Typography
                        component="p"
                        key={6}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        5+
                      </Typography>,
                    ]}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <RadioGroup
                    id="rankInCAInter"
                    label="Did you secure a rank in CA Inter?"
                    values={["Yes", "No"]}
                    validation={{ required: "This field is required" }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <RadioGroup
                    id="industrialTraining"
                    label="Have you done Industrial Training?"
                    values={["Yes", "No"]}
                    validation={{ required: "This field is required" }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomToggleButtonGroup
                    label="Communication Skills"
                    id="communicationSkills"
                    values={[5, 4, 3, 2, 1]}
                    valueLabels={["Excellent", "", "Average", "", "Poor"]}
                    validation={{ required: "This field is required" }}
                    icons={[
                      <SentimentVerySatisfiedOutlined
                        key={5}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                      <SentimentSatisfiedAltOutlined
                        key={4}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                      <SentimentSatisfied
                        key={3}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                      <SentimentDissatisfied
                        key={2}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                      <SentimentVeryDissatisfied
                        key={1}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                    ]}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomToggleButtonGroup
                    label="Technical Skills"
                    id="technicalSkills"
                    values={[5, 4, 3, 2, 1]}
                    valueLabels={["Excellent", "", "Average", "", "Poor"]}
                    validation={{ required: "This field is required" }}
                    icons={[
                      <SentimentVerySatisfiedOutlined
                        key={5}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                      <SentimentSatisfiedAltOutlined
                        key={4}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                      <SentimentSatisfied
                        key={3}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                      <SentimentDissatisfied
                        key={2}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                      <SentimentVeryDissatisfied
                        key={1}
                        sx={{
                          fontSize: {
                            md: theme.typography.h2.fontSize,
                            xs: theme.typography.h4.fontSize,
                          },
                          color: theme.palette.text.primary,
                        }}
                      />,
                    ]}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomToggleButtonGroup
                    label="Number of Attempts in CA Foundation"
                    id="numberOfAttemptsInCAFoundation"
                    values={[1, 2, 3, 4, 5, 6]}
                    bgcolor={true}
                    validation={{ required: "This field is required" }}
                    icons={[
                      <Typography
                        component="p"
                        key={1}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        1
                      </Typography>,
                      <Typography
                        component="p"
                        key={2}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        2
                      </Typography>,
                      <Typography
                        component="p"
                        key={3}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        3
                      </Typography>,
                      <Typography
                        component="p"
                        key={4}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        4
                      </Typography>,
                      <Typography
                        component="p"
                        key={5}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        5
                      </Typography>,
                      <Typography
                        component="p"
                        key={6}
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        5+
                      </Typography>,
                    ]}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <UploadFileButton
                    id="uploadResume"
                    accept="application/pdf"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    label="Upload Resume"
                    startIcon={<UploadFileOutlined />}
                  >
                    Choose File
                  </UploadFileButton>
                </Grid>
              </Grid>
              <Button
                id="resume"
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  height: "50px",
                  mt: 6,
                  fontSize: theme.typography.body1.fontSize,
                  "&.MuiButton-root": {
                    fontSize: theme.typography.body1.fontSize,
                  },
                }}
              >
                Calculate My Score
              </Button>
            </Box>
          </FormProvider>
        </Stack>
      </Paper>

      <ArticleshipScorerResult />
    </>
  );
}

export default ArticleshipScorer;
