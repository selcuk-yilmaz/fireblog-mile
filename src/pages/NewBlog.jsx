import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import blok from "../assets/blok.png";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

const theme = createTheme();
const inputValues = {
  imageUrl: "",
  title: "",
  content: "",
};

export default function NewBlog() {
  const navigate = useNavigate();
  const { createBlog, info, setInfo } = useContext(BlogContext);
  const { auth } = useContext(AuthContext);
  const [inputVal, setInputVal] = React.useState(inputValues);
  const email = "email";
  const date = "date";
  console.log(info);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
      [email]: auth?.email,
      [date]: new Date().toLocaleString("tr-TR"),
    });
    setInputVal({ ...inputVal, [name]: value });
  };

  // console.log(auth.email)
  const handleFormReset = (e) => {
    e.preventDefault();
    createBlog(info);
    setInputVal(inputValues);
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          // backgroundColor: (t) =>
          //   t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "89vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "bisque",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <Box
                  component="form"
                  /* onSubmit={(e)=>handleFormSubmit(e)} */ noValidate
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 1,
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                      // color: "darkslategray",

                      fontFamily: "fantasy",
                      marginTop: "5px",
                    }}
                  >
                    <img src={blok} alt="blok" />
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="imageUrl"
                    label="Image URL"
                    type="url"
                    id="imageUrl"
                    onChange={handleChange}
                    color="success"
                    value={inputVal.imageUrl}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoComplete="title"
                    autoFocus
                    onChange={handleChange}
                    color="success"
                    value={inputVal.title}
                  />

                  <TextField
                    placeholder="Content"
                    multiline
                    rows={4}
                    margin="normal"
                    required
                    fullWidth
                    name="content"
                    label="Content"
                    id="content"
                    onChange={handleChange}
                    sx={{}}
                    color="success"
                    value={inputVal.content}
                  />

                  <IconButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "darkslategrey" }}
                    onClick={(e) => handleFormReset(e)}
                  >
                    Add Blog
                  </IconButton>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
