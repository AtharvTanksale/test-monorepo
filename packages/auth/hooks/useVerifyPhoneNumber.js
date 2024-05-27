import { useNavigate } from "@camonk/router";
import { useMutation } from "@camonk/react-query";
import { verifyPhoneNumber as verifyPhoneNumberApi } from "../services";
import { useRefreshTokenAndSetUser } from "./useRefreshTokenAndSetUser";

export function useVerifyPhoneNumber() {
  const navigate = useNavigate();

  const {
    refreshTokenAndSetUser,
    isRefreshingTokenAndSettingUser,
    isGettingUser,
  } = useRefreshTokenAndSetUser();

  const { mutate: verifyPhoneNumber, isPending: isVerifyingPhoneNumber } =
    useMutation({
      mutationFn: verifyPhoneNumberApi,
      onSuccess: () => {
        refreshTokenAndSetUser();
        navigate("/");
      },
      onError: (err) => console.error(err.message),
    });

  return { verifyPhoneNumber, isVerifyingPhoneNumber };
}
