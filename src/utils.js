/**
 * Gibt die CSS-Klasse für die Barometer-Farbe basierend auf dem Ergebniswert zurück
 * @param {number} ergebnis - Ergebniswert zwischen 0 und 100
 * @returns {string} CSS-Klasse für die Farbe
 */
export const getBarometerColorClass = (ergebnis) => {
    if (ergebnis < 30) return "barometer-fill-red";
    if (ergebnis < 70) return "barometer-fill-yellow";
    return "barometer-fill-green";
  };
  
  /**
   * Gibt einen Ergebnistext basierend auf dem Ergebniswert zurück
   * @param {number} ergebnis - Ergebniswert zwischen 0 und 100
   * @returns {string} Formatierter Text für die Ergebnisanzeige
   */
  export const getErgebnisText = (ergebnis) => {
    if (ergebnis < 30) {
      return "Du brauchst das wahrscheinlich nicht. Spare dein Geld für etwas Wichtigeres.";
    } else if (ergebnis < 70) {
      return "Es könnte nützlich sein, aber ist nicht unbedingt notwendig. Überlege dir, ob es dir den Preis wert ist.";
    } else {
      return "Diese Anschaffung scheint für dich sinnvoll zu sein!";
    }
  };
  
  /**
   * Berechnet den normalisierten Ergebniswert basierend auf Antworten und gewähltem Thema
   * @param {Object} antworten - Objekt mit den Antworten (Index -> Punktwert)
   * @param {Array} themenDaten - Array mit den Fragendaten für das aktuelle Thema
   * @returns {number} Normalisierter Wert zwischen 0 und 100
   */
  export const berechneErgebnis = (antworten, themenDaten) => {
    if (!antworten || Object.keys(antworten).length === 0 || !themenDaten) {
      return 0;
    }
  
    const summe = Object.values(antworten).reduce((acc, val) => acc + val, 0);
    
    const maxPunkteProFrage = themenDaten.map(frage => {
      const maxWert = Math.max(...frage.scale.map(option => option.wert));
      return maxWert > 0 ? maxWert * frage.wichtung : 0;
    });
    
    const maxPunkte = maxPunkteProFrage.reduce((acc, val) => acc + val, 0);
    
    const minPunkteProFrage = themenDaten.map(frage => {
      const minWert = Math.min(...frage.scale.map(option => option.wert));
      return minWert < 0 ? minWert * frage.wichtung : 0;
    });
    
    const minPunkte = minPunkteProFrage.reduce((acc, val) => acc + val, 0);
    
    // Normalisiertes Ergebnis zwischen 0 und 100
    const normalisiertesSumme = ((summe - minPunkte) / (maxPunkte - minPunkte)) * 100;
    return Math.max(0, Math.min(100, normalisiertesSumme));
  };