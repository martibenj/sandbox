/**
 * @author martinelli-b
 */
public class Un
{

  /*public ValueObjectsPage<Editorial> compterEtRechercherTousPagination(AbstractCriteresBean bean,
                                                                       final int first,
                                                                       final int maxResults,
                                                                       CritereTri critereTri) throws ServiceException
  {
    boolean         isDateDebutTri = false;
    List<Editorial> listeEditorial = this.rechercherAvecCriterePagination(bean, first, maxResults, critereTri);
    if (isDateDebutTri)
    {
      if (critereTri.isAscendant())
      {
        Collections.sort(listeEditorial, ComparatorEditorial.ORDRE_DATE_CREATION_DESC);
      }
      else
      {
        Collections.sort(listeEditorial, ComparatorEditorial.ORDRE_DATE_CREATION_ASC);
      }
    }
    Collections.sort(listeEditorial, ComparatorEditorial.ORDRE_DATE_CREATION_DESC);

    ValueObjectsPage<Editorial> pageRetour = new ValueObjectsPage<Editorial>();
    pageRetour.setNombreObjets(compterAvecCritere(bean));
    pageRetour.setListeObjets(listeEditorial);
    pageRetour.setNombreObjets(5);
    return pageRetour;
  }*/
}
