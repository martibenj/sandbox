package def;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;

import javax.management.MBeanServerConnection;
import javax.management.ObjectName;
import javax.management.remote.JMXConnector;
import javax.management.remote.JMXConnectorFactory;
import javax.management.remote.JMXServiceURL;
import javax.naming.Context;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import constantes.ConstantesGeneration;
import dataObjects.Projet;

public class ZHello
{
  @SuppressWarnings("unchecked")
  @Test
  public void testComWeblo() throws Exception
  {

    JMXServiceURL serviceURL = new JMXServiceURL("t3", "locahost", 8888,
                                                 "/jndi/" + "weblogic.management.mbeanservers.domainruntime");
    Hashtable     h          = new Hashtable();
    h.put(Context.SECURITY_PRINCIPAL, "system");
    h.put(Context.SECURITY_CREDENTIALS, "12345678");
    h.put(JMXConnectorFactory.PROTOCOL_PROVIDER_PACKAGES, "weblogic.management.remote");

    JMXConnector          j = JMXConnectorFactory.connect(serviceURL, h);
    MBeanServerConnection m = j.getMBeanServerConnection();
    ObjectName            o = new ObjectName("com.bea:Name=wl10_domain_7001,Type=Server");

    String g = "" + m.getAttribute(o, "ListenPort");
    System.out.println(g);
    // MBeanServer server = (MBeanServer) ctx.lookup("java:comp/env");
    // ObjectName o = new ObjectName("com.bea:Name=RuntimeService,Type=weblogic.management.mbeanservers.runtime
    // .RuntimeServiceMBean");
    // String srvName = "" + server.getAttribute(o, "ServerName");

    // TestHelper.viderFichiersLog();
    // ParametresLancementBatch parametresLancementBatch = ParametresLancementBatch.getNewValuedInstance();
    // invoquerBatch(BATCH_SANS_CLE_MANTIS_3380, parametresLancementBatch);
  }

  @Ignore
  public void testMachin()
  {
    Assert.assertTrue(Boolean.TRUE);
  }

  @Ignore("HEEYY")
  public void testTruc()
  {
    Assert.assertTrue(Boolean.TRUE);
  }

  // public static void main(String[] args)
  // {
  // convertirLong();
  // }
  //
  // private static void convertirLong()
  // {
  // long machin = Long.parseLong("220492800000");
  //
  // System.out.println(new Date(machin));
  // }

  @Test
  public void test1()
  {
    // Projets � ignorer du build g�n�ral Tiga automatis�, ils seront lanc�s
    // apr�s coup une fois la serie automatique termin�e
    List<Projet> listeProjetsIgnores = new ArrayList<Projet>();
    // Attention l'ordre est important
    Projet pr = new Projet("BatchPurge", "B7");
    pr.setNomEclipse("BatchPurge");
    listeProjetsIgnores.add(pr);

    pr = new Projet("BatchHistorisation", "B7");
    pr.setNomEclipse("BatchHistorisation");
    listeProjetsIgnores.add(pr);

    pr = new Projet("BatchAdministration", "B2");
    pr.setNomEclipse("BatchAdministration");
    listeProjetsIgnores.add(pr);

    pr = new Projet("BatchAdministrationIHM", "B4");
    pr.setNomEclipse("BatchAdministrationIHM");
    listeProjetsIgnores.add(pr);

    pr = new Projet("TestsConfiguration", "B4");
    pr.setNomEclipse("TestsConfiguration");
    listeProjetsIgnores.add(pr);

    List<Projet> listeProjets = new ArrayList<Projet>();
    // Attention l'ordre est important
    pr = new Projet("Tesdgdfn", "B4");
    pr.setNomEclipse("TestsCofgdfdn");
    listeProjets.add(pr);
    pr = new Projet("TestsConfiguration", "B4");
    pr.setNomEclipse("TestsConfiguration");
    listeProjets.add(pr);

    System.out.println(getBuildSequence(listeProjets, listeProjetsIgnores));
  }

  /**
   * permet de g�n�rer la liste des appels aux diff�rents build, dans l'ordre
   * attendu
   *
   * @param listeProjets
   *
   * @return sequenceBuild
   */
  private static String getBuildSequence(List<Projet> listeProjets, List<Projet> listeProjetsIgnores)
  {
    String sequenceBuild = "";
    Projet projet        = null;

    String num = null;

    for (int i = 0; i < listeProjets.size(); i++)
    {
      projet = listeProjets.get(i);
      if (listeProjetsIgnores != null && ZHello.containsNomProjet(projet.getNomEclipse(), listeProjetsIgnores))
      {
        return sequenceBuild;
      }
      else
      {
        if ((i + 1) < 10)
        {
          num = "0" + Integer.toString(i + 1);
        }
        else
        {
          num = Integer.toString(i + 1);
        }
        sequenceBuild += ConstantesGeneration.antFilePrefix + num + "." + projet.getNomEclipse()
                             + ConstantesGeneration.buildFileSuffix + ConstantesGeneration.antFileSuffix;
      }
    }

    return sequenceBuild;
  }

