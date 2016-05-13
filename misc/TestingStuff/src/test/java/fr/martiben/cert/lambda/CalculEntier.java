package fr.martiben.cert.lambda;

@FunctionalInterface
interface CalculEntier {
	int operation(int a, int b);

	boolean equals(Object obj);
}
