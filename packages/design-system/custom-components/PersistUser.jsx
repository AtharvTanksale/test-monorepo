import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Spinner } from "@camonk/design-system/custom-components";
import { Outlet, useNavigate } from "@camonk/router";
import { useDispatch, useSelector } from "@camonk/react-redux";
// import { refresh } from "../../api";
// import { clearUser, setToken } from "./authSlice";
import { clearUser, setToken } from "@camonk/auth/authSlice";
// import { useRefreshTokenAndSetUser } from "../../hooks/authentication/useRefreshTokenAndSetUser";
import { useRefreshTokenAndSetUser } from "@camonk/auth/hooks";

function PersistUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const {
    refreshTokenAndSetUser,
    isRefreshingTokenAndSettingUser,
    isGettingUser,
  } = useRefreshTokenAndSetUser();

  const memoizedRefreshTokenAndSetUser = useCallback(() => {
    refreshTokenAndSetUser();
  }, [refreshTokenAndSetUser]);

  useEffect(() => {
    function handleRefreshTokenAndSetUser() {
      try {
        memoizedRefreshTokenAndSetUser();
      } catch (error) {
        dispatch(clearUser());
        navigate("/login");
        console.error("Error refreshing token:", error);
      }
    }

    if (!user) {
      handleRefreshTokenAndSetUser();
    }
  }, [navigate, dispatch, user, memoizedRefreshTokenAndSetUser]);

  useLayoutEffect(() => {
    if (user && !user.phone) {
      navigate("/verify-phone-number");
    }
  }, [navigate, user]);

  if (isRefreshingTokenAndSettingUser || isGettingUser) return <Spinner />;

  return <Outlet />;
}

export { PersistUser };
