import { useMutation, useQueryClient } from "@camonk/react-query";
import { deleteUserById as deleteUserByIdApi } from "../../services/apiUsers";
import { useNavigate } from "@camonk/router";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: deleteUser, isPending: isDeletingUser } = useMutation({
    mutationFn: deleteUserByIdApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/dashboard/users");
    },
    onError: (err) => console.error(err.message),
  });

  return { deleteUser, isDeletingUser };
}
