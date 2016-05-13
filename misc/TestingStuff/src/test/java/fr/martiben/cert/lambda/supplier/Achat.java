package fr.martiben.cert.lambda.supplier;

import java.util.function.Consumer;
import java.util.function.Supplier;

public class Achat {

	public static void main(String[] args) {
		Personne gaston = new Personne("LAGAFFE", "Gaston", 30);
		Achat achat = new Achat();

		achat.achatCompulsif(() -> {
			return new Voiture("", "", 1.0d, 1);
		} , gaston::achete);
		System.out.println(gaston);
	}

	public void achatCompulsif(Supplier<Voiture> concessionnaire, Consumer<Voiture> consommateur) {
		consommateur.accept(concessionnaire.get());
	}

}
