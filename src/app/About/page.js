"use client"
import styles from "../../styles/About.module.css";

const About = () => {
    const cardData = [
        {
          title: "WE IMPACTED",
          items: ["Millions of Individuals", "Thousands of Businesses"],
        },
        {
          title: "OUR EXPERTISE",
          items: ["Financial Services", "Business Growth", "Marketing Strategies"],
        },
        {
          title: "WE HELP YOU SAVE",
          items: ["Time", "Money", "Resource"],
        },
        {
            title:"OUR COMMITMENT",
            items:["Top-quality service", "Building trust","Long-term relationships"]
        }
      ];
    return (
        <>
        <div className={`${styles.mainContainer} flex flex-col justify-between items-center gap-4 md:pt-44 pt-28 gradient-header w-full`}>
            <div className="flex flex-col md:flex-row justify-center items-center lg:gap-52 md:gap-16 md:mb-20">
                <div className="text-center md:text-left">
                    <div className="flex gap-2 justify-center">
                        <h1 className="flex font-semibold text-[#FFFFFF] text-3xl md:text-5xl mb-8">
                            WE ARE
                        </h1>
                        <span className="font-semibold text-[#6085E3] text-3xl md:text-5xl mb-8">
                            EGNIOL
                        </span>
                    </div>
                    <p className="text-[14px] md:text-base text-[#F1F3F6] w-full">
                        Your dedicated partners in business growth.
                    </p>
                    <p className="text-[14px] md:text-base text-[#F1F3F6] w-full">
                        Experts in Taxes, Funding, and Marketing success.
                    </p>
                </div>
                <div className="px-16 md:pt-0">
                    <img 
                        alt="Egniol Logo"
                        className="h-56 w-56" 
                        src="https://www.egniol.co.in/_next/static/media/hederLogo.773d32c0.svg"
                        style={{ color: 'transparent' }} 
                    />
                </div>
            </div>
        </div>
        <div className="bg-[#F1F7FF] py-10 md:py-20 px-4 xl:px-0">
      <div className="md:container md:mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 mx-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg w-full xl:w-[300px] mx-auto pt-4 xl:pt-12 xl:pb-7 relative group hover:border-orange-500 hover:!bg-gradient-to-b from-orange-100/30 to-orange-100/30 transition-all duration-300"
            style={{
              background: "linear-gradient(149.28deg, rgb(255, 255, 255) 0%, rgb(234, 237, 252) 100%)",
            }}
          >
            <div className="hidden md:block absolute top-0 right-0">
              <svg
                width="60"
                height="58"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 0V2.98073V15.8287H33.3949V48H49.6355V2.98073V0H0.5Z" fill="#EE4523"></path>
              </svg>
            </div>
            <div className="md:hidden absolute top-0 right-0">
              <svg
                width="30"
                height="28"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 0V2.98073V15.8287H33.3949V48H49.6355V2.98073V0H0.5Z" fill="#EE4523"></path>
              </svg>
            </div>
            <div className="text-left md:mx-8 pl-4 md:pl-0">
              <h3 className="mb-2 md:mb-6 text-xl md:text-4xl text-[#03518F] bebas-neue-regular font-bold group-hover:text-orange-500">
                {card.title}
              </h3>
              <ul className="text-[#49484E] space-y-2 pb-4">
                {card.items.map((item, idx) => (
                  <div className="flex w-full" key={idx}>
                    <li className="flex font-semibold items-center gap-2 text-[11px] xl:text-lg">
                      <svg
                        width="7"
                        height="10"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.20508 0.722656L1.96171 1.00478L0.912686 2.22083L4.02617 4.90666L1.39942 7.95165L2.93658 9.27768L6.61235 5.01663L6.85572 4.73451L2.20508 0.722656Z"
                          fill="#EE4523"
                        />
                      </svg>
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  <div className="mx-auto py-16 bg-[#EAF3FE] w-full px-8 md:px-6 lg:px-0">
      <h2 className="text-5xl font-semibold text-center mb-7">Our Journey</h2>
      <p className="text-center md:text-lg mb-10">From Vision to Reality</p>
      <div className="relative lg:w-3/5 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="w-1/2 h-1.5 md:h-2 mb-7 bg-[#03518F] transition-colors duration-300"></div>
          <div className="flex flex-col items-center cursor-pointer">
            <svg
              className="size-7 md:size-auto transition-transform duration-300 opacity-100"
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M6.08398 0.828125L5.03014 1.88197L0.487697 6.42441L12.1178 18.0545L0.74354 29.4288L6.48546 35.1707L22.4022 19.254L23.456 18.2002L6.08398 0.828125Z"
                fill="#EE4523"
              ></path>
            </svg>
            <span className="mt-2 opacity-100 transition-colors duration-300 text-[#03518F] font-semibold md:text-2xl">
              2018
            </span>
          </div>
          <div className="w-full h-1.5 md:h-2 mb-7 bg-[#03518F] transition-colors duration-300"></div>
          <div className="flex flex-col items-center cursor-pointer">
            <svg
              className="size-7 md:size-auto transition-transform duration-300 opacity-100"
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M6.08398 0.828125L5.03014 1.88197L0.487697 6.42441L12.1178 18.0545L0.74354 29.4288L6.48546 35.1707L22.4022 19.254L23.456 18.2002L6.08398 0.828125Z"
                fill="#EE4523"
              ></path>
            </svg>
            <span className="mt-2 opacity-100 transition-colors duration-300 text-[#03518F] font-semibold md:text-2xl">
              2020
            </span>
          </div>
          <div className="w-full h-1.5 md:h-2 mb-7 bg-[#03518F] transition-colors duration-300"></div>
          <div className="flex flex-col items-center cursor-pointer">
            <svg
              className="size-7 md:size-auto transition-transform duration-300 opacity-100"
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M6.08398 0.828125L5.03014 1.88197L0.487697 6.42441L12.1178 18.0545L0.74354 29.4288L6.48546 35.1707L22.4022 19.254L23.456 18.2002L6.08398 0.828125Z"
                fill="#EE4523"
              ></path>
            </svg>
            <span className="mt-2 opacity-100 transition-colors duration-300 text-[#03518F] font-semibold md:text-2xl">
              2022
            </span>
          </div>
          <div className="w-full h-1.5 md:h-2 mb-7 bg-[#03518F] transition-colors duration-300"></div>
          <div className="flex flex-col items-center cursor-pointer">
            <svg
              className="size-7 md:size-auto transition-transform duration-300 -rotate-[45deg] opacity-100"
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M6.08398 0.828125L5.03014 1.88197L0.487697 6.42441L12.1178 18.0545L0.74354 29.4288L6.48546 35.1707L22.4022 19.254L23.456 18.2002L6.08398 0.828125Z"
                fill="#EE4523"
              ></path>
            </svg>
            <span className="mt-2 opacity-100 transition-colors duration-300 text-[#03518F] font-semibold md:text-2xl">
              2024
            </span>
          </div>
          <div className="w-1/2 h-1.5 md:h-2 mb-7 bg-[#03518F] transition-colors duration-300"></div>
        </div>
        <div className="flex justify-around gap-6 md:gap-4 items-center mt-16">
          <div className="w-1/2 md:w-3/5 h-full">
            <img
              alt="egniolImage"
              className="h-[170px] md:h-[300px] mx-auto object-contain"
              src="https://www.egniol.co.in/_next/static/media/number2.ae0ad109.svg"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="flex flex-col font-semibold text-[10px] md:text-lg w-1/2 md:w-2/5 gap-5 md:gap-10">
            <div className="flex">
              <p className="md:w-28 text-gray-600">Assisted:</p>
              <p className="pl-4 md:pl-0 md:w-60">45,000+ Businesses</p>
            </div>
            <div className="flex">
              <p className="md:w-28 text-gray-600">Services:</p>
              <p className="pl-4 md:pl-0 md:w-60">
                Certification, Funding, Grants, Digital Marketing, Legal,
                Compliance
              </p>
            </div>
            <div className="flex">
              <p className="md:w-28 text-gray-600">Offices:</p>
              <p className="pl-4 md:pl-0 md:w-60">
                Ahmedabad, Vadodara, Chennai, Delhi, Toronto Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default About;
