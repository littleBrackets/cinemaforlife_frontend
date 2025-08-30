import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, List, ListItem } from "@mui/material";
import { getPersonById } from "../api/peopleApi";

export default function PersonDetailsPage() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPersonById(id).then(setPerson).catch(console.error);
  }, [id]);

  if (!person) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{person.primaryName}</Typography>
      <Typography>Born: {person.birthYear}</Typography>
      {person.deathYear && <Typography>Died: {person.deathYear}</Typography>}
      <Typography>Professions: {person.primaryProfession}</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Known For:</Typography>
      <List>
        {person.knownForTitles?.split(",").map(t => (
          <ListItem key={t}>{t}</ListItem>
        ))}
      </List>
    </Container>
  );
}
