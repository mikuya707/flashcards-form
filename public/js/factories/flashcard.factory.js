app.factory('FlashCardsFactory', function($http) {

  var categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  function postFlashCards(card){
    console.log("here", card);
  return $http.post('/cards/', card).then(function(card){
      return card.data;
    });     
  }

  function getFlashCards (category) {
    var config = {};
    if (category) config.params = { category: category };
    return $http.get('/cards/', config).then(function(response){
      return response.data;
    });
  }
  return {
    getFlashCards: getFlashCards,
    postFlashCards: postFlashCards,
    categories: categories
  };
});
