import { useDispatch } from "@camonk/react-redux";
import { toast } from "@camonk/toast";
import { useNavigate } from "@camonk/router";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { login as loginApi } from "../services";
import { setToken } from "../authSlice";

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      const { accessToken } = response.data;
      dispatch(setToken(accessToken));
      navigate("/");
    },
    onError: (err) => console.error(err.message),
  });

  return { login, isLoggingIn };
}
