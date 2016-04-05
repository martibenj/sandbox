
describe('ngGraine - pages des livres', function () {
	it('doit ajouter un livre à la liste', function () {

		//Charge la page de gestion des livres
		browser.get('#/book');

		//Clique sur le bouton de création d'un livre
		element(by.buttonText('Créer un livre')).click();

		//Saisie les données dans les champs
		element(by.model('vm.bookToCreate.title')).sendKeys('Les Schtroumpfs');
		element(by.model('vm.bookToCreate.description')).sendKeys('Péyo');

		//On vérifie le nombre de livres dans la liste avant l'ajout;
		var nbLivres;
		element.all(by.repeater('book in vm.books')).then(function (books) {
			nbLivres = books.length;
		});

		//On clique sur ajouter
		element(by.buttonText('Ajouter')).click().then(function () {
				element.all(by.repeater('book in vm.books')).then(function (books) {
					//On vérifie qu'il y a bien un livre de plus dans la liste
					expect(books.length).toEqual(nbLivres + 1);
				});
			}
		);
	})
});
