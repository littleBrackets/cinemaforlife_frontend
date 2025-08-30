import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PersonCard({ person }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/people/${person.nconst}`);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {person.primaryname}
          </Typography>
          {person.primaryprofession && (
            <Typography variant="body2" color="text.secondary">
              {person.primaryprofession}
            </Typography>
          )}
          {person.birthyear && (
            <Typography variant="caption" color="text.secondary">
              Born: {person.birthyear}
            </Typography>
          )}
          {person.deathyear && (
            <Typography variant="caption" color="text.secondary" display="block">
              Died: {person.deathyear}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
