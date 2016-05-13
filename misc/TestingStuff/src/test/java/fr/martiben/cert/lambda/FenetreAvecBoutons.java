package fr.martiben.cert.lambda;

import java.awt.Color;

public class FenetreAvecBoutons extends FenetreBase {
	private static final long serialVersionUID = 1L;

	public FenetreAvecBoutons() {
		super("Classes externes");
		Color couleurVerte = Color.GREEN;
		button1.addActionListener(arg -> contentPane.setBackground(Color.RED));
		button2.addActionListener(arg -> contentPane.setBackground(couleurVerte));
		button3.addActionListener(arg -> setBg(Color.BLUE));

		setVisible(true);
	}
}
