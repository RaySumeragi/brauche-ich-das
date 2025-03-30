// Fragendaten für die verschiedenen Themen
export const themenDatenConfig = {
    "Smartwatch": [
      {
        id: 1,
        text: "Wie oft schaust du auf die Uhr am Tag?",
        erklaerung: "Häufiges Zeitchecken könnte von einer Smartwatch profitieren",
        scale: [
          { text: "Selten (1-5 mal)", wert: -10 },
          { text: "Manchmal (6-15 mal)", wert: 5 },
          { text: "Häufig (15+ mal)", wert: 15 }
        ],
        wichtung: 1.2
      },
      {
        id: 2,
        text: "Wie wichtig ist es für dich, deine Fitness zu tracken?",
        erklaerung: "Smartwatches bieten umfassende Fitnesstracking-Funktionen",
        scale: [
          { text: "Unwichtig", wert: -15 },
          { text: "Ein bisschen wichtig", wert: 5 },
          { text: "Sehr wichtig", wert: 20 }
        ],
        wichtung: 1.5
      },
      {
        id: 3,
        text: "Hast du schon ein Smartphone?",
        erklaerung: "Eine Smartwatch benötigt in der Regel ein Smartphone zum Synchronisieren",
        scale: [
          { text: "Nein", wert: -30 },
          { text: "Ja, aber alt", wert: 5 },
          { text: "Ja, ein aktuelles Modell", wert: 15 }
        ],
        wichtung: 2.0
      },
      {
        id: 4,
        text: "Wie ist dein Budget für Technik-Gadgets?",
        erklaerung: "Qualitäts-Smartwatches kosten zwischen 200€ und 800€",
        scale: [
          { text: "Sehr begrenzt", wert: -20 },
          { text: "Mittel", wert: 0 },
          { text: "Großzügig", wert: 10 }
        ],
        wichtung: 1.0
      }
    ],
    "Auto": [
      {
        id: 1,
        text: "Wie weit ist dein täglicher Arbeitsweg?",
        erklaerung: "Lange Strecken können ein Auto notwendig machen",
        scale: [
          { text: "Unter 3 km", wert: -20 },
          { text: "3-10 km", wert: 5 },
          { text: "Über 10 km", wert: 20 }
        ],
        wichtung: 1.8
      },
      {
        id: 2,
        text: "Gibt es gute öffentliche Verkehrsanbindungen in deiner Gegend?",
        erklaerung: "Gute ÖPNV-Anbindungen können Alternativen zum Auto bieten",
        scale: [
          { text: "Sehr gut", wert: -25 },
          { text: "Ausreichend", wert: -5 },
          { text: "Schlecht", wert: 20 }
        ],
        wichtung: 1.5
      },
      {
        id: 3,
        text: "Hast du regelmäßig größere Einkäufe oder Transporte zu erledigen?",
        erklaerung: "Regelmäßige Transporte können ein Auto notwendig machen",
        scale: [
          { text: "Selten", wert: -10 },
          { text: "Gelegentlich", wert: 5 },
          { text: "Häufig", wert: 15 }
        ],
        wichtung: 1.2
      },
      {
        id: 4,
        text: "Wie ist dein Budget für Mobilität (inkl. Unterhalt, Versicherung, etc.)?",
        erklaerung: "Ein Auto kostet durchschnittlich 300-600€ monatlich (inkl. aller Kosten)",
        scale: [
          { text: "Unter 100€/Monat", wert: -25 },
          { text: "100-300€/Monat", wert: -5 },
          { text: "Über 300€/Monat", wert: 15 }
        ],
        wichtung: 1.3
      }
    ],
    "Schuhe": [
      {
        id: 1,
        text: "Wieviele Paar Schuhe gleicher Art besitzt du bereits?",
        erklaerung: "Eine große Anzahl gleicher Schuhe kann auf eine überflüssige Anschaffung hindeuten",
        scale: [
          { text: "Keins oder eins", wert: 20 },
          { text: "2-5 Paar", wert: 0 },
          { text: "Mehr als 5 Paar", wert: -20 }
        ],
        wichtung: 1.4
      },
      {
        id: 2,
        text: "Für welche Aktivität benötigst du die Schuhe hauptsächlich?",
        erklaerung: "Spezialisierte Aktivitäten können spezielle Schuhe erfordern",
        scale: [
          { text: "Alltag/Büro", wert: -5 },
          { text: "Spezielle Aktivität (Sport, Wandern)", wert: 15 },
          { text: "Besondere Anlässe", wert: 5 }
        ],
        wichtung: 1.2
      },
      {
        id: 3,
        text: "Sind deine aktuellen Schuhe dieser Art beschädigt oder abgenutzt?",
        erklaerung: "Beschädigte Schuhe zu ersetzen ist oft sinnvoller als neue zu kaufen",
        scale: [
          { text: "Nein, guter Zustand", wert: -15 },
          { text: "Leichte Abnutzung", wert: 5 },
          { text: "Stark abgenutzt/beschädigt", wert: 20 }
        ],
        wichtung: 1.6
      },
      {
        id: 4,
        text: "Wie ist dein Budget für diese Art von Schuhen?",
        erklaerung: "Qualitätsschuhe können teuer sein, halten aber oft länger",
        scale: [
          { text: "Sehr begrenzt", wert: -10 },
          { text: "Mittel", wert: 5 },
          { text: "Großzügig", wert: 10 }
        ],
        wichtung: 1.0
      }
    ]
  };