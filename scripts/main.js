(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['thing'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <li> I have a "
    + escapeExpression(((helper = (helper = helpers.thing || (depth0 != null ? depth0.thing : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"thing","hash":{},"data":data}) : helper)))
    + "  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
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
