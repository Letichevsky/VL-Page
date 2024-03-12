import "./Products.scss";

function Products() {
  return (
    <div className="products">
      <section className="productsSection">
        <h2 className="productsSectionTitle">What do we create?</h2>
        <div className="productsContentBox">
          <h3 className="productsTitle">We develop websites</h3>
          <img src="/images/imac.png" alt="not found" className="productsImg" />
          <p className="productsDescription">
            From simple static landing pages to complex multi-page projects{" "}
            <br /> with enhanced security and unique functionality. <br /> We do
            not use third-party builders or templates but write code from
            scratch <br /> for each project individually.
          </p>
          <h3 className="productsTitle">Web applications</h3>
          <img src="/images/imac.png" alt="not found" className="productsImg" />
          <p className="productsDescription">
            Web applications is a modern trend in internet development, their
            advantages include speed <br /> achieved by partial page updates,
            <br /> only updating the components that need to be changed upon
            user action, <br /> while simple websites reload the entire page.{" "}
            <br />
            This site is written using this technology.
          </p>
          <h3 className="productsTitle productsTitleMobApp">
            Mobile applications
          </h3>
          <img
            src="/images/iphone.webp"
            alt="not found"
            className="productsImg iphone"
          />
          <p className="productsDescription">
            Perhaps the main advantage of mobile applications over websites{" "}
            <br /> and web applications is push notifications. <br /> Those same
            notifications that come to the user even on the locked screen of the
            device. <br /> Mobile applications also have a number of other
            advantages, <br /> and often such a solution is the most
            appropriate. <br /> We develop mobile applications for iOS and
            Android operating systems.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Products;
