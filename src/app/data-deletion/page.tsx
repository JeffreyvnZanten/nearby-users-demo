import Head from "next/head";

export default function DataDeletion() {
  return (
    <>
      <Head>
        <title>Data Deletion Instructions | YourAppName</title>
        <meta
          name="description"
          content="Instructions to delete your data from YourAppName"
        />
      </Head>
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Instructies voor Verwijdering van Gegevens</h1>
        <p>
          Als je wilt dat we al je persoonsgegevens verwijderen, volg dan de
          onderstaande stappen:
        </p>
        <ol>
          <li>
            <strong>Verstuur een verzoek:</strong> Stuur een e-mail naar{" "}
            <a href="j.van.zanten@gmail.com">privacy@jouwdomein.nl</a> met als
            onderwerp <em>Verzoek tot gegevensverwijdering</em>.
          </li>
          <li>
            <strong>Verifieer je identiteit:</strong> We sturen je mogelijk een
            bevestigingsmail om zeker te zijn dat jij de eigenaar bent van het
            account.
          </li>
          <li>
            <strong>Bevestiging:</strong> Na verificatie ontvang je binnen 5
            werkdagen een bevestiging dat je gegevens zijn verwijderd.
          </li>
          <li>
            <strong>Opschonen:</strong> Wij verwijderen alle persoonsgegevens
            uit onze database, inclusief naam, e-mailadres en profielen.
          </li>
        </ol>
        <p>
          Neem contact op bij vragen via{" "}
          <a href="mailto:j.van.zanten@gmail.com">j.van.zanten@gmail.com</a>.
        </p>
      </main>
    </>
  );
}
