export async function getDataGare(req, res) {
  try {
    const response = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=gare_depart&group_by=gare_depart&limit=100"
    );
    const data_gare = await response.json();
    const list_gare = data_gare.results.map((item) => item.gare_depart);

    res.json({
      list_gare,
    });
  } catch (error) {
    console.error("Erreur PostgreSQL :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
