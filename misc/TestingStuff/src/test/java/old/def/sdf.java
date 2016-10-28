package old.def;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class sdf
{

  /** SimpleDateFormat encapsul� dans un ThreadLocal. */
  private final ThreadLocal<SimpleDateFormat> m_sdfSafe = new ThreadLocal<SimpleDateFormat>()
  {
    @Override
    protected SimpleDateFormat initialValue()
    {
      return new SimpleDateFormat("yyyy-MM-hh");
    }
  };

  public String formatDate(Date d) throws ParseException
  {
    return m_sdfSafe.get().format(d);
  }

  static SimpleDateFormat df = new SimpleDateFormat("dd-MMM-yyyy");

  static String testdata[] = { "01-Jan-1999", "14-Feb-2001", "31-Dec-2007" };

  public static void main(String[] args)
  {
    Runnable r[] = new Runnable[testdata.length];
    for (int i = 0; i < r.length; i++)
    {
      final int i2 = i;
      r[i] = new Runnable()
      {
        public void run()
        {
          try
          {
            for (int j = 0; j < 1000; j++)
            {
              String str  = testdata[i2];
              String str2 = null;
              synchronized (df)
              {
                Date d = df.parse(str);
                str2 = df.format(d);
              }
              if (!str.equals(str2))
              {
                throw new RuntimeException("date conversion failed after " + j + " iterations. Expected " + str
                                               + " but got " + str2);
              }
            }
          }
          catch (ParseException e)
          {
            throw new RuntimeException("parse failed");
          }
        }
      };
      new Thread(r[i]).start();
    }
  }
}
