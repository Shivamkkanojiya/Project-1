const HeroSection = () => {
  return (
    <main className="hero contaner">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="hero-shoping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/images/flipkart.png" alt="" width={20}/>
            <img src="/images/amazon.png" alt="" width={20}/>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe.png" alt="shoe" width={800}/>
      </div>
    </main>
  );
};
export default HeroSection;
