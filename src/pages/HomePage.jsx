import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
    return <>
  
  <Typography variant="h4">Welcome to CinemaForLife 🎬</Typography>

  <h2>Go to Register <Link to={'/register'}>Sign Up</Link></h2>
  <h2>Go to login <Link to={'/login'}>Login</Link></h2>
  
  </>;
}
