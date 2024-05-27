import { useDispatch } from "@camonk/react-redux";
import { useNavigate } from "@camonk/router";
import { useMutation, useQueryClient } from "@camonk/react-query";
import { getUser as getUserApi } from "../services";
import { setUser } from "../authSlice";

export function useUser() {
  const dispatch = useDispatch();

  const { mutate: getUser, isPending: isGettingUser } = useMutation({
    mutationFn: getUserApi,
    onSuccess: (response) => {
      const data = response.data;

      dispatch(setUser(data));
    },
    onError: (err) => console.error(err),
  });

  return { getUser, isGettingUser };
}
