import { useDispatch } from "@camonk/react-redux";
import { useNavigate } from "@camonk/router";
import { useMutation } from "@camonk/react-query";
import { updatePhoneNumber as updatePhoneNumberApi } from "../services";
import { setPhoneOtpSessionId } from "../authSlice";

export function useUpdatePhoneNumber() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate: updatePhoneNumber, isPending: isUpdatingPhoneNumber } =
    useMutation({
      mutationFn: updatePhoneNumberApi,
      onSuccess: (response) => {
        const { otpSessionId } = response.data;
        dispatch(setPhoneOtpSessionId(otpSessionId));
      },
      onError: (err) => console.error(err.message),
    });

  return { updatePhoneNumber, isUpdatingPhoneNumber };
}
