import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useData } from "../helpers/crud";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { users } = useData();
  console.log(users);
  useEffect(() => {
    setLoading(false);
  }, [users]);
  console.log(loading);
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
          fontSize: "4rem",
          border: "3px",
        }}
      >
        ────
        <span style={{ fontSize: "2rem", color: "#046582" }}>DASHBOARD</span>
        ────
      </Typography>

      <Container>
        <Grid container justifyContent="center" spacing={4} sx={{ mt: 1 }}>
          {loading ? (
            <h1>loading...</h1>
          ) : (
            users?.map((user, index) => {
              return (
                <Grid item>
                  <BlogCard key={index} user={user} />
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
