import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Works from '../Works';
import Privateworks from '../Privateworks';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Define o idioma do navegador
    let lng = navigator.language;
    i18n.changeLanguage(lng);

    // Verificar se a senha está armazenada no localStorage
    const savedPassword = localStorage.getItem('password');
    if (savedPassword) {
      // Tentar autenticar automaticamente com a senha salva
      authenticateWithPassword(savedPassword);
    }
  }, [i18n]);

  const authenticateWithPassword = async (savedPassword) => {
    try {
      const response = await axios.post('https://authentication.pgv.services', { password: savedPassword }, { withCredentials: true });

      if (response.status === 200) {
        // Se a autenticação for bem-sucedida, define o estado como autenticado
        setIsAuthenticated(true);
        setError('');
      }
    } catch (err) {
      // Caso a autenticação falhe, remover a senha salva e pedir login novamente
      localStorage.removeItem('password');
      setIsAuthenticated(false);
      setError(t('invalidPassword'));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://authentication.pgv.services', { password }, { withCredentials: true });

      if (response.status === 200) {
        // Sucesso na autenticação
        localStorage.setItem('password', password); // Salva a senha no localStorage
        setIsAuthenticated(true);
        setError('');
      }
    } catch (err) {
      // Falha na autenticação
      setError(t('invalidPassword'));
    }
  };

  // Renderiza a página de login se não estiver autenticado
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen w-screen text-left">
        <div>
          <Works /> 
        </div>
        <div className="min-h-screen w-screen text-left">
          <div className="text-center font-bold text-lg">{t('PrivatePortfolio')}</div>
          <form onSubmit={handleLogin}>
            <div className="m-auto mt-20 w-72">
              <div className="password_2 block pt- relative">
                <label>Password</label>
                <div className="eye_div">
                  <input
                    className="input block border border-gray-300 focus:border-pitch-black py-3 px-3 w-full focus:outline-none"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              {error && <p className="text-red mt-2">{error}</p>}

              <button
                className="mt-2 p-3 bg-black hover:bg-opacity-80 text-white w-72 text-sm"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }

  // Se autenticado, renderiza o conteúdo protegido
  return (
    <div>
      <Works /> 
      
      <Privateworks />
    </div>
  );
}

export default App;
