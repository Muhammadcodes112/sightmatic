import React from "react";
function Home() {
  return (
    <>
      <div className="flex justify-center items-center space-x-60 ">
        {/* text div */}

        <section id="waitlist">
          <div className="mt-10 ml-4">
            <h1 className="font-bold text-4xl text-white tracking-wide">
              Unlock the Power of Visual <br />
              Data with SightMatic
            </h1>
            <p className="text-white text-base tracking-wider mt-5 italic">
              Seeing the invisible with AI
            </p>
            <button className="bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-white mt-5 rounded-3xl px-12 py-3 font-semibold tracking-widest">
              Join WaitList
            </button>
          </div>
        </section>

        {/* bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 */}

        {/* image div */}
        <div className="mt-5">
          <img src="AI.png" alt="" width={"530px"} />
        </div>
      </div>

      {/* SECOND DIV */}
      <div className="flex justify-center items-center space-x-40">
        {/* image div */}
        <div className="mt-8 -ml-36">
          <img src="AI2.png" alt="" width={"450px"} />
        </div>

        {/* text div */}
        <div className="mt-10">
          <div className="text-white mt-5 leading-7">
            <h1 className="font-bold text-3xl text-white mt-6 mb-2">
              Revolutionizing Image Recognition with AI
            </h1>
            <p className="leading-8 text-1xl">
              SightMatic is an innovative image recognition AI company that{" "}
              <br />
              specializes in the development of advanced visual technology.
              Their <br />
              mission is to make image recognition more accessible and
              affordable <br />
              for businesses of all sizes and individuals, and to help them
              unlock the potential <br />
              of visual data.
            </p>

            <button className="bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-white mt-10 rounded-3xl px-12 py-3 font-semibold tracking-widest">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="flex mt-20">
        <div className="p-2 w-80 bg-base-100 shadow-xl mt-6 text-slate-400 rounded-xl">
          <figure>
            <img
              src="https://www.pngmart.com/files/21/AI-PNG-Isolated-HD.png"
              alt="Shoes"
              className=" rounded-md "
            />
          </figure>
          <br />
          <div className="card-body">
            <h1 className=" font-bold text-white text-center">
              Anomaly Detection and Alerting
            </h1>
            <p className=" text-center text-sm">
              Receive instant alerts and notifications, <br />
              enabling proactive intervention <br />
              to address anomalies before they <br />
              escalate into significant problems.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="p-2 ml-10 w-80 bg-base-100 shadow-xl mt-6 text-slate-400 rounded-xl">
          <figure>
            <img
              src="https://www.pngmart.com/files/21/AI-PNG-File.png"
              alt="Shoes"
              width={"250px"}
              className=" rounded-md ml-10"
            />
          </figure>
          <br />
          <div className="card-body">
            <h1 className=" font-bold text-white text-center">
              Automated Image Tagging and Categorization
            </h1>
            <p className=" text-center text-sm">
              Effortlessly organize and manage your image <br />
              database with automated tagging and <br />
              categorization.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="p-2 ml-10 w-80 bg-base-100 shadow-xl  text-slate-400 rounded-xl">
          <figure>
            <img
              src="AI3.png"
              alt="Shoes"
              width={"200px"}
              className=" rounded-md ml-11"
            />
          </figure>
          <br />
          <div className="card-body">
            <h1 className=" font-bold text-white text-center">
              Discover the power of Image Recognition AI!
            </h1>
            <p className=" text-center text-sm">
              Introduce visitors to the concept of <br />
              Image Recognition AI, highlighting its <br /> potential impact and
              benefits.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="p-2 ml-10 w-80 bg-base-100 shadow-xl  text-slate-400 rounded-xl">
          <figure>
            <img
              src="AI4.png"
              alt="Shoes"
              width={"200px"}
              className=" rounded-md ml-10"
            />
          </figure>
          <br />
          <div className="card-body">
            <h1 className=" font-bold text-white text-center">
              Easy Integration with Existing Systems and Platforms
            </h1>
            <p className=" text-center text-sm">
              From APIs to SDKs, we provide flexible <br /> integration options
              to suit your
              <br /> technical requirements and preferences
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      {/* THIRD DIV */}
      <div className="flex mt-28">
        <div className="mt-20">
          <img src="AI5.png" alt="" width={"650px"} />
        </div>

        {/* <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 text-div"> */}
        <div className=" mt-28 ml-11 ">
          <h1 className="text-white text-3xl font-semibold">
            Unlock Hidden Insights with SightMatic's <br />
            AI-Powered Image Analysis
          </h1>
          <p className="text-white mt-5 mb-0">
            With SightMatic, businesses can gain a competitive edge by <br />
            harnessing the power of visual data. Our AI-powered image analysis{" "}
            <br />
            is fast, accurate, and scalable, making it an invaluable tool for{" "}
            <br />
            companies looking to unlock the full potential of their data. <br />
            be first to hear about us, join our{" "}
            <a href="#waitlist">
              <span className="underline font-semibold hover:cursor-pointer">
                WaitList
              </span>{" "}
              today!
            </a>
          </p>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Home;
