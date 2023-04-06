// pages/NotFound.js
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from "../services/Api";

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // Chiamata API (sostituisci con la tua chiamata API reale)
    const checkUrl = async () => {
      try {
        // Aggiungi il codice per inviare l'URL corrente al tuo servizio API qui
        // ad esempio: const response = await api.GetCurrentUrl(window.location.href);
        const response = await Api.CheckPath(window.location.href); // Rimuovi questa riga e usa la tua chiamata API
        setIsLoading(false);
        if (response && response.NewUrl) {
          // Reindirizza l'utente alla nuova URL
          history.push(response.NewUrl);
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    checkUrl();
  }, [history]);
  if(isLoading){
    return null;
  }
  return (
    <div>
      <h1>Pagina non trovata (404)</h1>
      <p>Siamo spiacenti, la pagina che stai cercando non esiste.</p>
    </div>
  );
};

// Funzione fake per simulare una chiamata API (rimuovi questa funzione e usa la tua chiamata API)
async function fakeApiCall() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ newUrl: '/about' });
    }, 2000)
  );
}

export default NotFound;