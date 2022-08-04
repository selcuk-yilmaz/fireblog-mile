import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { IconButton } from "@mui/material";

export default function ProductCard() {
  const product = {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
    title: "selçuk",
    price: "100$",
    category: "fs",
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price + "$"}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
      </CardActions>
    </Card>
  );
}
