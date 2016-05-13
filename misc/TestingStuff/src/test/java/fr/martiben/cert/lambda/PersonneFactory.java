package fr.martiben.cert.lambda;

class PersonneFactory {
	public static Personne create(String nom, String prenom, int age) {
		return new Personne(nom, prenom, age);
	}

	public Personne build(String nom, String prenom, int age) {
		return new Personne(nom, prenom, age);
	}
}
