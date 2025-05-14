import pool from "../db.config.js";

export async function getHello(req, res) {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Connexion réussie à PostgreSQL !",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Erreur PostgreSQL :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
