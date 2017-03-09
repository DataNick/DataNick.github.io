function makeURL(){
  var ran_cat = Math.floor(Math.random() * (27915 - 1) + 1)
  var cat = "http://www.trivialbuzz.com/api/v1/categories/" + ran_cat + ".json"
  return cat
}

function validQuestionsLength(hash, array, i){

  if (array.length < 5) {
    $.getJSON(makeURL(), function(data){
      data = data.category;
      data = JSON.stringify(data)
      data = JSON.parse(data)
      hash[data.id] = data

      array = data.questions;
    }).done(function(){
      return hash[i]
    })
  }
  // return hash
}

function getCategoryQuestions(){
  var questions = [];
  var i = 0;
  for (i; i < 6; i++){
    $.getJSON(makeURL(), function(data){
      data = data.category;
      data = JSON.stringify(data)
      data = JSON.parse(data)
      // questions.push(data)
      // questions[data['id']] = [data['name'], data['questions']]
      questions.push(data)
      validQuestionsLength(questions, data['questions'], i)
    })
  }
  // console.log(questions)

  return questions

}




$(document).ready(function(){
  var questions = getCategoryQuestions();


  var keys = Object.keys(questions)
  console.log(questions)

})