const FAQSection = () => {
  return (
    <div className="w-full h-[42rem] my-2">
      <h2 className="text-5xl font-bold text-center">
        Frequently asked <span className="text-rose-500">questions (FAQ)</span>{' '}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;