import { useMutation, useQueryClient } from "@camonk/react-query";
import { updateUserById as updateUserByIdApi } from "../../services/apiUsers";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: ({ userId, userData }) => {
      return updateUserByIdApi(userId, userData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => console.error(err.message),
  });

  return { updateUser, isUpdatingUser };
}
