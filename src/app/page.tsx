// app/page.tsx
import React from 'react';
import MainGrid from '../components/MainGrid';

export default function DashboardPage() {
  return (
    <div>
      <MainGrid
            Content={
              <>
                {/* Content Area */}
                <div>Welcome to the Dashboard!</div>
              </>
            }
      />
    </div>
  );
}
