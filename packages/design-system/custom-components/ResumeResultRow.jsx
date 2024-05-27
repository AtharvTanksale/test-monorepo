import { cloneElement } from "react";
import { useTheme, Box, Paper, Stack, Typography } from "../components";
import { Check, Close as CloseIcon } from "../icons";

function ResumeResultRow({
  icon,
  title,
  paragraph,
  isGood,
  noTopBorderRadius,
}) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        borderRadius: 4,
        borderTopLeftRadius: noTopBorderRadius ? 0 : "16px",
        borderTopRightRadius: noTopBorderRadius ? 0 : "16px",
        m: "0 auto",
        width: { md: "85%", xs: "90%" },
        py: { md: 6, xs: 4 },
        mb: 0.7,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ px: { md: 8, xs: 2 } }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ width: { md: "10%", xs: "15%" } }}>
          <Box
            sx={{
              width: { md: "60px", xs: "35px" },
              height: { md: "60px", xs: "35px" },
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: theme.palette.iconBackground,
            }}
          >
            {cloneElement(icon, {
              sx: {
                fontSize: {
                  md: theme.typography.h4.fontSize,
                  xs: theme.typography.body2.fontSize,
                },
              },
            })}
          </Box>
        </Box>

        <Box sx={{ width: { md: "80%", xs: "70%" } }}>
          <Typography
            component="h6"
            sx={{
              fontSize: {
                md: theme.typography.h5.fontSize,
                xs: theme.typography.body1.fontSize,
              },
              mb: {
                md: 1,
                xs: 0.5,
              },
              fontWeight: "600",
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: {
                md: theme.typography.body2.fontSize,
                xs: theme.typography.caption.fontSize,
              },
              opacity: 0.8,
            }}
          >
            {paragraph}
          </Typography>
        </Box>

        <Box
          sx={{
            width: { md: "10%", xs: "15%" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              width: { md: "55px", xs: "37px" },
              height: { md: "55px", xs: "37px" },
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: isGood ? "#DFF3DF" : "#FFECEC",
            }}
          >
            {isGood ? (
              <Check
                sx={{
                  fontSize: {
                    md: theme.typography.h3.fontSize,
                    xs: theme.typography.h5.fontSize,
                  },
                  color: theme.palette.success.dark,
                }}
              />
            ) : (
              <CloseIcon
                sx={{
                  fontSize: {
                    md: theme.typography.h3.fontSize,
                    xs: theme.typography.h5.fontSize,
                  },
                  color: theme.palette.error.main,
                }}
              />
            )}
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
}

export { ResumeResultRow };
