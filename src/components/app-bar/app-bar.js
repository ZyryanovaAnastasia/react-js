import { useContext } from "react";
import { Box, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { useStyles } from "./app-bar-style";
import { ThemContext } from "../../theme-context";

export const Header = () => {
  const ctx = useContext(ThemContext);
  const style = useStyles();

  return (
    <Box className={style.barWrapper}>
      <>
        <Toolbar className="Toolbar">
          <Typography variant="h6" noWrap component="div">
            <Link to="/"> Главная</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/chat">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/profile">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </>
    </Box>
  );
};
