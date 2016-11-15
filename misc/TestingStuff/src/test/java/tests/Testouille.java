package tests;

import fr.martiben.cert.othPack.Enfant;
import fr.martiben.cert.othPack.Parent;
import old.def.FormEntity;
import old.def.from;
import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.apache.commons.exec.PumpStreamHandler;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.WordUtils;
import org.apache.commons.vfs2.FileChangeEvent;
import org.apache.commons.vfs2.FileListener;
import org.apache.commons.vfs2.impl.DefaultFileMonitor;
import org.joda.time.DateTime;
import org.joda.time.Duration;
import org.junit.Assert;
import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.Proxy;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.MessageFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Testouille
{
  float f;

  @Test
  public void stub() throws IOException
  {
  }

  @Test
  public void a() throws IOException
  {
  }

  @Test
  public void b() throws IOException
  {
  }

  @Test
  public void c() throws IOException
  {
  }

  @Test
  public void d() throws IOException
  {
  }

  @Test
  public void MessageFormat() throws IOException
  {
    System.out.println(MessageFormat.format("my {0}string {1}", "hey0", "hey1"));
  }

  @Test
  public void ConvertUnderscore() throws IOException
  {
    String blah1 = " MSS CAESAR ";
    System.out.println(WordUtils.capitalizeFully(blah1.trim(), new char[] { ' ' }).replaceAll(" ", ""));
    String blah2 = "SSPP";
    System.out.println(WordUtils.capitalizeFully(blah2.trim(), new char[] { ' ' }).replaceAll(" ", ""));

    BigDecimal prix = BigDecimal.valueOf(5000);
    BigDecimal bd   = BigDecimal.valueOf(5).multiply(prix);
  }

  @Test
  public void operatorsCallOrder() throws IOException
  {
    boolean a = false;
    boolean b = true;
    System.out.println(a || b);
    System.out.println(a | b);
    System.out.println(a || trucBoolean());
    System.out.println(a | trucBoolean());
  }

  public boolean trucBoolean()
  {
    System.out.println("hey");
    return true;
  }

  @Test
  public void bytes() throws IOException
  {
    String s = null;
    int    i = 5;
    byte   d = 55;
    byte   t = (byte) (d + d);
    System.out.println(f);
    List l = new ArrayList();
  }

  @Test
  public void fb() throws IOException
  {
    Assert.assertEquals("Fizz", fb(3));
    Assert.assertEquals("Buzz", fb(5));
    Assert.assertEquals("FizzBuzz", fb(15));
    Assert.assertEquals("2", fb(2));
    System.out.println(fb(3));
    System.out.println(fb(5));
    System.out.println(fb(15));
    System.out.println(fb(2));
  }

  public String fb(int pInteger)
  {
    String retour = "";
    if (pInteger % 3 == 0 && pInteger % 5 == 0)
    {
      retour = "FizzBuzz";
    }
    else
    {
      if (pInteger % 3 == 0)
      {
        retour = "Fizz";
      }
      else if (pInteger % 5 == 0)
      {
        retour = "Buzz";
      }
      else
      {
        retour = "" + pInteger;
      }
    }
    return retour;
  }

  @Test
  public void split() throws IOException
  {
    String   invalide = "undeuxtrois";
    String[] tab      = invalide.split("_");
    System.out.println(tab[1]);
  }

  @Test
  public void defaultMonitor() throws IOException
  {
    new DefaultFileMonitor(new FileListener()
    {
      @Override
      public void fileCreated(FileChangeEvent arg0) throws Exception
      {
      }

      @Override
      public void fileDeleted(FileChangeEvent arg0) throws Exception
      {
      }

      @Override
      public void fileChanged(FileChangeEvent arg0) throws Exception
      {
      }
    });
  }

  @SuppressWarnings("deprecation")
  @Test
  public void dateConstrString() throws IOException
  {
    System.out.println(new Date("10/06/14"));
    System.out.println("Coup de bol");
    System.out.println(StringUtils.leftPad("", 3, '1'));
  }

  @Test
  public void changeOnDateTime() throws IOException
  {
    DateTime dateDernierArchivage = new DateTime();
    System.out.println("de op : " + dateDernierArchivage.plusDays(1).toDate());
    System.out.println("apres op : " + dateDernierArchivage.toDate());
    System.out.println("de op2 : " + dateDernierArchivage.plusDays(1));
    System.out.println("apres op2 : " + dateDernierArchivage.toDate());
    // => ne touche pas à la référence d'origine. A ecraser donc.
  }

  @Test
  public void writeStringtoFile() throws IOException
  {
    // File file = new File("C:\\truc.txt");
    // FileUtils.writeStringToFile(file, "hey", "ISO-8859-1");
    // FileUtils.writeStringToFile(file, "hey", "ISO-8859-1");
    // FileUtils.writeStringToFile(file, "hey", "ISO-8859-1");
    // FileUtils.writeStringToFile(file, "oh", "ISO-8859-1");
    // FileUtils.writeStringToFile(file, "oh", "ISO-8859-1");
    // FileUtils.writeStringToFile(file, "oh", "ISO-8859-1");
  }

  @Test
  public void duration() throws IOException
  {
    DateTime j        = new DateTime().withTimeAtStartOfDay();
    DateTime jPlusOne = new DateTime().withTimeAtStartOfDay().plusDays(1);
    Duration duration = new Duration(j, jPlusOne);
    System.out.println(duration.getMillis());
    // 1jr = 86400000

    DateTime anniv      = new DateTime().withDate(2015, 9, 12).withTimeAtStartOfDay();
    DateTime debutAnnee = new DateTime().withDate(2016, 1, 1).withTimeAtStartOfDay();
    System.out.println("anniv:" + anniv.getMillis());
    System.out.println("debut:" + debutAnnee.getMillis());

    DateTime ref     = new DateTime().withTimeAtStartOfDay();
    DateTime moins5  = ref.minusDays(5);
    Duration cinqJrs = new Duration(moins5, ref);
    System.out.println("5 jours :" + cinqJrs.getMillis());
  }

  @Test
  public void insideCatch() throws IOException
  {
    File newWorkingFile = null;
    try
    {
      newWorkingFile = new File("eegsdfgsd");
      throw new IOException();
    }
    catch (IOException e)
    {
      System.out.println(newWorkingFile.getAbsolutePath());
    }
  }

  @Test
  public void lineSeparator() throws IOException
  {
    String[] fichiersTrouves = { "truc", "truc1", "truc2" };

    StringBuilder sb            = new StringBuilder();
    String        lineSeparator = System.getProperty("line.separator");
    sb.append("There is more than one working file matching the searched name file pattern");
    for (String fichiersTrouve : fichiersTrouves)
    {
      sb.append(lineSeparator);
      sb.append(fichiersTrouve);
    }
    System.out.println(sb.toString());
    System.out.println("hey");
  }

  @Test
  public void formatter() throws IOException, ParseException
  {
    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yy");
    System.out.println(sdf.format(new DateTime().toDate()));
    System.out.println(sdf.parse("01/01/36"));
    System.out.println(sdf.parse("01/01/37"));
    System.out.println("Utiliser set2DigitYearStart()");
  }

  @Test
  public void toArray() throws IOException
  {
    List<String> result = new ArrayList<String>();
    result.add("1");
    result.add("2");
    result.add("3");
    String[] tab = result.toArray(new String[0]);
    System.out.println(tab);
  }

  @Test
  public void vieuxFor() throws IOException
  {
    List<String> result = new ArrayList<String>();
    result.add("1");
    result.add("2");
    result.add("3");
    result.add("4");
    result.add("5");
    String[] tab = result.toArray(new String[0]);

    for (int i = 0; i < 5; i++)
    {
      System.out.println(tab[i]);
    }
  }

  @Test
  public void FilesAttrib() throws IOException
  {
    String chemin = "C:\\tmp\\db\\mes.log";
    // NIO Jdk7
    System.out.println("NIO : \n" + Files.readAttributes(Paths.get(chemin), "*"));
    // oldschool
    System.out.println("oldSchool : \n" + new File(chemin).length());
  }

  @Test
  public void classList()
  {
    List<Parent> liste = new ArrayList<Parent>();
    liste.add(new Enfant());
    System.out.println(liste.get(0).getClass());
    liste = new ArrayList<Parent>(listeEnfant());
    System.out.println(liste);
  }

  private List<Enfant> listeEnfant()
  {
    List<Enfant> result = new ArrayList<Enfant>();
    result.add(new Enfant());
    result.add(new Enfant());
    result.add(new Enfant());
    return result;
  }

  @Test
  public void mkdirs()
  {
    // File file = new File("C:\\bnj\\truc");
    // System.out.println(file.mkdirs());
  }

  @Test
  public void useLeftpad()
  {
    System.out.println(leftpad("machin", 10));
    String url = "cdo://@CDO_SERVER_HOST:8777/Requ";
    if (url != null && url.contains("@CDO_SERVER_HOST"))
    {
      System.out.println("hey");
    }
  }

  private String leftpad(String str, int len)
  {
    String strLoc = str;
    String ch     = " ";
    int    i      = -1;
    len = len - strLoc.length();

    while (++i < len)
    {
      strLoc = ch + strLoc;
    }

    return strLoc;
  }

  @Test
  public void trimNewLine() throws MalformedURLException, IOException
  {
    String st = "dfserter \n";
    System.out.println("---");
    System.out.println(st);
    System.out.println("---");
    st = st.trim();
    System.out.println("++++");
    System.out.println(st);
    System.out.println("++++");
  }

  @Test
  public void proxyTimeout() throws MalformedURLException, IOException
  {
    Proxy         proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("http://dfgd.bull.fr", 80));
    URLConnection urlC  = new URL("https://api.dailymotion.com/playlist/x41df1/videos").openConnection(proxy);
    urlC.getInputStream();
  }

  @Test
  public void matcher()
  {
    String  toMatch     = "http://www.dailymotion.com/video/x2b79bk_saison-1-episode-67-le-lundi-matin_tv";
    String  PATTERN_URL = "saison-[0-9]*-episode-[0-9]*";
    Pattern PATTERN     = Pattern.compile(PATTERN_URL);
    Matcher matcher     = PATTERN.matcher(toMatch);
    matcher.find();
    System.out.println(toMatch.substring(matcher.start(), matcher.end()));
  }

  @Test
  public void modulo()
  {
    int modulo = (100 % 251);
    System.out.println(modulo);
  }

  @Test
  public void encodeStringMD4() throws DecoderException
  {
    String hash = "209c6174da490caeb422f3fa5a7ae634";
    System.out.println(hash.toCharArray());
    byte[] tab = Hex.decodeHex(hash.toCharArray());
    System.out.println(tab);
  }

  @Test
  public void genJenkins()
  {
    String service = "## Start PIC%NB%\n" + "<Location /jenkins%NB%>\n"
                         + "\tProxyPass http://pic%NB%.novaforge.bull.com:8765/jenkins%NB%\n"
                         + "\tProxyPassReverse http://pic%NB%.novaforge.bull.com:8765/jenkins%NB%\n"
                         + "\tProxyPassReverse http://pic%NB%.novaforge.bull.com/jenkins%NB%\n" + "</Location>\n"
                         + "## End PIC%NB%";
    for (int i = 1; i < 38; i++)
    {
      System.out.println(service.replace("%NB%", "" + i));
    }
  }

  @Test
  public void maps()
  {
    Map<String, Object> map = new HashMap<String, Object>();
    map.put("ProjectId", 1);
  }

  @Test
  public void beaverAddLine()
  {
    // SIMULATED !
    final Scanner scanner = new Scanner("/dev/mapper/centos-swap swap                    swap    defaults        0 0\n"
                                            + "/dev/sdb1 /datas ext4 defaults 0 0\n"
                                            + "/dev/sda3 /livraison ext3 defaults 0 0\n\n");
    while (scanner.hasNext())
    {
      final String currentLine = scanner.nextLine();
      if (currentLine.contains("/dev/sda3 /livraison ext3 defaults 0 0"))
      {
        System.out.println("Saloperie!!!");
      }
    }
    scanner.close();
  }

  @Test
  public void replace()
  {
    String ch = "dfgdjkfgdfgdfgdfg:/usr/bin";
    System.out.println(ch.replace("/usr/bin", "/usr/local/bin/chrootshell/"));
  }

  /**
   * Pas faisable. Utiliser un script "su : doit être lancé à partir d'un terminal"
   */
  @Test
  public void executorrr()
  {
    final DefaultExecutor executor = new DefaultExecutor();
    executor.setExitValue(0);
    final ByteArrayOutputStream stdout = new ByteArrayOutputStream();
    final PumpStreamHandler     psh    = new PumpStreamHandler(stdout);
    executor.setStreamHandler(psh);
    String cmdLong = "su - safran --shell /bin/bash --command \"ulimit -n\"";
    // String cmd = "su";
    // String[] args = { "-", "safran" , "--shell", "/bin/bash", "--command", "\"ulimit -n 50000\""};

    // CommandLine cmdLine = new CommandLine(cmd);
    // cmdLine.addArguments(args);
    CommandLine cmdLine = CommandLine.parse(cmdLong);
    System.out.println("cmd[" + cmdLine + "]");
    try
    {
      System.out.println(executor.execute(cmdLine));
    }
    catch (final IOException e)
    {
      System.out.println(e);
    }
    finally
    {
      try
      {
        stdout.close();
      }
      catch (final IOException e)
      {
        // Ignore this
      }
    }
    System.out.println("stdout[" + stdout + "]");
  }

  @Test
  public void appendNull()
  {
    StringBuilder sb = new StringBuilder();
    sb.append((String) null);
    System.out.println(sb);
  }

  @Test
  public void timestampConverter()
  {
    long timestamp = 1412777998000L;
    Date d         = new Date();
    d.setTime(timestamp);
    System.out.println(d);
  }

  @Test
  public void length()
  {
    System.out.println(("").length());
  }

  @Test
  public void reflection()
  {
    System.out.println(from.class.getFields());
  }

  @Test
  public void exit0()
  {
    try
    {
      Runtime.getRuntime().exit(0);
    }
    catch (Exception e)
    {
      System.out.println("hello");
    }
  }

  @Test
  public void booleans()
  {
    boolean bool = true;
    bool = bool && true;
    System.out.println("" + bool);
    bool = bool && false;
    System.out.println("" + bool);
    bool = bool && true;
    System.out.println("" + bool);
  }

  @Test
  public void fileutils()
  {
    // File f = new File("/opt/instaForge/3.5.0//datas/jenkins/plugins/dashboard-view");
    // System.out.println(f.getName());
    // System.out.println(FileUtils.basename(f.getName()));
  }

  @Test
  public void paths()
  {
    // Path path = Paths.get("/opt/instaForge/3.5.0/datas/jenkins/plugins" + "/" + "dashboard-view");
    // System.out.println(path.normalize().toString());
  }

  @Test
  public void forEach()
  {
    List<String> l = new ArrayList<String>();
    l.add("1");
    l.add("2");
    l.add("1");
    for (String string : l)
    {
      System.out.println(string);
      break;
    }
  }

  @Test
  public void forEachEmpty()
  {
    List<String> l = new ArrayList<String>();
    for (String string : l)
    {
      System.out.println("hello" + string);
    }
  }

  @SuppressWarnings("null")
  @Test
  public void forEachListNull()
  {
    List<String> l = null;
    for (String string : l)
    {
      System.out.println("hello" + string);
    }
  }

  @Test
  public void forEachTabEmpty()
  {
    String[] l = new String[2];
    for (String string : l)
    {
      System.out.println("hello" + string);
    }
  }

  @SuppressWarnings("null")
  @Test
  public void forEachTabNull()
  {
    String[] l = null;
    for (String string : l)
    {
      System.out.println("hello" + string);
    }
  }

  @Test
  public void nullIf()
  {
    FormEntity nulleuh = new FormEntity();

    if (nulleuh.getObjects().getClass() != null)
    {
      System.out.println("c'est nul");
    }
  }

  @SuppressWarnings("null")
  @Test
  public void laliretest()
  {
    String nulle = null;
    if ("null".equals(nulle))
    {
      System.out.println("true");
    }
    else
    {
      System.out.println("false");
    }
    System.out.println(nulle);

    nulle.trim();
    System.out.println("lalire=" + System.getProperty("user.dir"));
  }

  // @Test
  // public void enume()
  // {
  // if ("lecture".equals(ActionSurFichier.LECTURE.toString()))
  // {
  // System.out.println("true");
  // }
  // else
  // {
  // System.out.println("false :" + ActionSurFichier.LECTURE.toString());
  // }
  // }

  @Test
  public void exceptionTest()
  {
    try
    {
      throw new NumberFormatException("lire");
    }
    catch (Exception e)
    {
      System.out.println("lalire Exception");
    }
    // catch (NumberFormatException e)
    // {
    // System.out.println("lalire NumberFormatException");
    // }
  }

  @Test
  public void ldate()
  {
    // long lon = new Date().getTime() + 10 * 1000;
    long     lon = 134442899649210000L;
    Date     d   = new Date(lon);
    Calendar c   = new GregorianCalendar(Locale.FRANCE);
    c.setTimeInMillis(lon);

    Long valeurLong = Long.valueOf(lon);
    Date dd         = null;
    dd = new Date(valeurLong.longValue());

    System.out.println("calendar=" + c);
    System.out.println("date=" + d);
    System.out.println("Long=" + dd);
  }

  @Test
  public void substring()
  {
    String lalireLong =
        "laliiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiirrrrrrrrrrrrrrrrrrrreeeeeeeeeeeeee";
    String coupeSub = lalireLong.substring(0, 5);

    // coupeSub = new String(coupeSub.toCharArray(),10,3);
    String coupeSubNew = new String(lalireLong.substring(0, 5));
    System.out.println(coupeSub);
    System.out.println(coupeSubNew);
  }

  @Test
  public void tabTest()
  {
    String[] cache = new String[] {};
    Assert.assertEquals(0, cache.length);
  }

  @Test
  public void index()
  {
    String h     = "hello";
    int    index = h.indexOf("h");
    System.out.println(index);
  }

  @Test
  public void indexLast()
  {
    String h     = "hello";
    String chara = "" + h.charAt(h.length() - 1);
    System.out.println(chara);
  }

  @Test
  public void fichier()
  {
    final String nomFichier = "C:/temp/lalire.txt";

    try
    {
      final FileWriter writer = new FileWriter(nomFichier, true);
      writer.write("hello");
      writer.close();
    }
    catch (IOException e)
    {
      System.out.println(e);
    }
  }

  @Test
  public void move()
  {
    // File f = new File("d:\\temp\\export.xml");
    // f.renameTo(new File("d:\\temp\\metrologie\\export.xml"));
  }

  @Test
  public void plus()
  {
    String s = "hello ";
    s += "you";
    System.out.println(s);
  }
}
