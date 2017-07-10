/* global $ _ */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
$('.div#1.product').css('height', 600);
  
  $.getJSON('/projects/product-project/data/product.json', function(products){
    
  function listMaker(array){
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
      return $products;
  }
  
  let $productsList = listMaker(products);
  
 
  
    
    function listMakerSmall(array){
    let $products = products.map(function(product, i, a){
    
    let $productBox = $('<div>').addClass('product-container-small');
    
    let $maxLength = 21;
    let $eachText = product.desc;
    
    if($eachText.length > $maxLength){
      $eachText = $eachText.substring(0, $maxLength) + "...";
    }
    
    
    let $desc = $('<div>').addClass('desc-style-small').text($eachText);
    let $img = $('<img>').addClass('img-small').attr('src', 'img/product/thumbs/' + product.image);
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
  
      var $listNav = $('<div>').attr("id", "list-nav").append($smallProductsList);
  
  
             _.forEach('.product-container-small', function(value, index){
                $('.product-container-small').eq(index).click(function() {
                   $('main').empty();
                    $('main').append(value[index]);
        });
        //$productsList
        $('nav').append($listNav);
      });
    
  
  //$('nav').append($listNav);
  
    
    //$('main').append($productsList); 
      
  })
  .fail(function() { console.log('getJSON on product.json failed!'); });
  
  // ALL YOUR CODE GOES ABOVE HERE //
});