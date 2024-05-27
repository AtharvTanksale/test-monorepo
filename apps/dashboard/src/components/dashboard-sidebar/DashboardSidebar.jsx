import { useState } from "react";
import { Link, NavLink, useLocation } from "@camonk/router";
import { useTheme } from "@camonk/design-system";
import {
  Avatar,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@camonk/design-system/components";
import {
  ExpandLess,
  ExpandMore,
  SmartToy as SmartToyIcon,
  PersonAdd as PersonAddIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  Home as HomeIcon,
  FindInPage as FindInPageIcon,
  EditCalendar as EditCalendarIcon,
  CurrencyRupee as CurrencyRupeeIcon,
  Description as DescriptionIcon,
  PeopleAlt as PeopleAltIcon,
  Settings as SettingsIcon,
} from "@camonk/design-system/icons";
import UserSidebar from "../users/UserSidebar";

function DashboardSidebar() {
  const theme = useTheme();
  const location = useLocation();

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  if (location.pathname.includes("/users/")) return <UserSidebar />;

  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        gap: 1,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: 4 }}
      >
        <Link to="/">
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random/1080x1080/?puppy"
            sx={{
              width: 100,
              height: 100,
              margin: "0 auto",
            }}
          />

          <Typography
            variant="body1"
            textAlign="center"
            sx={{ fontWeight: 600, mt: 2 }}
          >
            CA MONK
          </Typography>
        </Link>
      </Stack>

      <NavLink to="/dashboard">
        <ListItemButton
          sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
        >
          <HomeIcon fontSize="large" />
          <Typography variant="body2">Home</Typography>
        </ListItemButton>
      </NavLink>

      <NavLink to="/dashboard/users">
        <ListItemButton
          sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
        >
          <PeopleAltIcon fontSize="large" />
          <Typography variant="body2">Users</Typography>
        </ListItemButton>
      </NavLink>

      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Tools" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ display: "flex", flexDirection: "column", gap: 1, pl: 2 }}
        >
          <NavLink to="/dashboard/events">
            <ListItemButton
              sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
            >
              <EditCalendarIcon fontSize="large" />
              <Typography variant="body2">Events</Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/dashboard/interview-bot">
            <ListItemButton
              sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
            >
              <SmartToyIcon fontSize="large" />
              <Typography variant="body2">Interview Bot</Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/dashboard/communication-bot">
            <ListItemButton
              sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
            >
              <RecordVoiceOverIcon fontSize="large" />
              <Typography variant="body2">Communication Bot</Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/dashboard/resume-scorer">
            <ListItemButton
              sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
            >
              <FindInPageIcon fontSize="large" />
              <Typography variant="body2">Resume Scorer</Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/dashboard/resume-to-jd-scorer">
            <ListItemButton
              sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
            >
              <DescriptionIcon fontSize="large" />
              <Typography variant="body2">Resume To JD Scorer</Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/dashboard/salary-estimator">
            <ListItemButton
              sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
            >
              <CurrencyRupeeIcon fontSize="large" />
              <Typography variant="body2">Salary Estimator</Typography>
            </ListItemButton>
          </NavLink>

          <NavLink to="/dashboard/articleship-scorer">
            <ListItemButton
              sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
            >
              <PersonAddIcon fontSize="large" />
              <Typography variant="body2">Articleship Scorer</Typography>
            </ListItemButton>
          </NavLink>
        </List>
      </Collapse>
      <NavLink to="/dashboard/settings">
        <ListItemButton
          sx={{ gap: theme.spacing(2), p: theme.spacing(1.5, 2) }}
        >
          <SettingsIcon fontSize="large" />
          <Typography variant="body2">Settings</Typography>
        </ListItemButton>
      </NavLink>
    </Stack>
  );
}

export default DashboardSidebar;
