const Footer = () => {
    return (
      <footer className="bg-white text-black py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Work Section */}
            <div>
              <h3 className="font-bold mb-2">Work</h3>
              <ul>
                <li>FamilyFund</li>
                <li>Unseal</li>
                <li>Phobia</li>
                <li>
                  <a href="#" >See all →</a>
                </li>
              </ul>
            </div>
  
            {/* Company Section */}
            <div>
              <h3 className="font-bold mb-2">Company</h3>
              <ul>
                <li>About</li>
                <li>Process</li>
                <li>Blog</li>
                <li>
                  <a href="#" >Contact us</a>
                </li>
              </ul>
            </div>
  
            {/* Connect Section */}
            <div>
              <h3 className="font-bold mb-2">Connect</h3>
              <ul>
                <li>
                  <a href="#" >Facebook</a>
                </li>
                <li>
                  <a href="#" >Instagram</a>
                </li>
                <li>
                  <a href="#" >GitHub</a>
                </li>
                <li>
                  <a href="#" >Dribbble</a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter Subscription Section */}
            <div>
              <h3 className="font-bold mb-2">Sign up for our newsletter</h3>
              <p className="mb-4">Subscribe to get the latest design news, articles, resources, and inspiration.</p>
              <input 
                type="email" 
                placeholder="Email address" 
                className="border border-gray-300 p-2 rounded w-full" 
              />
              <button className="mt-2 bg-black text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  