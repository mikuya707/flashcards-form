app.controller('NewCardController', function($scope, FlashCardsFactory) {
    $scope.categories = FlashCardsFactory.categories;
    $scope.newCard = {
        question: null,
        category: null,
        answers: [{
            text: null,
            correct: false
        }, {
            text: null,
            correct: false
        }, {
            text: null,
            correct: false
        }]
    }
    $scope.submit = function(newCard, form) {
        if (!form.$error.maxlength) {
            console.log("postCards", newCard);
            FlashCardsFactory.postFlashCards(newCard).then(function(card) {
                console.log("moongoose", card);
            }).finally(function() {
                $scope.newCard = {
                    question: null,
                    category: null,
                    answers: [{
                        text: null,
                        correct: false
                    }, {
                        text: null,
                        correct: false
                    }, {
                        text: null,
                        correct: false
                    }]
                }
            })

        } else console.log("submission prevented");
    }



})