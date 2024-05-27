import { useTheme } from "@camonk/design-system";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import {
  Select,
  UploadFileButton,
} from "@camonk/design-system/custom-components";
import { UploadFileOutlined } from "@camonk/design-system/icons";
import { CoinsImage } from "@camonk/design-system/images";
import { FormProvider, useForm } from "@camonk/react-hook-form";
import ResumeScorerResult from "./ResumeScorerResult";

function ResumeScorer() {
  const theme = useTheme();
  const methods = useForm();

  function onSubmit(data) {
    // mutate(data);
    console.log(data);
    methods.reset();
  }

  return (
    <>
      <Paper
        component="section"
        sx={{
          borderRadius: 4,
          m: "0 auto",
          width: { md: "45%", xs: "90%" },
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
              Resume Scorer
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
            <Stack
              component="form"
              direction="column"
              spacing={5}
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <Box>
                <Select
                  id="choose-domain"
                  label="Choose Your Domain"
                  control={methods.control}
                  menuItems={[
                    "Statutory Audit",
                    "Internal Audit",
                    "Indirect Tax",
                    "Direct Tax",
                    "Finance Controllership",
                    "Investment Banking",
                    "Management Consulting",
                    "Financial Planning & Analysis",
                    "Transfer Pricing",
                  ]}
                  validation={{ required: "This field is required" }}
                />
              </Box>

              <Box>
                <Select
                  id="choose-experience"
                  label="What Describes You Best"
                  menuItems={[
                    "CA Finalist Nov 23",
                    "CA Intermediate",
                    "CA Foundation",
                    "Qualified CA Professional",
                    "Other",
                  ]}
                  validation={{ required: "This field is required" }}
                />
              </Box>

              <Box>
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
              </Box>

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
                Click To Scan
              </Button>
            </Stack>
          </FormProvider>
        </Stack>
      </Paper>

      <ResumeScorerResult />
    </>
  );
}

export default ResumeScorer;
