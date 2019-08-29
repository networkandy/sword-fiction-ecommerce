document.getElementById("cart-info").addEventListener("click", function() {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
    console.log(cart);
  });


//add items to the cart

(function (){
  const cartBtn = document.querySelectorAll('.store-item-icon');

  cartBtn.forEach(function (btn){
    btn.addEventListener('click', function(e){
      

      if(e.target.parentElement.classList.contains('store-item-icon')){
        let fullPath = e.target.parentElement.previousElementSibling.src; 
        let position = fullPath.indexOf('img') + 3;
        let partialPath = fullPath.slice(position);

        const item = {};
        item.img = `img-cart${partialPath}`;
        //get name
        let name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

       item.name = name;
        // get price
       let price = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

       let finalPrice = price.slice(1).trim();

       item.price = finalPrice;

        // console.log(finalPrice);

        // console.log(item);

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3' );

        cartItem.innerHTML = `
        <img src="${item.img}"  class="img-fluid rounded-circle" id="item-img">
        <div class="item-text">
            <p class="cart-item-title" class="font-weight-bold mb-0">
                ${item.name}
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price mb-0"><strong>${item.price}</strong></span>
            </p>
        </div>
        <a href="#" id="cart-item-remove" class="cart-item-remove" >
                <i class="fas fa-trash-alt"></i>
        </a>
        </div>
        `;

        //select cart
        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');
        //insert div into cart id area
        cart.insertBefore(cartItem, total);
        alert('item added to the cart');
        showTotal();
        deleteItemInCart();
        
        // console.log(cartItem);
        // console.log(total);
      }
    });
  });

    //show total 
    function showTotal (){
      const total = [];
      const items = document.querySelectorAll('.cart-item-price');
      
      items.forEach( (sword) => {
        total.push(parseFloat(sword.textContent));
      });

      const totalMoney = total.reduce( (total , item) => {
        total += item ;
        return total;
      }, 0);

      const finalMoney = totalMoney.toFixed(2);

      document.getElementById('cart-total').textContent = finalMoney;
      document.getElementById('total-items').textContent = finalMoney;
      document.getElementById('count-item').textContent = total.length;

    }



 
    
  }

)();



      //delete items in cart
      function deleteItemInCart(e){
        const deleteButton = document.getElementById("cart-item-remove");
        var x;
        for(x =0; x < deleteButton.length; x++){
            deleteButton[x].onclick = function (e){  
              var div = this.parentElement.parentElement;
              div.style.display = 'none';
              
              console.log(this.parentElement.parentElement);
            }
          }
    
        // var deleteButton = document.getElementById('cart-item-remove');
    
        // var x;
        // for(x =0; x < deleteButton.length; x++){
        //   deleteButton[x].onclick = function (){
        //     var div = this.parentElement.parentElement;
        //     div.style.display = 'none';
        //     console.log(div);
        //   }
        // }
        // deleteButton.addEventListener('click', function(e){
        //   console.log(e.target.this.parentElement.parentElement);
        // });
          
      }

      