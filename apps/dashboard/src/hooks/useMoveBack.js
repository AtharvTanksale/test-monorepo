import { useNavigate } from "@camonk/router";

export function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
