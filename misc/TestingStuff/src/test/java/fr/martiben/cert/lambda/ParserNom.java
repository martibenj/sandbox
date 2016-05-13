package fr.martiben.cert.lambda;

public class ParserNom {

	public static void main(String[] atgs0) {
		ParserNom parser = new ParserNom();

		Personne pers1 = parser.parse("Eric CLAPTON 1945", Personne::new);
		System.out.println(pers1);

		Personne pers2 = parser.parse("Mark Knopfler 1949", PersonneFactory::create);
		System.out.println(pers2);

		final PersonneFactory fact = new PersonneFactory();
		Personne pers3 = parser.parse("Robbie Williams 1974", fact::build);
		System.out.println(pers3);

	}

	public Personne parse(String personne, PersonneBuilder builder) {
		String[] tokens = personne.split(" ");
		String nom = "", prenom = "";
		int age = 0;
		if (tokens.length == 3) {
			prenom = tokens[0];
			nom = tokens[1];
			age = 2014 - Integer.parseInt(tokens[2]);
		} else {
			System.err.println("l'information pass�e doit comporter: pr�nom nom dateNaisance");
			System.exit(1);
		}
		return builder.create(nom, prenom, age);
	}
}
