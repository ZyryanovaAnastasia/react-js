import { useContext } from "react";
import { useSelector } from "react-redux";

import { Box, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { useStyles } from "./app-bar-style";
import { ThemaContext } from "../../theme-context";

const BtnThema = ({ nameBtn }) => {
  const {
    theme: { name },
    themeSetter,
  } = useContext(ThemaContext);

  return (
    <button disabled={name === nameBtn} onClick={() => themeSetter(nameBtn)}>
      {nameBtn}
    </button>
  );
};

export const Header = (context) => {
  const countMessage = useSelector((state) => state.profile.countMessage);
  const style = useStyles();

  return (
    <Box className={style.barWrapper}>
      <>
        <Toolbar className="Toolbar">
          <Typography variant="h6" noWrap component="div">
            <Link to="/">Главная</Link>
            <BtnThema nameBtn="dark" />
            <BtnThema nameBtn="light" />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/chat">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={countMessage} color="error">
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
            <Link to="/gits">GITS</Link>
          </Box>
        </Toolbar>
      </>
    </Box>
  );
};
