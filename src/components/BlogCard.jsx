import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, CardHeader } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import { BlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard({ user }) {
  const { content, date, email, title, imageUrl } = user;
  // const { flag, setFlag } = React.useContext(BlogContext);
  const navigate = useNavigate();
  // console.log(user);

  return (
    <Card sx={{ width: "300px", height: "500px" }}>
      <CardMedia component="img" height="194" image={imageUrl} alt={title} />
      <CardContent sx={{ backgroundColor: "#E7E6F5" }}>
        <CardHeader title={title} subheader={date} />
        <Typography
          sx={{
            overflow: "hidden",
            height: "40px",
          }}
          variant="body2"
          color="text.secondary"
        >
          {content}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#DEEFE7",
        }}
      >
        <AccountCircleIcon />
        <Box sx={{ fontFamily: "roboto" }} component="span">
          {email}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
        disableSpacing
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
          // onClick={() => setFlag(!flag)}
          // sx={{ color: flag ? "red" : "lightgray" }}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Button
          onClick={() => navigate("details", { state: user, replace: false })}
          sx={{ left: "70px" }}
          variant="outlined"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
