import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "@camonk/react-redux";
import { Container, Typography } from "@camonk/design-system/components";
import { reset } from "./InterviewBotSlice";
import ChooseDomain from "./ChooseDomain";
import WelcomeScreen from "./WelcomeScreen";
import ChooseExperience from "./ChooseExperience";
import InterviewBot from "./InterviewBot";
import InterviewBotGoBack from "./InterviewBotGoBack";

function InterviewBotInterface() {
  const step = useSelector((state) => state.interviewBot.step);
  const [isLaptopOrDesktop, setIsLaptopOrDesktop] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let windowWidth = window.innerWidth >= 700;
    setIsLaptopOrDesktop(windowWidth);
  }, []);

  useEffect(() => {
    return () => dispatch(reset());
  }, [dispatch]);

  return (
    <>
      {isLaptopOrDesktop ? (
        <div>
          {step > 0 && <InterviewBotGoBack />}
          <Container sx={{ mt: 10, width: "100%" }}>
            {step === 0 && <WelcomeScreen />}
            {step === 1 && <ChooseDomain />}
            {step === 2 && <ChooseExperience />}
            {step === 3 && <InterviewBot />}
          </Container>
        </div>
      ) : (
        <Container>
          <Typography>Sorry</Typography>
        </Container>
      )}
    </>
  );
}

export default InterviewBotInterface;
