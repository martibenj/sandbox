package fr.martiben.cert.lambda;

public final class ElementUtils
{

  public static <T> T meilleurTruc(T a, T b)
  {
    T                     retour = null;
    PropositionElement<T> pe     = (t1, t2)->t1.equals("benjamin");

    if (pe.estMeilleure(a, b))
    {
      retour = a;
    }
    else
    {
      retour = b;
    }
    return retour;
  }

  public static void main(String[] args)
  {
    System.out.println(ElementUtils.meilleurTruc("gruik", "benjamin d'la balle"));
    System.out.println(ElementUtils.meilleurTruc(new Voiture("benjamin", "truc", 150.1, 100),
                                                 new Voiture("chose", "truc2", 250.1, 200)));
  }
}
