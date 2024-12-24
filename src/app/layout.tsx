// app/layout.tsx
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SideMenu from '../components/SideMenu';
import AppNavbar from '../components/AppNavbar';
import Header from '../components/Header';
import AppTheme from '../shared-theme/AppTheme';
import './globals.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Material UI Order Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppTheme>
          <CssBaseline enableColorScheme />
          <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
            <Box
              component="main"
              sx={(theme) => ({
                flexGrow: 1,
                backgroundColor: theme.palette.background.default,
                overflow: 'auto',
              })}
            >
              <Stack
                spacing={2}
                sx={{
                  alignItems: 'center',
                  mx: 3,
                  pb: 5,
                  mt: { xs: 8, md: 0 },
                }}
              >
                <Header />
                {children}
              </Stack>
            </Box>
          </Box>
        </AppTheme>
      </body>
    </html>
  );
}
