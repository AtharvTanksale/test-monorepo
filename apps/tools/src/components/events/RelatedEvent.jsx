import { useNavigate } from "@camonk/router";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@camonk/design-system/components";

function RelatedEvent({ event }) {
  const { id, title, imageSrc } = event;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/events/${id}`);
  }

  return (
    <Card
      sx={{ maxWidth: 345, cursor: "pointer", height: "100%" }}
      onClick={handleClick}
    >
      <CardMedia sx={{ height: 232 }} image={imageSrc} title={title} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RelatedEvent;
