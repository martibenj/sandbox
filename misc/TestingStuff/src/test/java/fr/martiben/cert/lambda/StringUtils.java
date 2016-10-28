package fr.martiben.cert.lambda;

public class StringUtils
{

  public static String meilleurChaine(String a, String b)
  {
    String            retour = null;
    PropositionChaine pc     = (s1, s2)->s1.contains("benjamin");

    if (pc.estMeilleure(a, b))
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
    System.out.println(StringUtils.meilleurChaine("gruik", "benjamin d'la balle"));
  }
}
