'use client';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SidebarNavigation from './components/organisms/SidebarNavigation';
import Home from './components/pages/Home';
import ExamsAvailble from './components/pages/ExamsAvailble';

export default function App() {
  return (
    <html lang="en">
      <body className="bg-zinc-100 text-blue-500">
        <SidebarNavigation />
        <main className="section">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/exams/" element={<ExamsAvailble />} />
          </Routes>
        </main>
      </body>
    </html>
  );
}
