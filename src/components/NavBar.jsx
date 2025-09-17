import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { setAuthorisation } from "../store/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  const navigate = useNavigate();
  const dispach = useDispatch();
  const isAuthorised = useSelector((state) => state.user.isAuthorised);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          CinemaForLife
        </Typography>

        {isAuthorised ? (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/movies">
              Movies
            </Button>
            <Button color="inherit" component={Link} to="/people">
              People
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("token");
                dispach(setAuthorisation(false));
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Sign up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
