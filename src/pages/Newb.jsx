import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import blok from "../assets/blok.png";
import { db } from "../helpers/firebaseConfig";

const Newb = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const partUpdate = location.state;
  const [image, setImage] = useState(partUpdate.imageUrl);
  const [title, setTitle] = useState(partUpdate.title);
  const [content, setContent] = useState(partUpdate.content);
  // console.log(partUpdate);
  const handleFormUpdateReset = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "users", partUpdate.id);
    try {
      await updateDoc(userDoc, {
        imageUrl: image,
        title: title,
        content: content,
        email: partUpdate.email,
        date: new Date().toLocaleString("tr-TR"),
      });
      console.log("güncellendi");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box backgroundColor="lightgray">
        <form onSubmit={handleFormUpdateReset}>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "fantasy",
              marginTop: "5px",
            }}
          >
            <img src={blok} alt="blok" />
          </Typography>
          <TextField
            type="text"
            autoFocus
            margin="normal"
            required
            name="imageUrl"
            label="Image URL"
            id="imageUrl"
            onChange={(e) => setImage(e.target.value)}
            color="success"
            value={image}
          />
          <TextField
            type="text"
            margin="normal"
            required
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            onChange={(e) => setTitle(e.target.value)}
            color="success"
            value={title}
          />
          <TextField
            type="text"
            placeholder="Content"
            multiline
            rows={4}
            margin="normal"
            required
            name="content"
            label="Content"
            id="content"
            onChange={(e) => setContent(e.target.value)}
            sx={{}}
            color="success"
            value={content}
          />
          <Button
            // textAlign="center"
            type="submit"
            variant="contained"
            sx={{
              width: 200,
              height: 50,
              mt: 3,
              mb: 2,
              backgroundColor: "darkslategrey",
              ml: 10,
            }}
          >
            Update Blog
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Newb;
