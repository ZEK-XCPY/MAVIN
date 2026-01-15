import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  TextField,
  Button,
  Alert,
  Collapse,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const theme = useTheme();

  //navigate to login page
  const navigate = useNavigate();
  //states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const isNotMobile = useMediaQuery("(min-width:1000px)");

  //register ctrl
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/register`,
      { username, email, password }
    );

    toast.success("Registration successful!");
    navigate("/login");

  } catch (err) {
    const message =
      err.response?.data?.error || "Something went wrong";

    toast.error(message);
  }
};


  return (
    <Container>
      <Box
        width={isNotMobile ? "40%" : "80%"}
        p={"2rem"}
        mx="auto"
        my={2}
        borderRadius={5}
        sx={{ boxShadow: 5 }}
        backgroundColor={theme.palette.background.alt}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h5">Sign Up</Typography>
          <TextField
            label="Username"
            required
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            label="email"
            type="email"
            required
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="password"
            type="password"
            required
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ bgcolor: "black", mt: 2, color: "white" }}
          >
            Sign Up
          </Button>
          <Typography mt={2}>
            Already have an account ?
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#1976d2", // blue.main equivalent
              }}
            >
              {" "}
              Please Login
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
