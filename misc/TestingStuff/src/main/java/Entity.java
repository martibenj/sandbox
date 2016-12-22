/**
 * @author martinelli-b
 */

//@SqlResultSetMapping(name = "ResulSet.findByIdWithPrice",
//                     // @formatter:off
//                     entities = @EntityResult(entityClass = ReponseLFT.class,
//                      fields = {
//                                @FieldResult(name = "id", column = "id"),
//                                @FieldResult(name = "lftAssociee", column = "lft_associee"),
//                                @FieldResult(name = "nno", column = "nno_id"),
//                                @FieldResult(name = "iDGDerive", column = "idg_derive_id"),
//                                @FieldResult(name = "article", column = "article_id"),
//                                @FieldResult(name = "magasin", column = "magasin_id"),
//                                @FieldResult(name = "origine", column = "origine_id"),
//                                @FieldResult(name = "quantite", column = "quantite"),
//                                @FieldResult(name = "ov", column = "ov"),
//                                @FieldResult(name = "commentaireInterne", column = "commentaire_interne"),
//                                @FieldResult(name = "commentaireExterne", column = "commentaire_externe"),
//                                @FieldResult(name = "ajoutLigne", column = "ajout_ligne"),
//                                @FieldResult(name = "isTraitee", column = "is_traitee"),
//                                @FieldResult(name = "isExpediee", column = "is_expediee"),
//                                @FieldResult(name = "atcEnvoye", column = "atc_envoye"),
//                                @FieldResult(name = "lov", column = "lov"),
//                                @FieldResult(name = "numBE", column = "num_be"),
//                                @FieldResult(name = "numCaisse", column = "num_caisse"),
//                                @FieldResult(name = "numLigneBE", column = "num_ligne_be"),
//                                @FieldResult(name = "numColisage", column = "num_colisage"),
//                                @FieldResult(name = "numTransporteur", column = "num_transporteur"),
//                                @FieldResult(name = "dateBE", column = "date_be"),
//                                @FieldResult(name = "dateLivraison", column = "date_livraison"),
//                                @FieldResult(name = "commentaireExpedition", column = "commentaire_expedition"),
//                                @FieldResult(name = "dateExpedition", column = "date_expedition"),
//                                @FieldResult(name = "isDTD", column = "is_dtd"),
//                                @FieldResult(name = "prixOpex", column = "prix_opex"),
//                                @FieldResult(name = "prixCasse", column = "prix_casse"),
//                                @FieldResult(name = "dateEnvoi", column = "date_envoi")}),
//
//                     columns = {@ColumnResult(name = "prix_opex", type = BigDecimal.class),
//                                @ColumnResult(name = "prix_casse", type = BigDecimal.class)})
//
//@NamedNativeQuery(name = "ReponseLFT.findByIdWithPrice", query =
//                       "SELECT replft.id as id, "
//                           + "replft.lft_associee as lft_associee, "
//                           + "replft.nno_id as nno_id, "
//                           + "replft.idg_derive_id as idg_derive_id,"
//                           + "replft.article_id as article_id,"
//                           + "replft.magasin_id as magasin_id,"
//                           + "replft.origine_id as origine_id,"
//                           + "replft.quantite as quantite,"
//                           + "replft.ov as ov,"
//                           + "replft.commentaire_interne as commentaire_interne,"
//                           + "replft.commentaire_externe as commentaire_externe,"
//                           + "replft.ajout_ligne as ajout_ligne,"
//                           + "replft.is_traitee as is_traitee,"
//                           + "replft.is_expediee as is_expediee,"
//                           + "replft.atc_envoye as atc_envoye,"
//                           + "replft.lov as lov,"
//                           + "replft.num_be as num_be,"
//                           + "replft.num_caisse as num_caisse,"
//                           + "replft.num_ligne_be as num_ligne_be,"
//                           + "replft.num_colisage as num_colisage,"
//                           + "replft.num_transporteur as num_transporteur, "
//                           + "replft.date_be as date_be,"
//                           + "replft.date_livraison as date_livraison,"
//                           + "replft.commentaire_expedition as commentaire_expedition,"
//                           + "replft.date_expedition as date_expedition,"
//                           + "replft.is_dtd as is_dtd,"
//                           + "ap.prix_opex as prix_opex,"
//                           + "ap.prix_casse as prix_casse,"
//                           + "replft.date_envoi as date_envoi "
//                           + "from REPONSE_LFT replft "
//                           + "LEFT JOIN IDG_DERIVE idgd "
//                           + "ON replft.IDG_DERIVE_ID = idgd.ID "
//                           + "LEFT JOIN ARTICLE_PRIX ap "
//                           + "ON replft.article_id = ap.ARTICLE_ID "
//                           + "AND idgd.idg_id = ap.IDG_ID "
//                           + "where replft.id = (?1)"
//    , resultSetMapping = "ResulSet.findByIdWithPrice")
//            // @formatter:on
public class Entity
{}
