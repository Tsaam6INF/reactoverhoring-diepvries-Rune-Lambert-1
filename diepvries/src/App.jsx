function LadeRow({ lade }) {
  return (
    <tr>
      <th colSpan="4">Lade {lade}</th>
    </tr>
  );
}

function VoedingRow({ voeding }) {
  return (
    <tr>
      <td>{voeding.voeding}</td>
      <td>{voeding.aantal}</td>
      <td>{voeding.gewicht}</td>
      <td>{voeding.tijdIngevroren}</td>
    </tr>
  );
}

function DiepvriesTable({ diepvries }) {
  const rows = [];
  let lastLade = null;

  diepvries.forEach((voeding) => {
    if (voeding.lade !== lastLade) {
      rows.push(<LadeRow lade={voeding.lade} key={`lade-${voeding.lade}`} />);
    }
    rows.push(
      <VoedingRow
        voeding={voeding}
        key={`${voeding.voeding}-${voeding.lade}`}
      />
    );
    lastLade = voeding.lade;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Voeding</th>
          <th>Aantal</th>
          <th>Gewicht</th>
          <th>Tijd Ingevroren</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default function App() {
  const diepvries = [
    {
      lade: 1,
      voeding: "worst",
      aantal: "4",
      gewicht: "200g",
      tijdIngevroren: "4 dagen",
    },
    {
      lade: 1,
      voeding: "broccoli",
      aantal: "-",
      gewicht: "500g",
      tijdIngevroren: "7 dagen",
    },
    {
      lade: 1,
      voeding: "biefstuk",
      aantal: "2",
      gewicht: "400g",
      tijdIngevroren: "1 dagen",
    },
    {
      lade: 2,
      voeding: "hamburgers",
      aantal: "6",
      gewicht: "-",
      tijdIngevroren: "10 dagen",
    },
    {
      lade: 3,
      voeding: "frieten",
      aantal: "1",
      gewicht: "1Kg",
      tijdIngevroren: "13 dagen",
    },
  ];

  return (
    <div>
      <h1>Diepvries Overzicht</h1>
      <DiepvriesTable diepvries={diepvries} />
    </div>
  );
}
