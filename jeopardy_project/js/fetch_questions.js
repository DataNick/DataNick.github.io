function getData() {
  console.log('Loaded and ready.');
  var random_question_page = Math.floor(Math.random() * (2163 - 1) + 1)
  var ran_cat_page = Math.floor(Math.random() * (2792 -1) + 1)
  var url = 'http://www.trivialbuzz.com/api/v1/questions.json?page=' + random_question_page;
  var cat_url = 'http://www.trivialbuzz.com/api/v1/categories.json?page=' + ran_cat_page;
  var categories = [];
  var questions = [];
  var answers = []
  var ids = [];
  //category pages range 1..27915

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // var data = {cat1: data1, cat2: data2, cat3: data3, cat4: data4, cat5: data5, cat6: data6}


  $.getJSON(url, function(json){

    json = json.questions
    // console.log(json[0]['category'])
    json.forEach(function(val){
      questions.push(val['body']);
      answers.push(val['response'])
      categories.push([val['category']['name'], val['category']['id']])
      ids.push(val['category']['id'])
    })

    cat = $.unique(categories)
    cat = shuffle(cat)
    var new_cat = []
    for (n = 0; n < 8; n++){
      new_cat[n] = cat[n]
    }
    // console.log(new_cat)
    var just_questions = {}
    for (i = 0; i < new_cat.length; i++) {
      $.getJSON("http://www.trivialbuzz.com/api/v1/categories/" + new_cat[i][1]+ ".json", function(data){
        data = data.category;
        just_questions[data.name] = [data.questions, data.answers]
      })
    }



    ids = $.unique(ids.slice(0,10))
    questions = $.unique(questions.slice(0,31))
    var array = []
    // getCategoryQuestions(ids)
    // console.log(cat)
    // console.log(ids)
    // console.log(questions)
    // console.log(questions)
    questions.forEach(function(q){
      var count = 1
      var num = 0
      for (var i=0; i < questions.length; i++){
        $('#row' + count).data({'question': questions[i], 'answer': answers[num]})
        count++
        num++
      }
    })


    // $('#index').append('<ol></ol>')
    // for (var i in new_cat){
    //   var li = '<li>';
    //   $('ol').append(li.concat(cat[i].toUpperCase()))
    // }

    cat.forEach(function(el){
      var count = 0
      var header = 1
      for (var i=0; i <= cat.length; i++ ) {
        $('#header' + header).html(new_cat[i][0].toUpperCase());
        $('#header' + header).attr('key', ids[i])
        // $('#header' + header).data('category', ids[i])
        header++;
        count++;
      }
    })
  })
      $(".screen").click(function(){
        $(this).css('background-color', '#6699CC')
        // $('#dialog').html($(this).data()['question']);
        // $('#dialog').css('display', 'block').dialog();
        alert($(this).data()['question']);
        alert($(this).data()['answer'] );
        // $(this).html($(this).data()["answer"])

        // alert('hello')
        // console.log($(this).data()['question'], $(this).data()['answer'])

   });
}
//


// function getCategoryQuestions(ids){
//   var total_questions = []
//   var question_list = [];
//   ids.forEach(function(id){
//     function makeURL(id){
//       return 'http://www.trivialbuzz.com/api/v1/categories/' + id + '.json'
//     };
//     $.getJSON(makeURL(id), function(data){
//       data = data['category']['questions']
//       data.forEach(function(val){
//         // console.log(val['body'])
//         array.push(val['body'])
//       })
//       // array.push(question_list.slice(0,5))
//       question_list = [];
//       // console.log(total_questions)
//     });

//   });
//   console.log(array)
//   return array
// }


$(document).ready(function(){

  getData();

})