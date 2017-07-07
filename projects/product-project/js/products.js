
/* global $ */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
$('.div#1.product').css('height', 600);
  
  $.getJSON('/projects/product-project/data/product.json', function(products){
    
   function listMaker(array){
    let $products = products.map(function(product, i, a){
      let $product =  $('<div>').addClass('product').attr('id', product.id).text(product.desc).prepend($('<img>')
            .attr('src', 'img/product/thumbs/' + product.image)
            .addClass('product-image'));
    let $price = $('<div>').addClass('price').text("$" + product.price).appendTo($product);
    let $specs = $('<div>').addClass('specs').text(product.specs).appendTo($product);
    let $flex = $('<div>').addClass('flex-row').append($product);
      return $product;
    });
       return $products;
  }
  $('main').append(listMaker(products));
  
    
    
    var $searcBar = $('<div>').header('Search').addClass('search-bar')
    
    $('<div>')
    
      
  })
  .fail(function() { console.log('getJSON on product.json failed!'); });
  
  // ALL YOUR CODE GOES ABOVE HERE //
});