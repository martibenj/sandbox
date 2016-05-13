package fr.martiben.cert.lambda;

import java.util.Arrays;

import org.junit.Test;

public class TriChaine {

	private String[] mots = { "bonjour", "hello", "hola", "aurevoir", "goodbye", "adios" };

	@Test
	public void sort() {
		Arrays.sort(mots, (s1, s2) -> s1.length() - s2.length());
		System.out.println(Arrays.asList(mots));
		Arrays.sort(mots, (s1, s2) -> s2.length() - s1.length());
		System.out.println(Arrays.asList(mots));
		Arrays.sort(mots, (s1, s2) -> {
			if (s1.contains("e"))
				return -1;
			else
				return 1;
		});
		System.out.println(Arrays.asList(mots));
	}

}
