import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import "./CertificatePreview.css";

const CertificatePreview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const fetchingData = async () => {
        const response = await fetch(
          "https://6448accae7eb3378ca335cf3.mockapi.io/api/v1/certificate"
        );

        const data = await response.json();

        setData(data[0]);
      };
      fetchingData();
    } catch (error) {
      console.log("Error while fetching data", error);
    }

    return () => {
      setData(null);
    };
  }, []);

  const getYearFromDate = (dateStr) => {
    return new Date(dateStr).getFullYear();
  };

  if (!data) return <Typography>Loading....</Typography>;

  return (
    <Container className="mainContainer">
      <Paper elevation={3} className="paperItem paperItem1">
        <Container className="imageContainer">
          <img style={{ width: "100%" }} src="./logo_header.png" alt="header" />
        </Container>

        <Box className="titleContainer">
          <Typography
            variant="h2"
            textTransform="uppercase"
            letterSpacing={10}
            sx={{ marginBottom: 0 }}
            style={{ fontWeight: 600, fontFamily: "serif" }}
          >
            Certificate
          </Typography>
          <Typography
            variant="h5"
            letterSpacing={6}
            textTransform="uppercase"
            style={{
              fontWeight: 900,
              fontFamily: "serif",
              marginBottom: "5px",
            }}
          >
            Of appreciation
          </Typography>

          <Divider
            variant="middle"
            textAlign="center"
            style={{
              width: "35%",
              margin: "auto",
              borderColor: "black",
            }}
          />
        </Box>
        <Box className="middleContainer">
          <Typography
            variant="h5"
            textTransform="uppercase"
            style={{
              fontFamily: "fantasy",
              fontWeight: 500,
              letterSpacing: "5px",
            }}
          >
            Proudly presented to
          </Typography>
        </Box>
        <Box className="nameContainer">
          <Typography
            variant="h1"
            style={{
              fontStyle: "oblique",
              fontFamily: "serif",
              letterSpacing: "4px",
              fontWeight: 500,
            }}
          >
            {data.name}
          </Typography>
        </Box>

        <Box className="bodyContainer">
          <Typography variant="h6" gutterBottom>
            For the outstanding completion of (course) on the
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            NOLTE FZE LEARNING PLATFORM
          </Typography>
        </Box>

        {/* Signature  */}
        <Grid container sx={{ py: 3, marginTop: 5 }}>
          <Grid item xs={6} md={6}>
            <Typography
              variant="h6"
              style={{ fontWeight: 900, marginBottom: 0 }}
            >
              {data.manager}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Training Manager
            </Typography>
            <Divider
              style={{
                border: "1px solid #666060",
                width: "35%",
                margin: "auto",
                marginTop: 40,
              }}
            />
            <Typography variant="subtitle2" gutterBottom>
              Dubai, DATE {getYearFromDate(data.createdAt)}
            </Typography>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography
              variant="h6"
              style={{ fontWeight: 900, marginBottom: 0 }}
            >
              {data.md}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Managing Director
            </Typography>
            <Divider
              style={{
                border: "1px solid #666060",
                width: "35%",
                margin: "auto",
                marginTop: 40,
              }}
            />
            <Typography variant="subtitle2" gutterBottom>
              Dubai, DATE {getYearFromDate(data.createdAt)}
            </Typography>
          </Grid>
        </Grid>

        {/* Footer */}
        <Grid container className="footerGrid">
          <Grid className="stripe1" item xs={5} md={5}></Grid>
          <Grid item xs={2} md={2}>
            <img
              style={{ height: "80%", width: "80%" }}
              src="./logo_footer.png"
              alt="footer"
            />
          </Grid>
          <Grid className="stripe2" item xs={5} md={5}></Grid>
        </Grid>
      </Paper>
      <Paper className="paperItem paperItem2"></Paper>
    </Container>
  );
};

export default CertificatePreview;
