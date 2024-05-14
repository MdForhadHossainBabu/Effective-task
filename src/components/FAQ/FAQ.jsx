const FAQSection = () => {
  return (
    <div className="w-full h-[42rem] my-2">
      <h2 className="text-5xl font-bold text-center">
        Frequently asked <span className="text-rose-500">questions (FAQ)</span>{' '}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img className=" w-full my-4 mt-12 lg:h-[69%] shadow-2xl drop-shadow-lg"
            src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1715644800&semt=sph"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-4 lg:mt-12">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              What are the specific requirements and expectations for the
              project?
            </div>
            <div className="collapse-content">
              <p>
                The project should be submitted in [format, e.g., Word document,
                presentation] and be [length, e.g., 10 pages, 15-minute
                presentation] long. The content should focus on [mention key
                areas of focus]. You can find a detailed breakdown of the
                requirements in the project rubric or handout.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              How will the project be graded?
            </div>
            <div className="collapse-content">
              <p>
                The project will be graded based on a rubric that considers
                aspects like [mention key grading criteria, e.g., research,
                content accuracy, organization, clarity, formatting]. You can
                find the rubric on [location, e.g., course website, handout].
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Are there any group work guidelines?
            </div>
            <div className="collapse-content">
              <p>
                Yes, there are group work guidelines outlined in the [location,
                e.g., project instructions, course website]. These guidelines
                cover aspects like [mention key areas, e.g., group member roles,
                communication expectations, conflict resolution]
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Can we get an extension on the deadline?
            </div>
            <div className="collapse-content">
              <p>
                Extensions may be granted on a case-by-case basis for documented
                emergencies. Please contact [instructor name] at least
                [**number] days before the deadline to discuss your situation.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              What are the acceptable sources for information?
            </div>
            <div className="collapse-content">
              <p>
                You should use credible sources like [mention acceptable
                sources, e.g., peer-reviewed journals, reputable news websites,
                government websites]. A list of recommended sources might also
                be provided by your instructor.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              How many sources are required?
            </div>
            <div className="collapse-content">
              <p>
                A minimum of [number] sources are required, but you may use more
                to strengthen your project.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              How should we properly cite our sources?
            </div>
            <div className="collapse-content">
              <p>
                You should use the [specific citation style, e.g., APA, MLA]
                style for citations and references. A guide on proper citation
                formatting can be found in [location, e.g., library website,
                style guide].
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;