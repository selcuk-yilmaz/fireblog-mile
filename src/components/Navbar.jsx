import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/firebaseConfig";

export default function MenuAppBar() {
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { auth, setAuth } = React.useContext(AuthContext);
  console.log(auth);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("profile");
    setAnchorEl(null);
  };
  const handleLogin = () => {
    navigate("login");
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    navigate("login");
    setAnchorEl(null);
    logOut();
  };
  const handleNew = () => {
    navigate("newBlog");
    setAnchorEl(null);
  };
  const handleRegister = () => {
    navigate("register");
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ cursor: "pointer", flexGrow: 1 }}
          >
            <span>FİREBLOG</span>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            onClick={() => navigate("/")}
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              fontFamily: "Girassol",
              textAlign: "center",
            }}
          >
            ────
            <span style={{ fontSize: "2rem", color: "#F5DEB3" }}>
              {"<Allan Iverson/>"}
            </span>
            Blog ────
          </Typography>
          {auth && (
            <div>
              <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
                {auth.displayName}
              </Typography>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem>{currentUser.displayName}</MenuItem> */}
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleNew}>New</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
          )}

          {!auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleRegister}>Register</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
