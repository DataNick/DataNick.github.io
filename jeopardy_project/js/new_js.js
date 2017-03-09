function init(eject) {
  var candidates = [];

  function makeURL(){
    var ran_cat = Math.floor(Math.random() * (27915 - 1) + 1),
        cat = "http://www.trivialbuzz.com/api/v1/categories/" + ran_cat + ".json"
    return cat
    // TODO: ensure non-repeating categories
  }

  function storeCategory(category, selected) {
    if (candidates.length < 6) {
      candidates.push([category.name, selected]);
      getQuestions()
    } else {
      eject(returnQuestions(candidates));
    }
  }

  function normalizeCategory(category){
    var selected = [];
    while(selected.length < 5){
      var random = Math.floor(Math.random() * (category.questions_count));
      selected.includes(category.questions[random]) ? false : selected.push(category.questions[random]);
    }

    storeCategory(category, selected);
  }

  function validateQuestionsLength(questions, blah1, blah2){
    // console.log("1: ", questions,"2: ", blah1, "3: ", blah2)
    questions.category.questions_count < 5 ? getQuestions() : normalizeCategory(questions.category);
  }

  function getQuestions(categories_url) {
    categories_url = categories_url || makeURL();
    $.getJSON(categories_url, validateQuestionsLength);
  }

  getQuestions()
}


function returnQuestions(data) {
  return data;
};

init(function (stuff) {
  for (var i = 0; i < stuff.length; i++){
    $('#header' + i).html(stuff[i][0].toUpperCase());
    for (var j = 0; j < stuff[i][1].length; j++){
      $('#row' + i + "" + j).data({'question': stuff[i][1][j]['body'], 'answer': stuff[i][1][j]['response'].toUpperCase()})
    }
  }
    $(".screen").click(function(){
      $(this).css('background-color', '#6699CC')
        var that = $(this)
        // $('#dialog').html($(this).data()['question']);
        // $('#dialog').css('display', 'block').dialog();
      // setInterval(showAnswer, 3000)
      $('#popup').html($(this).data()['question'])
      $('#popup').css('display', 'block')
      // function showAnswer(){
      //   $('#popup').html($(this).data()['answer'])
      //   console.log(this)
      // }
      setTimeout(
        function()
        {
          $('#popup').html(that.data()['answer'])
            console.log(this)
          }, 8000)
      setTimeout(
        function(){
          $('#popup').css('display', 'none')
        }, 11100)

  });
})
