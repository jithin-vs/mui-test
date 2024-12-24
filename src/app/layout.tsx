// app/layout.tsx
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SideMenu from '../components/SideMenu';
import AppNavbar from '../components/AppNavbar';
import Header from '../components/Header';
import AppTheme from '../shared-theme/AppTheme';
import { CssVarsProvider } from '@mui/joy/styles';
import './globals.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Material UI Order Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <CssVarsProvider>
        <AppTheme>
          <CssBaseline enableColorScheme />
          <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
            <main className="flex-grow overflow-auto bg-background">
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
              </main>
          </Box>
        </AppTheme>
      </CssVarsProvider>
      </body>
      </html>
  );
}