  private static boolean containsNomProjet(String nomProjet, List<Projet> listeRecherche)
  {
    if (nomProjet == null)
    {
      return false;
    }

    Iterator<Projet> it = listeRecherche.iterator();

    while (it.hasNext())
    {
      String nomRech = it.next().getNomEclipse();
      if (nomProjet.equals(nomRech))
      {
        return true;
      }
    }
    return false;
  }

	/*
   * public static void main(String[] args) { AbstractEtapeDAO abs = new
	 * EtapeDAOOracle(null); System.out.println(abs._requeteHistoriserTable());
	 * }
	 */
	/*
	 * public static void main(String[] args) { String nomCle =
	 * "J_73562/1!0-15";// A_11/22!33-44 String nomCleTravail =
	 * nomCle.toString();
	 *
	 * String typeClef = null; String idEx = null; String numEtape = null;
	 * String min = null; String max = null; String[] part1 = null;
	 *
	 * part1 = nomCleTravail.split("_"); if (!part1[0].equals(nomCleTravail)) {
	 * typeClef = part1[0]; if (part1.length > 1) { nomCleTravail = part1[1]; }
	 * else { nomCleTravail = ""; } }
	 *
	 * part1 = nomCleTravail.split("/"); if (!part1[0].equals(nomCleTravail)) {
	 * idEx = part1[0]; if (part1.length > 1) { nomCleTravail = part1[1]; } else
	 * { nomCleTravail = ""; } }
	 *
	 * part1 = nomCleTravail.split("!"); if (!part1[0].equals(nomCleTravail)) {
	 * numEtape = part1[0]; if (part1.length > 1) { nomCleTravail = part1[1]; }
	 * else { nomCleTravail = ""; } }
	 *
	 * part1 = nomCleTravail.split("-"); if (!part1[0].equals(nomCleTravail)) {
	 * min = part1[0]; if (part1.length > 1) { max = part1[1]; } else { max =
	 * ""; } }
	 *
	 * System.out.println("typeClef=" + typeClef); System.out.println("idEx=" +
	 * idEx); System.out.println("numEtape=" + numEtape);
	 * System.out.println("min=" + min); System.out.println("max=" + max); }
	 */
}
/*
 * INSERT INTO tb tableExec (tableExec.CODE_TERR, tableExec.ID_EXERCICE,
 * tableExec.NUM_ETAPE, tableExec.DATE_DEBUT, tableExec.DATE_FIN,
 * tableExec.CLES_SUCCES, tableExec.CLES_NON_TRAITEES,
 * tableExec.CLES_KO_PARTIEL, tableExec.CLES_KO_COMPLET, tableExec.ID_LISTE,
 * tableExec.SERVICE_BATCH, tableExec.DOMAINE_BATCH, tableExec.CLASSE_SERVICE,
 * tableExec.SIGN_FONCT, tableExec.SIGN_TECH, tableExec.TIME_INSERT,
 * tableExec.MODE_NO_TX, tableExec.INVALIDE, tableExec.ETAT_ETAPE,
 * tableExec.CODE_RETOUR_ETAPE, tableExec.CODE_RETOUR_EX,
 * tableExec.ID_CORRELATION, tableExec.COMPLEMENT, tableExec.ID_SERVEUR)
 *
 * SELECT tableHisto.CODE_TERR, tableHisto.ID_EXERCICE, tableHisto.NUM_ETAPE,
 * tableHisto.DATE_DEBUT, tableHisto.DATE_FIN, tableHisto.CLES_SUCCES,
 * tableHisto.CLES_NON_TRAITEES, tableHisto.CLES_KO_PARTIEL,
 * tableHisto.CLES_KO_COMPLET, tableHisto.ID_LISTE, tableHisto.SERVICE_BATCH,
 * tableHisto.DOMAINE_BATCH, tableHisto.CLASSE_SERVICE, tableHisto.SIGN_FONCT,
 * tableHisto.SIGN_TECH, tableHisto.TIME_INSERT, tableHisto.MODE_NO_TX,
 * tableHisto.INVALIDE, tableHisto.ETAT_ETAPE, tableHisto.CODE_RETOUR_ETAPE,
 * tableHisto.CODE_RETOUR_EX, tableHisto.ID_CORRELATION, tableHisto.COMPLEMENT,
 * tableHisto.ID_SERVEUR FROM hhhh tableHisto
 */
