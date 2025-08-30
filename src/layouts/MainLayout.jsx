import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 4 }}>{children}</Container>
    </>
  );
}
