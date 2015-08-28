app.factory('FlashCardsFactory', function($http) {

  var categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  function postFlashCards(card){
    console.log(card)
    $.ajax({
      type: "post",
      url: "/cards/",
      success: function(card){
        alert('added! yeah!!');
      }
    })
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
