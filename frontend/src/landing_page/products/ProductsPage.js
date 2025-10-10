import React from "react";
import Hero from "./Hero";
import LeftSection from "./Leftsection";
import RightSection from "./RightSection";
import Universe from "./Universe";

// Import all the images needed for this page
import kiteImage from "../../assets/images/products-kite.png";
import consoleImage from "../../assets/images/products-console.png";
import coinImage from "../../assets/images/products-coin.png";
import kiteConnectImage from "../../assets/images/kite-api.png";
import varsityImage from "../../assets/images/varsity-mobile.png";

function ProductsPage() { // Renamed from PricingPage
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={kiteImage}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="/products/kite"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imageURL={consoleImage}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/products/console"
      />
      <LeftSection
        imageURL={coinImage}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        learnMore="/products/coin"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imageURL={kiteConnectImage}
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/products/kite-connect"
      />
      <LeftSection
        imageURL={varsityImage}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore="/products/varsity-mobile"
        googlePlay="#"
        appStore="#"
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="https://zerodha.tech" target="_blank" rel="noopener noreferrer" className="text-primary">
           Zerodha.tech blog.
        </a>
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;