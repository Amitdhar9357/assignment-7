import footerLog from '../../assets/assets/logo-footer.png'

const Footer = () => {
  return (
    <footer className="bg-slate-900 ">
      <img className='mx-auto' src={footerLog} alt="" />
      <div className="flex justify-around mt-4 mb-6 p-4">
        <div className=" w-1/3" >
          <h2 className="text-white mb-3">About</h2>
          <p className="text-gray-300">We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>

        <div >
          <h3 className=" text-white mb-3">Quick Links</h3>
          <ul className=" text-gray-300">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div >
          <h3 className=" text-white font-medium mb-3">Subscribe</h3>
          <p className=" text-gray-300 font-light ">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex mt-3 gap-1">
            <input className="rounded-md text-gray-400 px-2" type="email" name="" id="" placeholder="Enter your email" />
            <button className="border border-gray-300 py-1 px-4 rounded-lg bg-gradient-to-r from-[#f0b1a6] to-[#e4d48c]">Subscribe</button>
          </div>

        </div>
      </div>

      <hr />

      <p className="text-gray-300 text-center py-5"><small>@2024 Your Company All Rights Reserved.</small></p>
    </footer>
  );
};

export default Footer;