
function LocalStorageManager() {
    function getCart() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      return cart || [];
    }
  
    function removeFromCart(id) {
      let cart = getCart();
      cart = cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    function decreaseQuantity(id) {
        //först hämtar vi vår kundvagn
      let cart = getCart();

      //letar efter varan i kundvagnen
      const itemIndex = cart.findIndex((c) => c.id === id);
        
      //if (itemIndex !== -1) betyder mer eller mindre att varan finns
      //Här hanterar vi varans kvantitet där vi minskar med ett OM det finns mer än 1 av varan.
      if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
          cart[itemIndex].quantity--;
        } else {
          // tar bort produkten om det finns endast 1
          cart.splice(itemIndex, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  
    //Lägger till varan i cart
    function addToCart(item) {
      let cart = getCart();
      const itemIndex = cart.findIndex((c) => c.id === item.id);
  
      if (itemIndex !== -1) {
        cart[itemIndex].quantity++;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    function clearCart() {
      localStorage.setItem("cart", "[]");
    }
  
    return {
      getCart,
      decreaseQuantity,
      removeFromCart,
      addToCart,
      clearCart
    };
  }
  
  export default LocalStorageManager;
  