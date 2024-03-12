import "./AboutUs.scss";
import { useState, useEffect } from "react";

function AboutUs() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const newScrollPos = window.scrollY / 2;
      setScrollProgress(newScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="aboutUs">
      <section className="contentSection">
        <h2 className="aboutUsTitle" style={{ marginTop: `-20rem` }}>
          A little about us...
        </h2>
        {/* <p>{scrollPos}</p> */}
        <div className="contentBox">
          <div className="contentBoxHalf leftHalf">
            <div
              className="example"
              style={{
                marginTop: `-${scrollProgress / 2 - 400}px`,
                marginBottom: `${scrollProgress / 5}px`,
                transform: `rotate(${scrollProgress / 20 - 20}deg)`,
              }}
            >
              <img
                src="/images/iphone.png"
                alt="not found"
                className="deviceImg"
              />
            </div>
            <div
              className="example"
              style={{
                marginTop: `${scrollProgress / 7 - 200}px`,
                marginBottom: `${scrollProgress / 8 - 100}px`,
                transform: `rotate(-${scrollProgress / 20}deg)`,
              }}
            >
              <img
                src="/images/ipad.png"
                alt="not found"
                className="deviceImg"
              />
            </div>
            <div
              className="example"
              style={{
                marginTop: `${scrollProgress / 3 - 100}px`,
                transform: `rotate(${scrollProgress / 30}deg)`,
              }}
            >
              <img
                src="/images/macbook3d.png"
                alt="not found"
                className="deviceImg macbook"
              />
            </div>
          </div>
          <div className="contentBoxHalf rightHalf">
            <h3 style={{ paddingTop: `${scrollProgress / 0.95 - 100}px` }}>
              Our team creates
            </h3>
            <p>
              unique digital products with beautiful design and intuitive
              interfaces using cutting-edge development technologies, resulting
              in products that look great and perform quickly on any device.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
