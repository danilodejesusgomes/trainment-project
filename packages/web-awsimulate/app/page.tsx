'use client';
import React from 'react';
import SidebarNavigation from './components/organisms/SidebarNavigation';

export default function Page() {
  const handleClick = () => {
    // Lógica a ser executada quando o botão for clicado
    console.log('Botão clicado!');
  };

  return (
    <div className="flex">
      <SidebarNavigation />
      <main className="p-7">
        <h1 className='text-2xl'> Home Page </h1>
      </main>
    </div>
  );
}
