import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ShoppingCartProvider>
    </AuthProvider>
  );
};

export default App;
