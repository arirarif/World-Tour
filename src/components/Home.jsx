import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Visa from "./Visa"; // Assuming you have this component for visa details

const Home = () => {
  // const coffees = useLoaderData(); // Coffee data is loaded here

  const [loadedVisas, setLoadedVisas] = useState([]); // State for visa data

  // Fetch visa data when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/visa")
      .then((res) => res.json())
      .then((data) => setLoadedVisas(data)); // Update state with visa data
  }, []);

  return (
    <div>
      {/* Slider Section with 800px height */}
      <section className="relative">
        {/* DaisyUI Carousel */}
        <div className="carousel w-full" style={{ height: "800px" }}>
          {/* Slide 1 */}
          <div
            id="slide1"
            className="carousel-item relative w-full"
            style={{ height: "800px" }}
          >
            <div
              className="hero"
              style={{
                height: "800px",
                backgroundImage:
                  "url(https://i.ibb.co.com/FwxjFYp/hongkong1081704.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Hello, Coffee Lovers!
                  </h1>
                  <p className="mb-5">
                    Discover your perfect cup of coffee from our collection.
                    Enjoy the best blends, freshly brewed!
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            {/* Navigation buttons for the carousel */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            id="slide2"
            className="carousel-item relative w-full"
            style={{ height: "800px" }}
          >
            <div
              className="hero"
              style={{
                height: "800px",
                backgroundImage:
                  "url(https://i.ibb.co.com/zHNd8mj/bridge.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Visa Information</h1>
                  <p className="mb-5">
                    Explore the easiest way to apply for a visa and start your
                    journey abroad. We help you with the process!
                  </p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            {/* Navigation buttons for the carousel */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            id="slide3"
            className="carousel-item relative w-full"
            style={{ height: "800px" }}
          >
            <div
              className="hero"
              style={{
                height: "800px",
                backgroundImage:
                  "url(https://i.ibb.co.com/RcSNVHN/shanghai.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Your Next Adventure Awaits!
                  </h1>
                  <p className="mb-5">
                    Find the best destinations for your travel. Get all the
                    travel information and visa assistance here!
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            {/* Navigation buttons for the carousel */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* Optional: You can add indicators below if you want */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <div className="indicator">
            <span className="indicator-item btn btn-sm">1</span>
            <span className="indicator-item btn btn-sm">2</span>
            <span className="indicator-item btn btn-sm">3</span>
          </div>
        </div>
      </section>

      

      {/* Visa Section */}
      <section className="mt-10">
        <h3>Visa Information ({loadedVisas.length})</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loadedVisas.map((visa) => (
            <Visa
              visa={visa}
              loadedVisas={loadedVisas}
              setLoadedVisas={setLoadedVisas}
              key={visa._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
