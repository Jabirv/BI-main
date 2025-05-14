export async function getData(req, res) {
  try {
    const response_nb_train_prevu = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=nb_train_prevu&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_nb_train_prevu = await response_nb_train_prevu.json();
    const nb_train_prevu = data_nb_train_prevu.results[0].nb_train_prevu;

    const response_nb_annulation = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=nb_annulation&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_nb_annulation = await response_nb_annulation.json();
    const nb_annulation = data_nb_annulation.results[0].nb_annulation;

    const response_nb_train_depart_retard = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=nb_train_depart_retard&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_nb_train_depart_retard = await response_nb_train_depart_retard.json();
    const nb_train_depart_retard = data_nb_train_depart_retard.results[0].nb_train_depart_retard;

    const response_retard_moyen_depart = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=retard_moyen_depart&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_retard_moyen_depart = await response_retard_moyen_depart.json();
    const retard_moyen_depart = data_retard_moyen_depart.results[0].retard_moyen_depart;

    const response_retard_moyen_tous_trains_depart = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=retard_moyen_tous_trains_depart&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_retard_moyen_tous_trains_depart = await response_retard_moyen_tous_trains_depart.json();
    const retard_moyen_tous_trains_depart = data_retard_moyen_tous_trains_depart.results[0].retard_moyen_tous_trains_depart;

    const response_nb_train_retard_arrivee = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=nb_train_retard_arrivee&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_nb_train_retard_arrivee = await response_nb_train_retard_arrivee.json();
    const nb_train_retard_arrivee = data_nb_train_retard_arrivee.results[0].nb_train_retard_arrivee;

    const response_retard_moyen_arrivee = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=retard_moyen_arrivee&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_retard_moyen_arrivee = await response_retard_moyen_arrivee.json();
    const retard_moyen_arrivee = data_retard_moyen_arrivee.results[0].retard_moyen_arrivee;

    const response_retard_moyen_tous_trains_arrivee = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=retard_moyen_tous_trains_arrivee&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_retard_moyen_tous_trains_arrivee = await response_retard_moyen_tous_trains_arrivee.json();
    const retard_moyen_tous_trains_arrivee = data_retard_moyen_tous_trains_arrivee.results[0].retard_moyen_tous_trains_arrivee;

    const response_nb_train_retard_sup_15 = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=nb_train_retard_sup_15&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_nb_train_retard_sup_15 = await response_nb_train_retard_sup_15.json();
    const nb_train_retard_sup_15 = data_nb_train_retard_sup_15.results[0].nb_train_retard_sup_15;

    const response_nb_train_retard_sup_30 = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=nb_train_retard_sup_30&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_nb_train_retard_sup_30 = await response_nb_train_retard_sup_30.json();
    const nb_train_retard_sup_30 = data_nb_train_retard_sup_30.results[0].nb_train_retard_sup_30;

    const response_nb_train_retard_sup_60 = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=nb_train_retard_sup_60&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_nb_train_retard_sup_60 = await response_nb_train_retard_sup_60.json();
    const nb_train_retard_sup_60 = data_nb_train_retard_sup_60.results[0].nb_train_retard_sup_60;

    const response_prct_cause_externe = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=prct_cause_externe&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_prct_cause_externe = await response_prct_cause_externe.json();
    const prct_cause_externe = data_prct_cause_externe.results[0].prct_cause_externe;

    const response_prct_cause_infra = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=prct_cause_infra&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_prct_cause_infra = await response_prct_cause_infra.json();
    const prct_cause_infra = data_prct_cause_infra.results[0].prct_cause_infra;

    const response_prct_cause_gestion_trafic = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=prct_cause_gestion_trafic&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_prct_cause_gestion_trafic = await response_prct_cause_gestion_trafic.json();
    const prct_cause_gestion_trafic = data_prct_cause_gestion_trafic.results[0].prct_cause_gestion_trafic;

    const response_prct_cause_materiel_roulant = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=prct_cause_materiel_roulant&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_prct_cause_materiel_roulant = await response_prct_cause_materiel_roulant.json();
    const prct_cause_materiel_roulant = data_prct_cause_materiel_roulant.results[0].prct_cause_materiel_roulant;

    const response_prct_cause_gestion_gare = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=prct_cause_gestion_gare&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_prct_cause_gestion_gare = await response_prct_cause_gestion_gare.json();
    const prct_cause_gestion_gare = data_prct_cause_gestion_gare.results[0].prct_cause_gestion_gare;

    const response_prct_cause_prise_en_charge_voyageurs = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=prct_cause_prise_en_charge_voyageurs&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22"
    );
    const data_prct_cause_prise_en_charge_voyageurs = await response_prct_cause_prise_en_charge_voyageurs.json();
    const prct_cause_prise_en_charge_voyageurs = data_prct_cause_prise_en_charge_voyageurs.results[0].prct_cause_prise_en_charge_voyageurs;

    const response_result_planned_train = await fetch(
      "https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/regularite-mensuelle-tgv-aqst/records?select=date,nb_train_prevu,nb_train_depart_retard,nb_annulation&where=gare_depart%20LIKE%20%22MARSEILLE%20ST%20CHARLES%22%20AND%20gare_arrivee%20LIKE%20%22MARNE%20LA%20VALLEE%22%20AND%20date%20%3E%3D%20%222024-12-01%22%20AND%20date%20%3C%20%222025-01-01%22&order_by=date%20DESC"
    );
    const data_result_planned_train = await response_result_planned_train.json();
    const result_planned_train = data_result_planned_train.results[0];

    res.json({
      nb_train_prevu,
      nb_annulation,
      nb_train_depart_retard,
      retard_moyen_depart,
      retard_moyen_tous_trains_depart,
      nb_train_retard_arrivee,
      retard_moyen_arrivee,
      retard_moyen_tous_trains_arrivee,
      nb_train_retard_sup_15,
      nb_train_retard_sup_30,
      nb_train_retard_sup_60,
      prct_cause_externe,
      prct_cause_infra,
      prct_cause_gestion_trafic,
      prct_cause_materiel_roulant,
      prct_cause_gestion_gare,
      prct_cause_prise_en_charge_voyageurs,
      result_planned_train,
    });
  } catch (error) {
    console.error("Erreur PostgreSQL :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
