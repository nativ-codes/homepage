import { PrivacyPolicy } from '../../../constants/legal';

function Xido() {
  return (
    <section className="flex lg:h-screen w-full flex-col sm:flex-row">
      <div className="bg-dark relative flex justify-center items-center h-screen sm:w-1/4">
        <div className="font-[LemonMilk] text-white text-5xl tracking-wider">
          XIDO
        </div>
        <div className="hexagon-icon hidden z-10 lg:block absolute right-[-65px] top-[96px]">
          <svg viewBox="0 0 512 512" width="130" height="130">
            <clipPath id="hexagon">
              <path
                id="heart"
                d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667
							c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408s3.648-0.469,5.291-1.408l224-128
							c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z"
              />
            </clipPath>

            <image
              href="/assets/images/xido-logo.png"
              width="100%"
              height="100%"
              clipPath="url(#hexagon)"
            />
          </svg>
        </div>
      </div>
      <div className="about-section-right relative bg-white p-[56px] lg:p-[96px] h-screen sm:w-3/4 overflow-y-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-5">
          {PrivacyPolicy.title}
        </h1>
        <p className="text-gray-600 mb-8">{PrivacyPolicy.lastUpdated}</p>

        <div className="space-y-8">
          {PrivacyPolicy.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              )}
              {section.sections && (
                <div className="space-y-4 pl-4">
                  {section.sections.map((subSection, subIndex) => (
                    <p key={subIndex} className="text-gray-700 leading-relaxed">
                      {subSection.content}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Xido;
