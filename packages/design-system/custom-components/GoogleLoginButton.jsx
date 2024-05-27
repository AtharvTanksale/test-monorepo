import { toast } from "@camonk/toast";
import { useGoogleLogin } from "@camonk/auth";
import { useTheme } from "@camonk/design-system";
import { Avatar, Button } from "@camonk/design-system/components";
import { GoogleLoginImg } from "@camonk/design-system/images";
// import { useLoginWithGoogle } from "../../hooks/authentication/useLoginWithGoogle";
import { useLoginWithGoogle } from "@camonk/auth/hooks";

function GoogleLoginButton() {
  const theme = useTheme();
  const { googleLogin, isLoggingIn } = useLoginWithGoogle();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      googleLogin(tokenResponse.access_token);
    },
    onError: () => {
      toast.error("Google login failed!");
    },
  });

  return (
    <Button
      onClick={loginWithGoogle}
      startIcon={<Avatar src={GoogleLoginImg} />}
      sx={{
        width: "fit-content",
        pl: 2,
        pr: { md: 6, xs: 5 },
        border: `1px solid #ddd`,
        color: theme.palette.text.primary,
      }}
    >
      Continue with Google
    </Button>
  );
}

export { GoogleLoginButton };
