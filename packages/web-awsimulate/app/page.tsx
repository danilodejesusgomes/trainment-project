'use client';
import React from 'react';
import Button from './components/atoms/Button';

export default function Page() {
  const handleClick = () => {
    // Lógica a ser executada quando o botão for clicado
    console.log('Botão clicado!');
  };

  return (
    <div>
      <div>
        <aside className="bg-zinc-300">
          <h1 className="text-3xl font-bold underline">
            Menu
          </h1>
          <Button label="Clique aqui" onClick={handleClick} />
        </aside>
        <main className="bg-blue-300">
          <h1 className="text-3xl font-bold underline">
            Main
          </h1>
        </main>
      </div>
      <footer className="bg-zinc-100">

      </footer>
    </div>
  );
}
