import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | YourAppName</title>
        <meta name="description" content="Privacy Policy of YourAppName" />
      </Head>
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Privacybeleid</h1>
        <p>
          <strong>Laatste update:</strong> 1 juli 2025
        </p>
        <p>
          [Bedrijfsnaam] (“wij”, “ons” of “onze”) respecteert je privacy en zet
          zich in om je persoonsgegevens te beschermen. In dit privacybeleid
          lees je:
        </p>
        <ol>
          <li>
            <strong>Welke gegevens we verzamelen</strong>
            <ul>
              <li>
                <strong>Persoonlijke gegevens</strong>: naam, e-mailadres (via
                Facebook Login), profielfoto
              </li>
              <li>
                <strong>Technische gegevens</strong>: IP-adres, browsertype,
                apparaatgegevens (analytics)
              </li>
            </ul>
          </li>
          <li>
            <strong>Waarom we deze gegevens nodig hebben</strong>
            <ul>
              <li>
                <strong>Authenticatie</strong>: inloggen met Facebook account
              </li>
              <li>
                <strong>Communicatie</strong>: reageren op vragen en meldingen
              </li>
              <li>
                <strong>Verbetering van de dienst</strong>: analytics en
                foutopsporing
              </li>
            </ul>
          </li>
          <li>
            <strong>Hoe we je gegevens bewaren</strong>
            <p>
              We slaan je e-mail en naam op in onze database. Gegevens blijven
              bewaard zolang je account actief is, of tot je ons vraagt ze te
              verwijderen.
            </p>
          </li>
          <li>
            <strong>Delen met derden</strong>
            <p>
              We delen <em>geen</em> persoonsgegevens met commerciële partners.
              Alleen met externe services (bv. een e-mailprovider) om onze
              dienst te laten werken.
            </p>
          </li>
          <li>
            <strong>Rechten van gebruikers</strong>
            <p>
              Recht op inzage, correctie en verwijdering van je gegevens. Stuur
              je verzoek naar{" "}
              <a href="mailto:j.van.zanten@gmail.com">privacy@jouwdomein.nl</a>.
            </p>
          </li>
          <li>
            <strong>Cookies & tracking</strong>
            <p>
              We gebruiken cookies voor sessiebeheer en Google Analytics. Je
              kunt cookies uitzetten in je browserinstellingen.
            </p>
          </li>
          <li>
            <strong>Contactgegevens</strong>
            <address>
              E-mail:{"j.van.zanten@gmail.com"}
              <a href="mailto:j.van.zanten@gmail.com">privacy@jouwdomein.nl</a>
              <br />
            </address>
          </li>
        </ol>
      </main>
    </>
  );
}
