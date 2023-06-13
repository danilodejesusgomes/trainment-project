import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="button"
      onClick={() => {
        console.log('Botão clicado!');
        onClick();
      }}
      disabled={false}
    >
      {label}
    </button>
  );
};

export default Button;
