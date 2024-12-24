// app/theme/AppTheme.tsx
"use client";

import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const AppTheme = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#1976d2", // Adjust primary color
          },
          secondary: {
            main: "#9c27b0", // Adjust secondary color
          },
          background: {
            default: prefersDarkMode ? "#121212" : "#fafafa",
            paper: prefersDarkMode ? "#1d1d1d" : "#ffffff",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
