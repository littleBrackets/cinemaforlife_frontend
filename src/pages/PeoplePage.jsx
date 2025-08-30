import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import { getPeople } from "../api/peopleApi";
import PersonCard from "../components/PersonCard";

export default function PeoplePage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then(setPeople).catch(console.error);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>People</Typography>
      <Grid container spacing={2}>
        {people.map(person => (
          <Grid item xs={12} sm={6} md={4} key={person.nconst}>
            <PersonCard person={person} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
