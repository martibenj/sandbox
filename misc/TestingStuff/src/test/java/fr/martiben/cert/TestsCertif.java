package fr.martiben.cert;

import java.math.MathContext;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Period;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.Test;

public class TestsCertif {


   @Test
   public void propsSys() {
      System.out.println(System.getProperties());
   }

   @SuppressWarnings("unused")
   @Test
   public void ifElse() {
      boolean b = Boolean.parseBoolean("1");
      if (b = true) {
         System.out.println("1true");
      }
      else {
         System.out.println("1false");
      }
      if (b = false) {
         System.out.println("2true");
      }
      else {
         System.out.println("2false");
      }
      boolean bb = Boolean.parseBoolean("1");
      System.out.println(bb);
   }

   @Test
   public void switche() {
      String s = "";
      switch (s) {
      case "truc":
         break;
      case "siTrucAussiCaNeCompilePas":
         break;
      // Dernier break facultatif
      }
      System.out.println("");
   }

   @Test
   public void operateurs() {
      int a = 60;
      a >>>= 3;
      // a == 7
      System.out.println(a);

      String s = "heyyyyy";
      String b = s.substring(0, 3);
      System.out.println(b);

      String s2 = "heyyyyy\n";
      System.out.println(s2);
      System.out.println("------");
      s2 = s2.trim();
      System.out.println(s2);
      System.out.println("------");

      StringBuilder sb = new StringBuilder("heyyyyy");
      short sh = 1;
      sb.append(sh);
      System.out.println(sb.equals(s));
   }

   @Test
   @SuppressWarnings("unused")
   public void primitifs() {
      Float f = 4.5f;
      System.out.println(f);
      NumberFormat nf = NumberFormat.getCurrencyInstance();
      MathContext m;

      int[] tableau4 = new int[4];
      int[] tableau5 = new int[5];
      System.arraycopy(tableau4, 0, tableau5, 0, tableau4.length);

      float ff = 10f / 3;
      System.out.println(ff);

      float fl = 1;// KO 10.5d;
      float fl2 = (float) 10.5d;
      double dou = 10.5f;
      float fl3 = 10;
      double dou2 = 10;
      int integ1 = 1;// KO 10.5f 10.5d
      int integ2 = (int) 10.5d;
      System.out.println("double to int :" + integ2);
      int integ3 = (int) 10.5f;
      System.out.println("float to int :" + integ3);

      int[] tableau[] = new int[3][4];
      int[] tableau2[][] = new int[3][4][5];
      int[][] tableau3[] = new int[3][4][5];

      long r;
      long x = 0;
      r = x;// KO compilation + r;

      try {
         int tt = 0b0_1_0;
         System.out.println(tt);
      }
      catch (Exception e) {
         e.printStackTrace();
      }
      catch (Throwable e) {
         e.printStackTrace();
      }

   }

   private static int uesh = 1;

   static {
      @SuppressWarnings("unused") int uesh = 0;
   }

   @SuppressWarnings("static-access")
   @Test
   public void constructeurs() {
      Truc t = new Truc(1);
      System.out.println(t.varInst); // package private (juste ce package)
      System.out.println(t);

      System.out.println(Truc.machin);
      System.out.println(t.machin);
      System.out.println("uesh" + uesh);
      Truc t2 = new Truc(1, 2);
      System.out.println(t2);
      System.out.println(TestsCertif.i);

   }

   private static int i = -30;

   @Test
   public void tableaux() {
      int[] tableau2[] = {{1, 2}, {3, 4}};
      System.out.println(tableau2[0][0]);
      System.out.println(tableau2[0][1]);
      System.out.println(tableau2[1][0]);
      System.out.println(tableau2[1][1]);

      List<Integer> liste = Arrays.asList(1, 2, 2, 3);
      System.out.println(liste);
      List<Integer> liste2 = new ArrayList<>();
      System.out.println(liste2);

      // int[] tableau3[] = new int[][2];

      int[] tableau = new int[2];
      tableau[0] = 4;
      tableau[1] = 4;
      Arrays.fill(tableau, (int) 1);
      Arrays.fill(tableau, 2);
      Arrays.toString(tableau);
   }

   @Test
   public void classes() {
      Truc t = new Truc(15);
      System.out.println(t);
   }

   @Test
   public void casting() {
      int g = 5;
      Integer it = g;
      System.out.println(it);
   }

   @Test
   public void time() {
      System.out.println(LocalDateTime.now());
      System.out.println(LocalDateTime.of(2016, 9, 1, 12, 12));
      Date oldDate = new Date();
      ZoneId zid = ZoneId.systemDefault();
      System.out.println(zid);
      LocalDateTime.ofInstant(oldDate.toInstant(), zid);
      LocalTime lt = LocalTime.now();
      System.out.println(lt);

      Period p = Period.parse("P4Y-3M5D");
      System.out.println(p.get(ChronoUnit.YEARS));
      System.out.println(p.get(ChronoUnit.MONTHS));
      System.out.println(p.getMonths());
      System.out.println(p.get(ChronoUnit.DAYS));
      p = p.normalized();
      System.out.println(p.get(ChronoUnit.YEARS));
      System.out.println(p.get(ChronoUnit.MONTHS));
      System.out.println(p.getMonths());
      System.out.println(p.get(ChronoUnit.DAYS));

      LocalDate date = LocalDate.now();
      String text = date.format(DateTimeFormatter.ISO_LOCAL_DATE);
      System.out.println(text);
      LocalDate parsedDate = LocalDate.parse(text, DateTimeFormatter.ISO_LOCAL_DATE);
      System.out.println(parsedDate);

      System.out.println(ChronoUnit.HOURS.between(LocalTime.now(), LocalTime.now().minus(3, ChronoUnit.HOURS)));
   }

   @Test
   public void lambda() {

      System.out.println("");
   }

}
