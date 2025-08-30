import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, List, ListItem } from "@mui/material";
import { getPersonById } from "../api/people";

export default function PersonDetailsPage() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [knownFor, setKnownFor] = useState([]);

  useEffect(() => {
    getPersonById(id).then(setPerson).catch(console.error);
  }, [id]);
  
  // useEffect(() => {
  //   // fetch only if person.knownForTitles exists
  //   if (person?.knownForTitles) {
  //     const ids = person.knownForTitles.split(",").slice(0, 2); // limit to 2
  //     axios
  //       .get(`http://localhost:5000/api/movies/byIds?ids=${ids.join(",")}`)
  //       .then(res => setKnownFor(res.data))
  //       .catch(console.error);
  //   }
  // }, [person?.knownForTitles]);

  if (!person) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{person.primaryname}</Typography>
      <Typography>Born: {person.birthyear}</Typography>
      {person.deathyear && <Typography>Died: {person.deathyear}</Typography>}
      <Typography>Professions: {person.primaryprofession}</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Known For:</Typography>
      <List>
        {person.knownfortitles?.split(",").map(t => (
          <ListItem key={t}>{t}</ListItem>
        ))}
      </List>
    </Container>
  );
}
