$(document).ready(function(){

  var categories = [];
  var array = [];
  var ran_cat_page = Math.floor(Math.random() * (2792 -1) + 1);
  var cat_url = 'http://www.trivialbuzz.com/api/v1/categories.json?page=' + ran_cat_page;
  var random_question_page = Math.floor(Math.random() * (2163 - 1) + 1)
  var url = 'http://www.trivialbuzz.com/api/v1/questions.json?page=' + random_question_page;

  function getCategories(){
    $.getJSON(cat_url, function(json){
      json['categories'].forEach(function(el){
        categories.push([el['name'], el['id']])
      });
      categories;
    });
  }

  // console.log(getCategories);
  var cat_data = [];
  function getData() {
    $.getJSON(url, function(data){
      data.questions.forEach(function(val){
        cat_data.push(val['category']['name'])
      })
    }).done(function(){
        if ($.unique(cat_data.slice(0,6)) < 6) {
          // getData();
          console.log('yahoo')
       } else {
        console.log($.unique(cat_data.slice(0,6).size))
       }

      })
  }
  getData();
})