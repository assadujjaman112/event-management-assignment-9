import Footer from "../components/footer/Footer";

const Features = () => {
  return (
    <div className="py-16 h-screen bg-base-200">
      <h1 className="text-xl md:text-5xl font-bold text-center mb-8 ">
        Top-Notch <span className="text-red-400">Features</span> Included
      </h1>
      <div className="w-4/5 mx-auto my-5">
        <h1 className="text-3xl font-bold ">Support</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="mt-5 flex-1 bg-gray-200 px-5 pt-5 pb-10 border-2 rounded-lg">
            <h2 className="text-center text-xl text-red-400 font-semibold my-4 ">
              Detailed Document
            </h2>
            <p>
              We offer user-friendly documentations that provide step-by-step
              instructions for any kind of problem or services. These
              documentations cover everything to troubleshooting common
              issues.Our documentation is accessible 24/7, empowering you to
              find answers and assistance whenever you need it, day or night.Our resources empower you to troubleshoot and solve issues independently, reducing reliance on external support.
            </p>
          </div>
          <div className="mt-5 flex-1 bg-gray-200 px-5 pt-5 pb-10 border-2 rounded-lg">
            <h2 className="text-center text-xl text-red-400 font-semibold my-4 ">
              Premium Support
            </h2>
            <p>
            Our team is here exclusively to support you. Your questions, concerns, and feedback are our top priority. We're invested in your success, and we're always ready to assist you in any way we can.Our support team is not just knowledgeable; they're also friendly and approachable. We believe that a warm and courteous interaction can make your experience more pleasant and effective. We're here to help and make you feel valued.
            </p>
          </div>
          <div className="mt-5 bg-gray-200 flex-1  px-5 pt-5 pb-10 border-2 rounded-lg">
            <h2 className="text-center text-xl text-red-400 font-semibold my-4 ">
              Video support
            </h2>
            <p>
            Unlock the full potential of your template with our comprehensive video tutorials. We've gone the extra mile to ensure that setting up your template is not only effortless but also an enriching learning experience. Our step-by-step video tutorials are thoughtfully crafted to cater to users of all levels, whether you're a newcomer looking for guidance or an experienced user seeking to refine your skills.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Features;
