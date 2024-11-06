import { Card } from "../shared-components/Card";
import iPhoneData from "../data/iphone.json";
import type { Product } from "../types/product";

function App() {

  const RakutenLogo = require("../assets/rakuten-logo.jpg");
  const productData: Product = iPhoneData;

  // Ensures components do not render if data is missing
  const isIPhoneDataValid =
    productData?.image &&
    productData?.brand &&
    productData?.title &&
    productData?.newPrice &&
    productData?.usedPrice;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <img src={RakutenLogo} className="w-32 h-32 rounded-full mb-8" alt="Rakuten Logo" />
      
      {isIPhoneDataValid && (
        <Card
          image={productData.image}
          brand={productData.brand}
          title={productData.title}
          newPrice={productData.newPrice}
          usedPrice={productData.usedPrice}
        />
      )}

    </div>
  );
}

export default App;
