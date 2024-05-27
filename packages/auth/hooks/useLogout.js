import { useDispatch } from "@camonk/react-redux";
import { useNavigate } from "@camonk/router";
import { useMutation } from "@camonk/react-query";
import { logout as logoutApi } from "../services";
import { clearUser } from "../authSlice";

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      dispatch(clearUser());
      navigate("/login");
    },
    onError: (err) => {
      console.error(err.message);
      dispatch(clearUser());
      navigate("/login");
    },
  });

  return { logout, isLoggingOut };
}
