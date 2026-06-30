import React from 'react';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading mb-0">Home Service Booking</h1>
            <h2 className="masthead-subheading mb-0">Get help around your home</h2>
            <a href="/search" className="btn btn-primary btn-xl rounded-pill mt-5">
              Search Now
            </a>
          </div>
        </div>

        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src="https://images.unsplash.com/photo-1510563800743-aed236490d08"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Book a company near you</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod aliquid, mollitia odio veniam sit iste esse assumenda
                  amet aperiam exercitationem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src="https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">More time to relax!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod aliquid, mollitia odio veniam sit iste esse assumenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="mb-5">Our Services</h2>

            <div className="row">
              <div className="col-md-4">
                <h4>🔧 Plumbing</h4>
                <p>Expert plumbers for repairs and installations.</p>
              </div>

              <div className="col-md-4">
                <h4>⚡ Electrical</h4>
                <p>Certified electricians for home electrical work.</p>
              </div>

              <div className="col-md-4">
                <h4>🧹 Cleaning</h4>
                <p>Professional home and office cleaning services.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container text-center">
            <h2>Why Choose Us?</h2>

            <div className="row mt-4">
              <div className="col-md-3">
                <h3>✔</h3>
                <p>Verified Professionals</p>
              </div>

              <div className="col-md-3">
                <h3>⏰</h3>
                <p>On-Time Service</p>
              </div>

              <div className="col-md-3">
                <h3>💰</h3>
                <p>Affordable Pricing</p>
              </div>

              <div className="col-md-3">
                <h3>⭐</h3>
                <p>Trusted by Customers</p>
              </div>
            </div>
          </div>
    </section>
    <section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">What Our Customers Say</h2>

    <div className="row">
      <div className="col-md-4">
        <div className="card p-3">
          <p>"Excellent service and quick response!"</p>
          <strong>- Ahmed</strong>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3">
          <p>"The electrician was professional and friendly."</p>
          <strong>- Sarah</strong>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3">
          <p>"Highly recommend this platform."</p>
          <strong>- John</strong>
        </div>
      </div>
    </div>
  </div>
  </section>
      <Footer />
    </div>
  );
};

export default Home;