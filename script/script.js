$(function() {

  $('.carousel-wrapper').carousel();

  var html = $('#info').html();
  var data = {
    name: '',
    surname: '',
    city: '',
    age: ''
  };

data.name = prompt('Введите имя:');
data.surname = prompt('Введите фамилию:');
data.city = prompt('Введите город:');
data.age = prompt('Введите возраст:');

  var content = tmpl(html, data);

  $('.template').append(content);

});
