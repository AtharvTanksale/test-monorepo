import dayjs from "dayjs";
import { useSearchParams } from "@camonk/router";
import { FormProvider, useForm } from "@camonk/react-hook-form";
import { Stack, Typography } from "@camonk/design-system/components";
import { DatePicker } from "@camonk/design-system/custom-components";

function DateRangeFilter() {
  const methods = useForm();

  const [searchParams, setSearchParams] = useSearchParams();

  function onSubmit(data) {
    // mutate(data);

    methods.reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <FormProvider {...methods}>
      <Stack
        component="form"
        direction="row"
        alignItems="center"
        spacing={2}
        onSubmit={methods.handleSubmit(onSubmit, onError)}
      >
        <DatePicker
          id="fromDate"
          defaultValue={dayjs()}
          validation={{
            required: "This field is required",
          }}
          format="MMMM DD, YYYY"
          size="large"
        />

        <Typography variant="body1">To</Typography>

        <DatePicker
          id="toDate"
          validation={{
            required: "This field is required",
          }}
          format="MMMM DD, YYYY"
        />
      </Stack>
    </FormProvider>
  );
}

export default DateRangeFilter;
