import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function HomePage() {
  const isAuthorised = useSelector((state) => state.user.isAuthorised);
  return (
    <>
      <Typography variant="h4">Welcome to CinemaForLife 🎬</Typography>
      {isAuthorised ? (
        <></>
      ) : (
        <Typography variant="h6">
          Please login or register to access more features.
        </Typography>
      )}
    </>
  );
}
