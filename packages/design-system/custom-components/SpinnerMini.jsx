import ClipLoader from "react-spinners/ClipLoader";

function SpinnerMini() {
  return (
    <ClipLoader
      color="var(--color-brand-primary)"
      loading={true}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export { SpinnerMini };
