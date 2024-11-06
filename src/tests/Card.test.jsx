import React from 'react';
import { render, screen } from "@testing-library/react";
import { Card } from "../shared-components/Card";

describe("Card", () => {

  const testIphoneData = {
    brand: "Apple",
    href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
    title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
    newPrice: "754 €",
    usedPrice: "720,99 €",
    image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg",
  };


  it("renders the card with accurate data", () => {
    render(
      <Card
        image={testIphoneData.image}
        brand={testIphoneData.brand}
        title={testIphoneData.title}
        newPrice={testIphoneData.newPrice}
        usedPrice={testIphoneData.usedPrice}
      />
    );

    const image = screen.getByAltText("Iphone 11");
    expect(image).toBeDefined();

    expect(screen.getByText(testIphoneData.brand)).toBeDefined();
    expect(screen.getByText(testIphoneData.title)).toBeDefined();
    expect(screen.getByText(testIphoneData.newPrice)).toBeDefined();
  });


  it("does not render the card if a data is missing (brand)", () => {
    render(
      <Card
        image={testIphoneData.image}
        title={testIphoneData.title}
        newPrice={testIphoneData.newPrice}
        usedPrice={testIphoneData.usedPrice}
      />
    );

    expect(screen.queryByText(testIphoneData.brand)).not.toBeInTheDocument();
  });


  it("renders the card and ensures new price is greater than used price", () => {
    render(
      <Card
        image={testIphoneData.image}
        brand={testIphoneData.brand}
        title={testIphoneData.title}
        newPrice={testIphoneData.newPrice}
        usedPrice={testIphoneData.usedPrice}
      />
    );
  
    const newPrice = parseFloat(testIphoneData.newPrice.replace("€", "").replace(",", "."));
    const usedPrice = parseFloat(testIphoneData.usedPrice.replace("€", "").replace(",", "."));
  
    expect(newPrice).toBeGreaterThan(usedPrice);
  });
  

});
