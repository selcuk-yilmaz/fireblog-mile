import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useData } from "../helpers/crud";
import spinner from "../assets/spinner.gif";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { users } = useData();
  const navigate = useNavigate();
  // console.log(users);
  useEffect(() => {
    setLoading(false);
  }, []);
  // console.log(loading);

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          cursor: "pointer",
          fontFamily: "Girassol",
          textAlign: "center",
          color: "white",
          fontSize: "5rem",
          lineHeight: "center",
        }}
      >
        ——
        <span style={{ fontSize: "2rem", color: "#046582" }}>DASHBOARD</span>
        ——
      </Typography>

      <Container>
        <Grid container justifyContent="center" spacing={4} sx={{ mt: 1 }}>
          {loading ? (
            <h1>{spinner}</h1>
          ) : (
            users?.map((user) => {
              const { id } = user;
              return (
                <Grid
                  onClick={() =>
                    navigate("details", { state: user, replace: false })
                  }
                  style={{ cursor: "pointer" }}
                  key={id}
                  item
                >
                  <BlogCard user={user} />
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
