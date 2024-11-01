

const Footer = () => {
  return (
    <footer className="bg-black">
      <img src="" alt="" />
      <div className="flex justify-around mb-6 p-4">
        <div >
          <h2 className="text-white">About</h2>
          <p className="text-gray-300">We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        
        <div >
          <h3 className=" text-white">Quick Links</h3>
          <ul className=" text-gray-300">  
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div >
          <h3 className=" text-white">Subscribe</h3>
          <p className=" text-gray-300">Subscribe to our newsletter for the latest updates.</p>
        </div>
      </div>

      <hr />

      <p className="text-gray-300 text-center py-5"><small>@2024 Your Company All Rights Reserved.</small></p>
    </footer>
  );
};

export default Footer;