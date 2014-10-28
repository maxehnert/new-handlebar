// /////////////////////////////////
//   <ul id="books">
//
//   var library = {
//   books : [
//     { title: 'Moby Dick', author: 'Herman Melville' },
//     { title: 'Great Expectations', author: 'Charles Dickens'},
//     { title: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
//   ]
// };
//
// //grabbing our template string
// var template = $('#book').html();
//
//
// //create our handlebars fuction
// var rendered = Handlebars.templates['books'];
//
// //append to my books element
// $('#books').append(rendered(library));
//
//
// {{#each items }}
//   <li> I have a {{things}}  </li>
// {{/each}}


//var source = $('#books').html();
//var template = Handlebars.compile(source);
//$('.books').html(template(data));
/////////////////////////////////


var list = {
  items : [
  { thing: 'car' },
  { thing: 'boat' },
  { thing: 'house' }
  ]
};

//var templates = $('#things').html();

var rendered = Handlebars.templates ['thing'];

$('#things').append(rendered(list));

///////////////////////////


//var source = $('#things').html();
//var template = Handlebars.compile ['items'];
//$('.hero-unit').html(template(list));
