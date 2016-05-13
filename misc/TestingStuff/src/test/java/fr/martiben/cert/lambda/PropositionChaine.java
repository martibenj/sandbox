package fr.martiben.cert.lambda;

@FunctionalInterface
public interface PropositionChaine {
	/**
	 * retourne true si la premi�re cha�ne est "meilleure" que la deuxi�me
	 * retourne false sinon. Les classes concr�tes qui impl�mentent cette
	 * interface doivent donner une d�finition de estMeilleure
	 */
	public boolean estMeilleure(String s1, String s2);
}
