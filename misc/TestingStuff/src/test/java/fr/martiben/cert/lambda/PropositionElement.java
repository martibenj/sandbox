package fr.martiben.cert.lambda;

@FunctionalInterface
public interface PropositionElement<T>
{

  public boolean estMeilleure(T e1, T e2);
}
