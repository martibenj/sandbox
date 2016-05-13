package fr.martiben.cert.lambda.ref;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class AfficheListe {

	public static void main(String[] args) {
		List<Integer> liste = Arrays.asList(34, 76, 98, 23, 62, 59, 84, 47, 21);
		liste.forEach(new Consumer<Integer>() {
			public void accept(Integer t) {
				System.out.println(t);
			};
		});
		System.out.println("-----------------");
		liste.forEach((i) -> System.out.println(i));
		System.out.println("-----------------");
		liste.forEach(System.out::println);
	}
}
