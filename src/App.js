import Header from "./components/Layout/Header";
import React, { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
      setCartIsShown(true);
  }

  const hideCartHandler = () => {
      setCartIsShown(false);
  }

  return (
    <Fragment>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShownCart={showCartHandler} />
        <main>
            <Meals />
        </main>
    </Fragment>
  );
}

export default App;
