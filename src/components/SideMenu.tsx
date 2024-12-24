// app/components/SideMenu.tsx
"use client";

import React from 'react';
import { Box, Drawer, List, ListItem,ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, path: '/' },
  { text: 'Dashboard', icon: <DashboardRoundedIcon />, path: '/dashboard' },
  { text: 'Settings', icon: <SettingsRoundedIcon />, path: '/settings' },
];

const SideMenu = () => {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <List>
          {menuItems.map(({ text, icon, path }) => (
            <ListItemButton
              key={text}
              component={Link}
              href={path}
              selected={pathname === path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: (theme) => theme.palette.action.selected,
                },
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
