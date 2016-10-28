package fr.martiben.cert;

public class Truc extends Maman
{

  static int machin = -1;
  int varInst = -1;

  private int attr = 10;

  public Truc(int a)
  {
    varInst = a;
  }

  public Truc(int a, int b)
  {
    this(b);
    varInst = a;
  }

  @Override
  public String toString()
  {
    return "Mon objet Truc avec " + varInst + " sup attr : " + super.attr + " attr :" + attr;
  }

  @Override
  public void methodAbs(int i)
  {

  }
}
