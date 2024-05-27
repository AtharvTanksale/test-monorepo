import { useDispatch } from "@camonk/react-redux";
import { toast } from "@camonk/toast";
import { useNavigate } from "@camonk/router";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { signUp as signUpApi } from "../services";
import { setToken } from "../authSlice";

export function useSignup() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (response) => {
      const { accessToken } = response.data;
      dispatch(setToken(accessToken));
      navigate("/");
      //   queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSigningUp, signup };
}
