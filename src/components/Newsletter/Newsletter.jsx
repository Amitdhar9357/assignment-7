
const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-[#c7dfe6] to-[#928875] border border-gray-300 rounded-lg p-9 mb-7">
      <h3 className="text-center text-3xl font-bold">Subscribe to our Newsletter</h3>
      <p  className="text-center text-xl font-medium">Get the latest updates and news right in your inbox!</p>

      <div className=" flex gap-2 justify-center mt-3">
        <input className="rounded-md text-gray-400 px-2" type="email" name="" id="" placeholder="Enter your email" />
        <button className="border border-gray-300 py-2 px-5 rounded-lg bg-gradient-to-r from-[#f0b1a6] to-[#e4d48c]">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;