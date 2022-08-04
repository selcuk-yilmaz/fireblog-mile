import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

// import { BlogContext } from "../contexts/BlogContext";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { id } = useParams();
  // const { useData } = React.useContext(BlogContext);
  const location = useLocation();
  const part = location.state;
  console.log(part);
  // console.log(id);
  return (
    <Container>
      <Grid container justifyContent="center" spacing={4} sx={{ mt: 3 }}>
        <Card sx={{ m: "auto", textAlign: "center", width: 600 }}>
          <CardMedia
            component="img"
            // height="300"
            image={part.imageUrl}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {part.content}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              <AccountCircleIcon /> {part.email}
              {part.date}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ReplyAllIcon onClick={() => navigate(-1)} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ChatBubbleOutlineIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}
