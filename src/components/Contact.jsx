export default function Contact() {
  return (
    <section className="bg-gray-400 flex items-center justify-center p-10">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-3xl font-bold mb-6 text-center pt-0">Contact us</h2>
        <p className="text-center text-gray-900 mb-6">
          We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label className=" flex justify-center text-gray-700 font-bold mb-2">Let's Chat.</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none py-1"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone No"
              className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none py-1"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="E-mail"
              className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none py-1"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-500 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-900"
          >
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
}
