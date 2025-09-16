import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { use } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
          CinemaForLife
        </Typography>

        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Sign up</Button>

        {/* <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/movies">Movies</Button>
        <Button color="inherit" component={Link} to="/people">People</Button> */}
      </Toolbar>
    </AppBar>
  );
}
