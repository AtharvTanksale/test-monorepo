import React, { useState } from "react";
import { Link, NavLink, useLocation } from "@camonk/router";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@camonk/design-system/components";

import {
  KeyboardArrowDown,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Expand as ExpandLess,
  Expand as ExpandMore,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@camonk/design-system/icons";

import { useTheme } from "@camonk/design-system";
import { useDispatch, useSelector } from "@camonk/react-redux";
import { toggleDarkMode } from "../../styles/DarkModeSlice";
import { useLogout } from "@camonk/auth/hooks";

const settings = [
  {
    buttonId: "dashboard-button",
    menuId: "dashboard-menu",
    name: "Dashboard",
    url: "/dashboard",
    onlyAdmin: true,
  },
  {
    buttonId: "log-in-button",
    menuId: "log-in-menu",
    name: "Log In",
    url: "/login",
  },
  {
    buttonId: "log-out-button",
    menuId: "log-out-menu",
    name: "Log Out",
    url: "/",
    logout: true,
  },
];

function Navbar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDarkMode = theme.palette.mode === "dark";
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);

  const { logout } = useLogout();

  const [aiBotAnchorEl, setAIBotAnchorEl] = useState(null);
  const [resumeToolAnchorEl, setResumeToolAnchorEl] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [aiBotMobileOpen, setAiBotMobileOpen] = useState(false);
  const [resumeToolsMobileOpen, setResumeToolsMobileOpen] = useState(false);

  const aiBotOpen = Boolean(aiBotAnchorEl);
  const resumeToolOpen = Boolean(resumeToolAnchorEl);

  const NavItems = [
    {
      buttonId: "ai-bot-button",
      menuId: "ai-bot-menu",
      name: "AI Bot",
      anchorEl: aiBotAnchorEl,
      isOpen: aiBotOpen,
      handleClick: handleAIBotClick,
      handleClose: handleAIBotClose,
      isMobileOpen: aiBotMobileOpen,
      handleMobileOpen: handleAiBotMobileOpen,
      url: "#",
      dropDowns: [
        { name: "Interview Bot", url: "/interview-bot" },
        { name: "Communication Bot", url: "/communication-bot" },
      ],
    },

    {
      buttonId: "resume-tool-button",
      menuId: "resume-bot-menu",
      name: "Resume Tool",
      anchorEl: resumeToolAnchorEl,
      isOpen: resumeToolOpen,
      handleClick: handleResumeToolClick,
      handleClose: handleResumeToolClose,
      isMobileOpen: resumeToolsMobileOpen,
      handleMobileOpen: handleResumeToolMobileOpen,
      url: "#",
      dropDowns: [
        { name: "Resume Scorer", url: "/resume-scorer" },
        { name: "Resume To JD Scorer", url: "/resume-to-jd-scorer" },
      ],
    },

    {
      buttonId: "salary-estimator-button",
      menuId: "salary-estimator-menu",
      name: "Salary Estimator",
      url: "/salary-estimator",
    },

    {
      buttonId: "articleship-scorer-button",
      menuId: "articleship-scorer-menu",
      name: "Articleship Scorer",
      url: "/articleship-scorer",
    },

    {
      buttonId: "events-button",
      menuId: "events-menu",
      name: "Events",
      url: "/events",
    },
  ];

  function handleLogout() {
    logout();
  }

  function handleCloseDrawer() {
    setIsDrawerOpen(false);
  }

  function handleAIBotClick(event) {
    setAIBotAnchorEl(event.currentTarget);
  }

  function handleAIBotClose() {
    setAIBotAnchorEl(null);
  }

  function handleAiBotMobileOpen() {
    setAiBotMobileOpen(!aiBotMobileOpen);
  }

  function handleResumeToolClick(event) {
    setResumeToolAnchorEl(event.currentTarget);
  }

  function handleResumeToolClose() {
    setResumeToolAnchorEl(null);
  }

  function handleResumeToolMobileOpen() {
    setResumeToolsMobileOpen(!resumeToolsMobileOpen);
  }

  function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  }

  function handleCloseUserMenu() {
    setAnchorElUser(null);
  }

  return (
    <AppBar position="sticky" color="navbar" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">CA MONK</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={handleCloseDrawer}
            >
              <Box p={2} width="100vw" textAlign="center" role="presentation">
                <Typography variant="h6" component="div" textAlign="right">
                  <CloseIcon onClick={handleCloseDrawer} />
                </Typography>

                <List component="nav" aria-labelledby="nested-list-subheader">
                  {NavItems.map((navItem) => {
                    return (
                      <React.Fragment key={navItem.name}>
                        <NavLink
                          to={navItem.url}
                          onClick={!navItem?.dropDowns && handleCloseDrawer}
                        >
                          <ListItemButton
                            key={navItem.buttonId}
                            onClick={navItem?.handleMobileOpen}
                            sx={{ fontWeight: "600", py: 2 }}
                          >
                            {navItem.name}
                            {navItem?.dropDowns &&
                              (navItem?.isMobileOpen ? (
                                <ExpandLess sx={{ pl: "2px" }} />
                              ) : (
                                <ExpandMore sx={{ pl: "2px" }} />
                              ))}
                          </ListItemButton>
                        </NavLink>
                        {navItem?.dropDowns && (
                          <Collapse
                            in={navItem?.isMobileOpen}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              {navItem.dropDowns.map((dropdown) => {
                                return (
                                  <NavLink
                                    to={dropdown.url}
                                    key={dropdown.name}
                                  >
                                    <ListItemButton
                                      sx={{ pl: 4 }}
                                      onClick={handleCloseDrawer}
                                    >
                                      {dropdown.name}
                                    </ListItemButton>
                                  </NavLink>
                                );
                              })}
                            </List>
                          </Collapse>
                        )}
                      </React.Fragment>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">CA MONK</Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              pr: 3,
            }}
          >
            {NavItems.map((navItem) => {
              return (
                <React.Fragment key={navItem.name}>
                  <NavLink
                    to={navItem.url}
                    style={{
                      color:
                        location.pathname === navItem.url &&
                        theme.palette.primary.light,
                    }}
                  >
                    <Button
                      color="inherit"
                      id={navItem?.buttonId}
                      onClick={navItem?.handleClick}
                      aria-controls={navItem?.isOpen ? navItem.menuId : null}
                      aria-haspopup="true"
                      aria-expanded={navItem?.isOpen ? "true" : null}
                      endIcon={navItem?.dropDowns && <KeyboardArrowDown />}
                    >
                      {navItem.name}
                    </Button>
                  </NavLink>

                  {navItem?.dropDowns && (
                    <Menu
                      id={navItem.menuId}
                      key={navItem.menuId}
                      anchorEl={navItem.anchorEl}
                      open={navItem?.isOpen}
                      MenuListProps={{
                        "aria-labelledby": navItem.buttonId,
                      }}
                      onClose={navItem?.handleClose}
                    >
                      {navItem?.dropDowns.map((dropdown, index) => {
                        return (
                          <NavLink
                            to={dropdown.url}
                            key={index}
                            style={{
                              color:
                                location.pathname === dropdown.url &&
                                theme.palette.primary.light,
                            }}
                          >
                            <MenuItem
                              onClick={navItem?.handleClose}
                              sx={{ fontSize: theme.typography.body2 }}
                            >
                              {dropdown.name}
                            </MenuItem>
                          </NavLink>
                        );
                      })}
                    </Menu>
                  )}
                </React.Fragment>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={
                    user?.firstName && user?.lastName
                      ? `${user.firstName} ${user.lastName}`
                      : "Remy Sharp"
                  }
                  src={user?.avatar ? user.avatar : "https://i.pravatar.cc/300"}
                  slotProps={{ img: { referrerPolicy: "no-referrer" } }}
                />
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
              {settings.map((setting, index) => {
                // Conditional rendering based on 'onlyAdmin' property

                if (setting.onlyAdmin && user?.role !== "ADMIN") {
                  return null;
                }

                return (
                  <NavLink
                    to={setting.url}
                    key={index}
                    onClick={handleCloseUserMenu}
                  >
                    <MenuItem onClick={setting.logout ? handleLogout : null}>
                      <Typography textAlign="center" variant="body2">
                        {setting.name}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export { Navbar };
