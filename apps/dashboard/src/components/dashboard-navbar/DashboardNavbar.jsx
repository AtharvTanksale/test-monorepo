import { useState } from "react";
import { Link } from "@camonk/router";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@camonk/design-system/components";

import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@camonk/design-system/icons";

import { useTheme } from "@camonk/design-system";
import { useDispatch } from "@camonk/react-redux";
import { toggleDarkMode } from "../../styles/DarkModeSlice";
import { useLogout } from "@camonk/auth/hooks";

const settings = [
  {
    buttonId: "dashboard-button",
    menuId: "dashboard-menu",
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    buttonId: "log-out-button",
    menuId: "log-out-menu",
    name: "Log Out",
    url: "/logout",
  },
];

function DashboardNavbar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDarkMode = theme.palette.mode === "dark";

  const [anchorElUser, setAnchorElUser] = useState(null);

  const { logout } = useLogout();

  function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  }

  function handleCloseUserMenu() {
    setAnchorElUser(null);
  }

  function handleLogout() {
    logout();
  }

  return (
    <AppBar
      position="sticky"
      color="navbar"
      elevation={0}
      sx={{ paddingRight: "3rem" }}
    >
      <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Toolbar disableGutters>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={() => dispatch(toggleDarkMode())}
              sx={{ ml: 2 }}
            >
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting, index) => (
                <Link
                  to={setting.url}
                  key={index}
                  onClick={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center" variant="body2">
                      {setting.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))} */}

              <Link to={"/login"} onClick={handleCloseUserMenu}>
                <MenuItem>
                  <Typography textAlign="center" variant="body2">
                    Login
                  </Typography>
                </MenuItem>
              </Link>

              <Link to={"#"} onClick={handleLogout}>
                <MenuItem>
                  <Typography textAlign="center" variant="body2">
                    Logout
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default DashboardNavbar;
