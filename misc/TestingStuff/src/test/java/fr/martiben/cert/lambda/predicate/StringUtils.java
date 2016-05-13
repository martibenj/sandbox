package fr.martiben.cert.lambda.predicate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class StringUtils {

	public static List<String> allMatches(List<String> list, Predicate<String> predicate) {
		List<String> retour = new ArrayList<>();
		list.forEach((element) -> {
			if (predicate.test(element)) {
				retour.add(element);
			}
			;
		});
		return retour;
	}

	public static void main(String[] args) {
		List<String> mots = Arrays.asList("bonjour", "hello", "hola", "aurevoir", "goodbye", "adios");
		System.out.printf("mots de la liste d'origine: %s.%n", mots);

		// liste des mots de moins de 5 lettres
		System.out.println(StringUtils.allMatches(mots, el -> el.length() < 5));

		// liste des mots comportant la lettre 'b'
		System.out.println(StringUtils.allMatches(mots, el -> el.contains("b")));

		// liste des mots ne comportant pas la lettre 'e'
		System.out.println(StringUtils.allMatches(mots, el -> !el.contains("e")));

		// liste des mots de longueur paire
		System.out.println(StringUtils.allMatches(mots, el -> el.length() % 2 == 0));
	}

}
