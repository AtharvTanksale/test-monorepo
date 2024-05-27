import { useDispatch } from "@camonk/react-redux";
import { useNavigate } from "@camonk/router";
import { useMutation } from "@camonk/react-query";
import { googleLogin as googleLoginApi } from "../services";
import { setToken } from "../authSlice";

export function useLoginWithGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate: googleLogin, isPending: isLoggingIn } = useMutation({
    mutationFn: googleLoginApi,
    onSuccess: (response) => {
      const { accessToken } = response.data;
      dispatch(setToken(accessToken));
      navigate("/");
    },
    onError: (err) => console.error(err.message),
  });

  return { googleLogin, isLoggingIn };
}
