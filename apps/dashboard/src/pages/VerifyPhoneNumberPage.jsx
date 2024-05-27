import { useSelector } from "@camonk/react-redux";
import { Box, Container } from "@camonk/design-system/components";
// import VerifyPhoneNumber from "../components/authentication/VerifyPhoneNumber";
import { VerifyPhoneNumber } from "@camonk/design-system/custom-components";

function VerifyPhoneNumberPage() {
  const { user } = useSelector((state) => state.auth);

  return !user?.phone ? (
    <Container component="section">{<VerifyPhoneNumber />}</Container>
  ) : (
    <Container>
      <Box>You have already verified your phone number!</Box>
    </Container>
  );
}

export default VerifyPhoneNumberPage;
