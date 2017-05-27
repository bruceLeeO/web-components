(function(window){
  var product = {};
  product.itemId = "";
  product.item = "";
  product.desc = "";
  product.price = "";
  var cart = [];
  var itemInCart = "";
  var numItemInCart = "";
  var promoCode = ".05";
  var addedItem1 = document.getElementById("added-item1");
  addedItem1.className = "not-added-yet";
  var addedItem2 = document.getElementById("added-item2");
  addedItem2.className = "not-added-yet";
  var addedItem3 = document.getElementById("added-item3");
  addedItem3.className = "not-added-yet";
  var preco = document.getElementById("preco");
  preco.className = "cart-is-empty"; // preco short for pre-checkout

  product.addItem1 = function(){
    var obj = {};
    obj.itemId = "1";
    obj.item = document.getElementById("prod-item1").firstChild.nodeValue;
    obj.desc = document.getElementById("prod-desc1").firstChild.nodeValue;
    obj.price = remDollarSign(document.getElementById("prod-price1").firstChild.nodeValue);
    cart.push(obj);
    addedItem1.className = "added-to-cart";
    nosItemInCart();
    showItem();
  };

  product.addItem2 = function(){
    var obj = {};
    obj.itemId = "2";
    obj.item = document.getElementById("prod-item2").firstChild.nodeValue;
    obj.desc = document.getElementById("prod-desc2").firstChild.nodeValue;
    obj.price = remDollarSign(document.getElementById("prod-price2").firstChild.nodeValue);
    cart.push(obj);
    addedItem2.className = "added-to-cart";
    nosItemInCart();
    showItem();
  };

  product.addItem3 = function(){
    var obj = {};
    obj.itemId = "3";
    obj.item = document.getElementById("prod-item3").firstChild.nodeValue;
    obj.desc = document.getElementById("prod-desc3").firstChild.nodeValue;
    obj.price = remDollarSign(document.getElementById("prod-price3").firstChild.nodeValue);
    cart.push(obj);
    addedItem3.className = "added-to-cart";
    nosItemInCart();
    showItem();
  };

  var addDollarSign = function(num) {
    var numStr = "$"+num;
    return numStr;
  };

  var remDollarSign = function(str) {
    var line = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "$") {
        line.slice(0,i);
        console.log(line);
      }else {
        line+= str[i];
      }
    }
    console.log(line);
    return line;
  };

  var nosItemInCart = function() {
    numItemInCart = cart.length;
    document.getElementById("item-in-cart").innerHTML = numItemInCart;
  };
  
  var removeStrSpace = function(str) {
    var line = "";
    for (var i = 0; i < str.length; i++) {
      if (i === 0) {
        line += str[i].toLowerCase();
      }
      else if (str[i] === " ") {
        line += "";
      }
      else {
        line += str[i];
      }
    }
    return line;
  };

  var convertStrToUnderScore = function(str) {
    var line = "";
    for (var i = 0; i < str.length; i++) {
      if (i === 0) {
        line += str[i].toLowerCase();
      }
      else if (str[i] === " ") {
        line += "_";
      }
      else {
        line += str[i];
      }
    }
    return line;
  };

  var addTHeader = function() {
    return "<table class='shopping-cart-table'><thead><tr><th scope='col' colspan='2'>Item</th><th scope='col'>Price</th><th scope='col'>Qty</th><th scope='col'>Subtotal</th></tr></thead>";
  };

  var addTBody = function(){
    return "<tbody><tr>";
  };

  var addImgTD = function(){
    return "<td rowspan='1'><a href='#'><img src='http://placehold.it/140x100'></a></td>";
  };

  var addItemDescTD = function(desc,price,item){
    return "<td><h2><a href='#'>"+item+"</a></h2><ul class='item-added-detail'><li id='item-desc' class='item-list'>"+desc+"</li><li id='item-price' class='item-list'>Listed at "+price+"</li><li id='item-remove' class='item-list'><a href='#' id='"+removeStrSpace(item)+"' onclick='product.remove"+removeStrSpace(item)+"()'><i style='font-size:24px' class='fa'>&#xf014;</i></a></li></ul></td>";
    //return "<td><h2><a href='#'>"+item+"</a></h2><ul class='item-added-detail'><li id='item-desc' class='item-list'>"+desc+"</li><li id='item-price' class='item-list'>Listed at "+price+"</li><li id='item-remove' class='item-list'><a href='#' id='"+removeStrSpace(item)+"' onclick='product.remove"+itemId+"()'><i style='font-size:24px' class='fa'>&#xf014;</i></a></li></ul></td>";
  };

  var addPriceTD = function(price){
    return "<td><span><span class='price'>"+price+"</span></span></td>";
  };

  var addQtyTD = function(itemId){
    return "<td><input type='text' name='qty-1' id='qItem"+itemId+"' value='"+itemQty(itemId)+"' class='qty' size='2' maxlength='1'/></td>";
    //return "<td><input type='text' name='qty-1' id='qty-1' class='qty' value='"+id+"' size='2' /></td>";
  };

  var addSubTotalTD = function(itemId,price){
    return "<td><span><span class='sub-price'>"+addDollarSign(subTotal(itemId,price))+"</span></span></td>";
  };


  var addClosingTBody = function() {
    return "</tr></tbody>";
  };

  var addTFoot = function(){
    return "<tfoot><tr><td colspan='2'><input type='submit' name='update' id='update-cart' class='btn' value='Update Cart' onclick='product.updateCart()'/><input type='submit' name='delete' id='empty-cart' class='btn' value='Empty Cart' onclick='product.removeAllItem()'/><a href='#' class='btn'>Continue Shopping</a></td><td colspan='2' class='grand-total'><span>Grand Total:</span></td><td class='grand-total'>"+addDollarSign(grandTotal())+"</td></tr></tfoot></table>";  
  };

  var makeItemsInCartUniq = function(arr){
    var sliced_arr = arr.slice(); 
    // sort ascendingly
    for (var i = sliced_arr.length - 1; i >= 0; i--) {
          for (var j = 1; j <= i; j++) {
              if (sliced_arr[j - 1].itemId > sliced_arr[j].itemId) {
                  var temp = sliced_arr[j - 1];
                  sliced_arr[j - 1] = sliced_arr[j];
                  sliced_arr[j] = temp; 
              }
          }
    }
    // make item unique
    var len = sliced_arr.length;
    for(var i = 0; i < len; i++) for(var j = i + 1; j < len; j++) 
        if(sliced_arr[j].itemId == sliced_arr[i].itemId){
            sliced_arr.splice(j,1);
            j--;
            len--;
        }
    return sliced_arr;
  }

  var showItem = function() {
    itemInCart ="";
    var uniqArrs = [];
    if (cart.length===0) {
      itemInCart+="<h3>Shopping Cart is empty</h3>";
    }      
    else {
      console.log("starting else if...cart.length = "+cart.length);
      uniqArrs = makeItemsInCartUniq(cart); 
      console.log("starting else...uniqArrs.length = "+uniqArrs.length);
      itemInCart+=addTHeader();
      itemInCart+=addTBody();
      for (var i = 0; i < uniqArrs.length; i++) {
        //console.log("uniqArrs["+i+"] "+uniqArrs[i]);
        console.log("item: "+uniqArrs[i].item+", desc: "+uniqArrs[i].desc+", price: "+uniqArrs[i].price+"\n");
        itemInCart+=addImgTD();
        itemInCart+=addItemDescTD(uniqArrs[i].desc,addDollarSign(uniqArrs[i].price),uniqArrs[i].item);
        itemInCart+=addPriceTD(addDollarSign(uniqArrs[i].price));
        itemInCart+=addQtyTD(uniqArrs[i].itemId);
        itemInCart+=addSubTotalTD(uniqArrs[i].itemId,uniqArrs[i].price);
        itemInCart+=addClosingTBody();

        //itemInCart+="item: "+uniqArrs[i].item+", desc: "+uniqArrs[i].desc+", price: "+addDollarSign(uniqArrs[i].price)+"<br>";
        //itemInCart+="<a href='#' id='"+removeStrSpace(uniqArrs[i].item)+"' onclick='product.remove"+removeStrSpace(uniqArrs[i].item)+"()'>remove</a><br>";
        //itemInCart+="<span>Sub: "+addDollarSign(subTotal(uniqArrs[i].itemId,uniqArrs[i].price))+"</span><br>";
        //console.log("removeStrSpace(cart[i].item) -- "+removeStrSpace(uniqArrs[i].item));
        //console.log(itemInCart);
      }
      itemInCart+=addTFoot();

      //itemInCart+="<br><span>Grand Total = "+addDollarSign(grandTotal())+"</span><br>";
      totalTotal();
      preco.className = "cart-is-not-empty";
    } 
    document.getElementById("show-item-in-cart").innerHTML = itemInCart+"<br>";
  };

  var itemQty = function(itemId) {
    var qty = 0;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].itemId === itemId) {
        qty++;
      }
    }
    return qty;
  };

  var subTotal = function(itemId,price) {
    var qty = 0;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].itemId === itemId) {
        qty++;
      }
    }
    //console.log("...........price = "+price+", qty = "+qty);
    //console.log("...........price*qty = "+ price*qty);
    return (price*qty).toFixed(2);
  };

  var grandTotal = function() {
    var granT = 0;
    for (var i = 0; i < cart.length; i++) {
      granT = granT + parseFloat(cart[i].price);
    }
    return granT.toFixed(2); 
  };

  var totalTotal = function() {
    var granT = 0;
    for (var i = 0; i < cart.length; i++) {
      granT = granT + parseFloat(cart[i].price);
    }
    granT=granT-(granT*parseFloat(promoCode));
    //return granT.toFixed(2); 
    document.getElementById("total-total").innerHTML = "Total total: "+addDollarSign(granT.toFixed(2));
  };

  product.applyPromo = function() {
    if (document.getElementById("promo").disabled === true) {
      document.getElementById("promoMsg").innerHTML = "Sorry, but you are allowed only one discount promo per order";
    } else {
      try {
        if (document.getElementById("promo").value === null) {
          throw "document.getElementById('promo').value is null";
        } else {
          console.log("document.getElementById('promo').value is not null and is = "+document.getElementById("promo").value);
          promoCode = document.getElementById('promo').value;

          if (promoCode === "") {
            promoCode = .05;
          }
          document.getElementById("promo").disabled = true;
          showItem();
        }    
      } catch(err) {
        console.log("Following error occured and handled: "+err);
      } finally {
        console.log("ending promoCode with value = "+promoCode);
      }
    }
  };

  product.removeitem1 = function() {
    console.log("this will remove item 1");
    var itemId = document.getElementById("item1").id;
    console.log("itemId = "+itemId);

    var iQty = 0;
    
    for (var i = 0; i < cart.length; i++) {
       
      if (removeStrSpace(cart[i].item) === itemId) {
        iQty = itemQty(cart[i].itemId);
        console.log(removeStrSpace(cart[i].item)+" === "+itemId);
        cart.splice(i,1);
        
        break;
      }
    };

    if (iQty===1) {
      addedItem1.className = "not-added-yet";
      preco.className = "cart-is-empty";
      document.getElementById("promo").disabled = false;
      document.getElementById("promoMsg").innerHTML = "";
    }

    showItem();
    nosItemInCart();
  };

  product.removeitem2 = function() {
    console.log("this will remove item 2");
    var itemId = document.getElementById("item2").id;
    console.log("itemId = "+itemId);

    var iQty = 0;
    
    for (var i = 0; i < cart.length; i++) {
      if (removeStrSpace(cart[i].item) === itemId) {
        iQty = itemQty(cart[i].itemId);
        console.log(removeStrSpace(cart[i].item)+" === "+itemId);
        cart.splice(i,1);
        break;
      }
    }

    if (iQty===1){
      addedItem2.className = "not-added-yet";
      preco.className = "cart-is-empty";
      document.getElementById("promo").disabled = false;
      document.getElementById("promoMsg").innerHTML = "";
    }

    showItem();
    nosItemInCart();
  };

  product.removeitem3 = function() {
    console.log("this will remove item 3");
    var itemId = document.getElementById("item3").id;
    console.log("itemId = "+itemId);

    var iQty = 0;

    for (var i = 0; i < cart.length; i++) {
      if (removeStrSpace(cart[i].item) === itemId) {
        iQty = itemQty(cart[i].itemId);
        console.log(removeStrSpace(cart[i].item)+" === "+itemId);
        cart.splice(i,1);
        break;
      }
    }

    if (iQty===1){
      addedItem3.className = "not-added-yet";
      preco.className = "cart-is-empty";
      document.getElementById("promo").disabled = false;
      document.getElementById("promoMsg").innerHTML = "";
    }
    
    showItem();
    nosItemInCart();
  };

  product.updateCart = function() {
    console.log("this will update the cart");
    var qVal1 = 0;
    var qVal2 = 0;
    var qVal3 = 0;
    try {
      if (document.getElementById("qItem1").value === null) {
        throw "document.getElementById('qItem1').value cannot be null";
      } else {
        console.log("document.getElementById('qItem1').value is not null and is = "+document.getElementById("qItem1").value);
        qVal1 = document.getElementById('qItem1').value;
      }      
    } catch(err) {
      console.log("Following error occured and handled: "+err);
    } finally {
      console.log("ending qVal1");
    }
    try {
      if (document.getElementById("qItem2").value === null) {
        throw "document.getElementById('qItem2').value cannot be null";
      } else {
        console.log("document.getElementById('qItem2').value is not null and is = "+document.getElementById("qItem2").value);
        qVal2 = document.getElementById('qItem2').value;
      }      
    } catch(err) {
      console.log("Following error occured and handled: "+err);
    } finally {
      console.log("ending qVal2");
    }
    try {
      if (document.getElementById("qItem3").value === null) {
        throw "document.getElementById('qItem3').value cannot be null";
      } else {
        console.log("document.getElementById('qItem3').value is not null and is = "+document.getElementById("qItem3").value);
        qVal3 = document.getElementById('qItem3').value;
      }      
    } catch(err) {
      console.log("Following error occured and handled: "+err);
    } finally {
      console.log("ending qVal3");
    }

    if (parseInt(qVal1) > 0 || parseInt(qVal2) > 0 || parseInt(qVal3) > 0) {
      cart.splice(0,cart.length);
      if (parseInt(qVal1) > 0) {
        for (var i = 0; i < parseInt(qVal1); i++) {
          var obj = {};
          obj.itemId = "1";
          obj.item = document.getElementById("prod-item1").firstChild.nodeValue;
          obj.desc = document.getElementById("prod-desc1").firstChild.nodeValue;
          obj.price = remDollarSign(document.getElementById("prod-price1").firstChild.nodeValue);
          cart.push(obj);     
        } 
      } else {
        addedItem1.className = "not-added-yet";
      }
      if (parseInt(qVal2) > 0) {
        for (var i = 0; i < parseInt(qVal2); i++) {
          var obj = {};
          obj.itemId = "2";
          obj.item = document.getElementById("prod-item2").firstChild.nodeValue;
          obj.desc = document.getElementById("prod-desc2").firstChild.nodeValue;
          obj.price = remDollarSign(document.getElementById("prod-price2").firstChild.nodeValue);
          cart.push(obj);            
        } 
      } else {
        addedItem2.className = "not-added-yet";
      }
      if (parseInt(qVal3) > 0) {
        for (var i = 0; i < parseInt(qVal3); i++) {
          var obj = {};
          obj.itemId = "3";
          obj.item = document.getElementById("prod-item3").firstChild.nodeValue;
          obj.desc = document.getElementById("prod-desc3").firstChild.nodeValue;
          obj.price = remDollarSign(document.getElementById("prod-price3").firstChild.nodeValue);
          cart.push(obj);            
        } 
      } else {
        addedItem3.className = "not-added-yet";
      }
    } else { 
      console.log("if you reach this point cart.length = "+cart.length);
      cart.splice(0,cart.length);  
      addedItem1.className = "not-added-yet";
      addedItem2.className = "not-added-yet";
      addedItem3.className = "not-added-yet"; 
      preco.className = "cart-is-empty";    
      document.getElementById("promo").disabled = false; 
      document.getElementById("promoMsg").innerHTML = "";
    }

    showItem();
    nosItemInCart();
  };

  product.removeAllItem = function() {
    console.log("this will remove all item");
    cart.splice(0,cart.length);  
    addedItem1.className = "not-added-yet";
    addedItem2.className = "not-added-yet";
    addedItem3.className = "not-added-yet";
    preco.className = "cart-is-empty";
    document.getElementById("promo").disabled = false;
    document.getElementById("promoMsg").innerHTML = "";
    showItem();
    nosItemInCart();
  };

  showItem();
  window.product = product;
})(window);