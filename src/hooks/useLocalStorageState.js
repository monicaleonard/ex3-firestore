import {useState, useEffect} from 'react';

/**
 * Un hook personnalisé pour créer un état (useState) et le persister (sauvegarder) dans localStorage
 * @param {*} valeurParDefaut La valeur par défaut de l'état que nous voulons persister
 * @param {string} etiquetteLS La clé localStorage que nous voulons utiliser pour stocker la valeur à persister
 * @returns {Array} Le tableau retourné par useState()
 */
export default function useLocalStorageState(valeurParDefaut, etiquetteLS) {
  const [etat, setEtat] = useState(
    () => {
      return JSON.parse(window.localStorage.getItem(etiquetteLS)) || valeurParDefaut;
    }
  );
  
  useEffect(() => window.localStorage.setItem(etiquetteLS, JSON.stringify(etat)), [etat, etiquetteLS]);
  
  return [etat, setEtat];
}