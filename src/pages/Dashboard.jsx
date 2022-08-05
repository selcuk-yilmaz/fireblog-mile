import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useData } from "../helpers/crud";
import loadingSpinner from "../assets/loading.gif";
import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { loading } = useContext(AuthContext);
  const { users } = useData();
  const navigate = useNavigate();
  // console.log(users);

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
          fontSize: "3rem",
        }}
      >
        ────
        <span style={{ fontSize: "2rem", color: "#046582" }}>DASHBOARD</span>
        ────
      </Typography>

      {loading ? (
        <Container>
          <Grid container justifyContent="center" spacing={4} sx={{ mt: 1 }}>
            <img src={loadingSpinner} alt="" />
          </Grid>
        </Container>
      ) : (
        <Container>
          <Grid container justifyContent="center" spacing={4} sx={{ mt: 1 }}>
            {users?.map((user) => {
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
            })}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
