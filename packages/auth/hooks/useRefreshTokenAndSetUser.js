import { useDispatch } from "@camonk/react-redux";
import { toast } from "@camonk/toast";
import { useNavigate } from "@camonk/router";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { refreshToken as refreshTokenApi } from "../services";
import { clearUser, setToken } from "../authSlice";
import { useUser } from "./useUser";

export function useRefreshTokenAndSetUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { getUser, isGettingUser } = useUser();

  const {
    mutate: refreshTokenAndSetUser,
    isPending: isRefreshingTokenAndSettingUser,
  } = useMutation({
    mutationFn: refreshTokenApi,
    onSuccess: (response) => {
      const { accessToken } = response.data;
      dispatch(setToken(accessToken));
      getUser();
    },
    onError: (err) => {
      console.log("err", err);
      dispatch(clearUser());
      navigate("/login");
      console.error(err.message);
    },
  });

  return {
    refreshTokenAndSetUser,
    isRefreshingTokenAndSettingUser,
    isGettingUser,
  };
}
