import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import { getPeople } from "../api/people";
import DataTable from "../components/DataTable";
import { useNavigate } from "react-router-dom";

export default function PeoplePage() {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPeople().then(setPeople).catch(console.error);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        People
      </Typography>
      <DataTable
        metadata={[
          { name: "Name", key: "primaryname" },
          { name: "Credits", key: "primaryprofession" },
          { name: "Born", key: "birthyear" },
          { name: "Died", key: "deathyear" },
        ]}
        data={people}
        maxHeight={400}
        handleRowClick={(person) => navigate(`/people/${person.nconst}`)}
      />
    </Container>
  );
}
