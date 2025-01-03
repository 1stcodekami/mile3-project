import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{ backgroundImage: "url('/watchabout1.jpg')" }}>
      <div className=" w-full text-left bg-black bg-opacity-60 rounded-lg sm:mt-[30%] sm:ml-[40%] text-cyan-500">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
        <p>Welcome to Time Haven! 🌟 <br />

At Time Haven, we believe a watch is more than just an accessory.  it&apos;s a bold statement of style, precision, and craftsmanship. Our mission is to offer you a carefully curated selection of premium timepieces from around the globe, each chosen for its exceptional quality and unique design. <br />
Whether you&apos;re a connoisseur or simply appreciate the allure of a well-made watch, we&apos;re here to help you find the perfect piece that complements your personality and elevates your look.</p>
      </div>
    </section>
  );
};

export default About;
