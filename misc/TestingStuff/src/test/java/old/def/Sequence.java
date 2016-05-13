package old.def;

public enum Sequence
{
  REQ_ET01("Java 7", "1");

  /** Id. */
  private final String id;

  /** Nom. */
  private final String name;

  /** La version de l'exigence dans le modèle Requirement */
  private final String versionModel;

  /** La version implémentée. */
  private String       versionImplem;

  /**
   * Constructeur de l'énumeration de l'exigence.
   * 
   * @param name
   *          le nom.
   * @param versionModel
   *          La version de l'exigence dans la modélisation.
   */
  private Sequence(final String name, final String versionModel)
  {
    this.id = toString().substring("REQ_".length());
    this.name = name;
    this.versionModel = versionModel;
  }

}
