import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../Style/Navbar.css";

function Navbar() {
  const pages = ["Products", "Pricing", "Contact us"];

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Typography
          sx={{
            ml: 15,
            fontSize: "30px",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".4rem",
            color: "white"
          }}
        >
          NEXTOOL
        </Typography>
      </div>
      <div className="navbar__pages">
        {" "}
        {pages.map((page) => (
          <Button
            key={page}
            // onClick={handleCloseNavMenu}
            sx={{ m: 2, color: "white" ,display:{xs:'none',md:'inline'}}}
          >
            {page}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
