app.controller('NewCardController', function ($scope, FlashCardsFactory) {
	$scope.categories = FlashCardsFactory.categories;
	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
	}
	$scope.postCards = function(newCard) {
		console.log("postCards", newCard);
		FlashCardsFactory.postFlashCards(newCard).then(function(card){
			
		})
	}



})
