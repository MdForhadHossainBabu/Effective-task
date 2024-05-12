const FAQSection = () => {
  return (
    <div className="w-full h-[42rem] my-2">
      <h2 className="text-5xl font-bold text-center">
        Frequently asked <span className="text-rose-500">questions (FAQ)</span>{' '}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <div>
          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">

              <div className="mt-8 space-y-8 lg:mt-12">
                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      How i can play for my appoinment ?
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </button>

                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi
                    ab maxime cum laboriosam recusandae facere dolorum veniam
                    quia pariatur obcaecati illo ducimus?
                  </p>
                </div>

                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      Is the cost of the appoinment covered by private health
                      insurance?
                    </h1>

                    <span className="text-white bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      Do i need a referral?
                    </h1>

                    <span className="text-white bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      What are your opening house?
                    </h1>

                    <span className="text-white bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <button className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      What can i expect at my first consultation?
                    </h1>

                    <span className="text-white bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;