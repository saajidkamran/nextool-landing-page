import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Style/Home_Card.css";
function Home_Card() {
  return (
    <div className="home">
      <div className="home__headline">
        <Typography
          sx={{
            fontSize: "400%",
            fontFamily: " Georgia, 'Times New Roman', Times, serif",
            fontWeight: 700,
            letterSpacing: ".8rem",
            color: "white",
            textAlign: "center"
          }}
        >
          Welcome!
        </Typography>
      </div>
      <div className="home__content">
        <Box
          sx={{
            width: "100%",
            maxWidth: 1000,
            ml: "auto",
            mr: "auto"
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: " Georgia, 'Times New Roman', Times, serif",
              fontWeight: 400,
              color: "white",
              textAlign: "center"
            }}
          >
            this is our heet gun p[ro duct,kjdfjhgdjf sdf,sdf
            sd,fsdf,gdfgdfghsdfhagasgd,dfg . sdfhsdhsdhsdfhsdhdfh
            dfhsdfhsdfhs.fhsdfhsdfhsdhsdfh,asfgagsdfghsdfghdsgh . sdfhsdfhdfhd
            fh,,afhgadfhsdfhsdfdshsdfhsdfgh dfsdgkljdsbf SDGFKJh fkH KJh iuh
            SDHG IUARSHVkjdGHAKIJSJFKOadhgakj
            fkjadskhgaskdjhgkjanglk;ahgfdsa/...]
          </Typography>
        </Box>
      </div>

    </div>
  );
}

export default Home_Card;
