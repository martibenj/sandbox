package fr.martiben.cert;

public interface Interfaceuh
{

  default void foo()
  {
    System.out.println("Calling B.foo()");
  }

  void methodeInf(int i);
}
