"use client";

import React from "react";
import { Box, Container, Grid } from "@mui/material";

interface MainGridProps {
  Sidebar: React.ReactNode;
  Content: React.ReactNode;
}

const MainGrid: React.FC<MainGridProps> = ({ Sidebar, Content }) => {
  // Extract styles beforehand
  const sidebarStyles = {
    width: { xs: "240px", sm: "280px" },
    flexShrink: 0,
    backgroundColor: "background.paper",
    borderRight: 1,
    borderColor: "divider",
    overflowY: "auto",
  };

  const contentStyles = {
    flexGrow: 1,
    p: 3,
    overflowY: "auto",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {/* Sidebar */}
      <Box component="nav" sx={sidebarStyles}>
        {Sidebar}
      </Box>

      {/* Content Area */}
      <Box component="main" sx={contentStyles}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {Content}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MainGrid;
