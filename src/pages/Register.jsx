import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { createUser } from "../helpers/firebaseConfig";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const displayName = `${fullName}`;
    createUser(email, password, navigate, fullName);
  };

  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: "3rem", textAlign: "center" }}>
        <Avatar
          sx={{
            backgroundColor: "primary.main",
            m: "auto",
            width: 60,
            height: 60,
          }}
          sizes="100px"
        >
          <FaLock size="40" />
        </Avatar>
        <Typography variant="h4" align="center" mb={4} color="primary.light">
          Register
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField
            label="Full Name"
            name="fullName"
            id="fullName"
            type="type"
            variant="outlined"
            onChange={(e) => setFullName(e.target.value)}
            autoFocus
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            size="large"
          >
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
