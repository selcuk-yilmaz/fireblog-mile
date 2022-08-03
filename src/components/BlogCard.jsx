import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { CardHeader } from "@mui/material";

export default function RecipeReviewCard({ user }) {
  const { content, date, email, id, title, imageUrl } = user;
  return (
    <Card sx={{ maxWidth: 345, height: "450px" }}>
      <CardMedia component="img" height="194" image={imageUrl} alt={title} />
      <CardContent>
        <CardHeader title={title} subheader={date} />
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
