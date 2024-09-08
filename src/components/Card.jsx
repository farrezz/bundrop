import "../styles/Card.css";
import LocalStorageManager from "../LocalStorage/localStorageManager";

function Card({menu}) {

  const { addToCart } = new LocalStorageManager();

  function handleClickAddToCart(item) {
    console.log(item)
    addToCart(item);
  }

  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Our menu</h1>
        <div className="menuList">
          {menu.map((item) => (
            <div key={item.id} className="menuItem">
              <img
                src={item.image}
                alt={item.title}
                className="menuItemImage"
              />
              <p>
                <h2>{item.title}</h2>
              </p>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <div className="button-container-cart">
                <div className="add-to-cart-btn" onClick={() => handleClickAddToCart(item)}>
                  Add to cart
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
