/* global $ _ */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
$('.div#1.product').css('height', 600);
  
  $.getJSON('/projects/product-project/data/product.json', function(products){
    
    
    
    
  function listMaker(array){
    $('main').empty();
    let $products = products.map(function(product, i, a){
      
    
    let $productBox = $('<div>').addClass('product-container');
    let $desc = $('<div>').addClass('desc-style').text(product.desc);
    let $img = $('<img>').addClass('img').attr('src', 'img/product/thumbs/' + product.image);
    let $imgContainer = $('<div>').addClass('image-container').append($img);
    
    let $price = $('<div>').addClass('price-tag').text("$" + product.price);
    let $specs = $('<div>').addClass('specs').text(product.specs);
    
    let $colorString = product.availableColors.join(', ');
    let $phoneColor = $('<div>').addClass('phone-color').text("available colors: " + $colorString);
    
    let $specsList = $('<ul>').addClass('specs-list-ul');
    
    let specsArray = product.specs;
    
    let $stocksContainer= $('<div>').addClass('stocks-container');
    
    let $eachOne = product.stock;
    
    let $stocks = $('<div>').addClass('in-stock').text($eachOne + " in stock!");
    
    let $lowStock = $('<div>').addClass('low-stock').text("Only " + $eachOne + " left!" );
    
    if ($eachOne < 10){
      $stocksContainer.append($lowStock);
    }else if ($eachOne >= 10) {
    $stocksContainer.append($stocks);
    }
    
  
    
    
    specsArray.map(function(v, i, a){
      $('<li>').addClass('spec').text(v).appendTo($specsList);
      
      
      
    });
    
    
    
    
    
    
    $productBox.append($desc).append($imgContainer).append($price).append($specsList).append($phoneColor).append($stocksContainer);
    
    
    
      return $productBox;
    });
    console.log($products);
      return $products;
      
  }
  
  let $productsList = listMaker(products);
  
 
  
    
    function listMakerSmall(array){
    
    $('main').empty();
    
    let $products = array.map(function(product, i, a){
    
    let $productBox = $('<div>').addClass('product-container-small');
    
    let $maxLength = 21;
    let $eachText = product.desc;
    
    if($eachText.length > $maxLength){
      $eachText = $eachText.substring(0, $maxLength) + "...";
    }
    
    
    let $desc = $('<div>').addClass('desc-style-small').text($eachText);
    let $img = $('<img>').addClass('img-small').attr('src', 'img/product/thumbs/' + product.image).click(function(){ 
      
      makePopUp(product);
      
    });
    let $imgContainer = $('<div>').addClass('image-container').append($img);
    
    let $price = $('<div>').addClass('price-tag-small').text("$" + product.price);
    
    let $stocksContainer= $('<div>').addClass('stocks-container-small');
    
    let $eachOne = product.stock;
    
    let $stocks = $('<div>').addClass('in-stock-small').text($eachOne + " in stock!");
    
    let $lowStock = $('<div>').addClass('low-stock-small').text("Only " + $eachOne + " left!" );
    
    if ($eachOne < 10){
      $stocksContainer.append($lowStock);
    }else if ($eachOne >= 10) {
    $stocksContainer.append($stocks);
    }
    
    
    
    
    
    
    $productBox.append($desc).append($imgContainer).append($price).append($stocksContainer);
    
    
    
      return $productBox;
    });
      return $products;
  }
  
  //$('nav');
  var $smallProductsList = listMakerSmall(products);
  $('main').append(listMakerSmall(products));
      // var $listNav = $('<div>').attr("id", "list-nav").append($smallProductsList);
  
  
            _.forEach('.product-container-small', function(value, index){
                $('.product-container-small').eq(index).click(function() {
                  //$('main').empty(); <--- turned off on purpose, turn back on when images work
                    $('main').append(value[index]);
        });
        //$productsList
        // $('nav').append($listNav);
      });
    
    
 
//search box
var $searchSection = $('<div>').addClass('search');
$searchSection.append($('<input>')
  .attr('id', 'search-box')
  .attr('placeholder', 'What are you looking for?'));
$searchSection
  .append($('<button>')
    .text('Search')
    .attr('id', 'searchButton'));
$('nav').prepend($searchSection);

//click handler
$('#searchButton').click(function(event){
const query = $('#search-box')[0].value;
let filteredItems = search(products, query);
$('main').append(listMakerSmall(filteredItems));

// listMaker(filteredItems);

//$('body').append(search(products, query));
console.log(filteredItems);
});


//search function
var search = function(collection, query) { 
  var filteredProducts = [];
  console.log(collection, query);
  _.each(collection, function(value, index, array) {
    if(typeof value === 'string') {
      if(value.indexOf(query) > -1) {
        console.log(index);
        filteredProducts.push(array);
    } 
    } else if (typeof value === 'object') {
      _.each(search(value, query), function(value, i, a){
        if(Array.isArray(value)){
          filteredProducts.push(array);
        }
        else{
          filteredProducts.push(value);
        }
      });
    }
    
  });
  
  return filteredProducts;
  
};
    
    
    
    
    function makePopUp(product){
      
      var $container = $('<div>').addClass('product-container');
      
      var $img = $('<img>').attr('src', '/projects/product-project/img/product/' + product.image);
      
      var $specs = $('<div>').text(product.specs);
      
      var $colors = $('<div>').text(product.color);
      
      $container.append($img, $specs, $colors);
      
      $container.css({
        
        position: 'fixed',
        top: '5%',
        left: '50%',
        height: '500px',
        width: '500px',
        color: 'navy',
        'background-color': 'white',
        overflow: 'scroll',
      });
      
      $('nav').append($container);
      
    }
  
    
    
    
    
    
    
    
      
  })
  .fail(function() { console.log('getJSON on product.json failed!'); });
  
  // ALL YOUR CODE GOES ABOVE HERE //
});