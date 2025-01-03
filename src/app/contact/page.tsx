import React from 'react';

const Contact = () => {
  return (
    <div className='h-screen pt-[10%] bg-cover bg-center' style={{ backgroundImage: "url('contact-image.jpg')" }}>
    <section className="contact-form max-w-2xl mx-auto opacity-70 my-20 p-8 pl-[10%] pt-[5%] shadow-md rounded-md">
    
      <h2 className="text-4xl font-bold mb-2 text-cyan-500 " data-aos="fade-up">Contact Us</h2>
      <form>
        <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-2 border border-blue-500 bg-transparent text-cyan-500 rounded-md" required />
        <input type="email" placeholder="Email Address" className="w-full mb-4 px-4 py-2 border border-blue-500 bg-transparent text-cyan-500 rounded-md" required />
        <input type="text" placeholder="Phone Number" className="w-full mb-4 px-4 py-2 border border-blue-500 bg-transparent text-cyan-500 rounded-md" />
        <textarea placeholder="Your Message" className="w-full mb-4 px-4 py-2 border border-blue-500 bg-transparent text-cyan-500 rounded-md" rows={5} required></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Send Message</button>
      </form>
    </section>
    </div>
  );
};

export default Contact;
