package fr.martiben.cert.lambda;

@FunctionalInterface
interface PersonneBuilder
{
  Personne create(String nom, String prenom, int age);
}