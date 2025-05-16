const ContactPage = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Form */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Contact Info */}
            <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Our Office</h3>
              <p>Jl. Contoh No. 123, Kota Prefab</p>
              <p className="mt-2">Email: info@prefab.com</p>
              <p>Phone: +62 812 3456 7890</p>
  
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-gray-300">Facebook</a>
                  <a href="#" className="hover:text-gray-300">Instagram</a>
                  <a href="#" className="hover:text-gray-300">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  