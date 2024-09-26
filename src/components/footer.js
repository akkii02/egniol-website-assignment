const Footer = () => {
    return (
      <footer className="bg-[#151515] text-white py-8 lg:py-[100px] px-8 md:px-[100px]">
        <a
          className="z-20 block lg:hidden fixed bottom-24 right-8 p-4 bg-[#191E2D] bg-opacity-85 rounded-2xl shadow-lg backdrop-blur-0 transition-all duration-300 hover:bg-opacity-70 group"
          href="/ai"
        >
          <div className="relative">
            <img
              alt="AI Assistant"
              width="16"
            height="22"
              src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMobileAi.b8a88918.png&w=96&q=75"
                />
            <div className="absolute inset-0 opacity-50 bg-[#191E2D] blur-md rounded-full group-hover:opacity-75 transition-opacity duration-300"></div>
          </div>
        </a>
  
        <a
          className="z-20 group fixed bottom-4 right-8 p-6 bg-[#03518F] rounded-xl flex gap-1"
          href="tel:18005717000"
        >
          <img
            alt="egniolimage"
            loading="lazy"
            width="16"
            height="22"
            decoding="async"
            // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone.35c62885.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone.35c62885.png&amp;w=32&amp;q=75 2x"
            src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone.35c62885.png&w=16&q=75"
          />
          <span className="hidden group-hover:block">Toll free number</span>
        </a>
  
        <div className="flex flex-wrap lg:flex-nowrap md:justify-between gap-6 lg:gap-0 w-full">
          <div className="flex flex-wrap md:flex-col gap-2 lg:w-1/3">
            <img alt="Logo" width="34"
              height="36"
              decoding="async"
              className="w-10 h-10"
               src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dd22b9ae.png&w=48&q=75"
            />
            <p className="lg:w-72">
              We are 360° business solution providers dedicated to helping you grow at every stage of your journey.
            </p>
          </div>
  
          {/* Desktop Links */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-6 text-sm md:mr-4 w-2/3">
            <div className="flex flex-col gap-2">
              <a href="/">Home</a>
              <a href="/about-us">About us</a>
              <a href="/our-services">Services</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#partner-section">Partners</a>
              <a href="/success-stories">Success Stories</a>
              <a href="/contact-us">Contact Us</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/experts">Experts</a>
              <a href="/privacy-policy">Privacy policy</a>
              <a href="/terms-condition">Terms &amp; Conditions</a>
            </div>
          </div>
  
          {/* Mobile Links */}
          <div className="md:hidden flex gap-[45px] my-3">
            <div className="flex flex-col gap-2">
              <a href="/">Home</a>
              <a href="/about">About us</a>
              <a href="/our-services">Services</a>
              <a href="#partner-section">Partners</a>
              <a href="/success-stories">Success Stories</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/experts">Experts</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/privacy-policy">Privacy policy</a>
              <a href="/terms-condition">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
  
        {/* Subscribe Section */}
        <div className="flex flex-wrap md:flex-row justify-end w-full my-6 md:my-12 gap-6 md:gap-0">
          <div className="w-full md:w-auto">
            <div className="flex items-center">
              <input
                className="bg-transparent rounded-l-md pl-3 border border-[#838383] py-3 text-[#838383] w-full md:w-[300px] text-xs placeholder:text-[10px]"
                placeholder="Enter your email to get latest updates"
                type="email"
              />
              <button className="bg-[#03518F] ml-[1px] md:ml-0 py-[0.58rem] md:py-[0.60rem] px-4 md:px-6 font-medium rounded-r-md text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Disclaimer Section */}
        <div className="flex flex-col text-[12px] md:text-sm">
          <p className="font-custom1">
            <span className="font-CustomSemiBold">Disclaimer: </span>
            We are a Start-up consultant in India and professionals in Start-up consultation and understand the requirements
            of today enterprises. We are merely a consultancy service-providing company and not in any affiliation/collaboration with
            any Government/Non-Government Agency / Institutions / Organization / Department.
          </p>
          <p className="mt-4">
            <span className="font-CustomSemiBold">Note:</span> Payments for services are only accepted in the name of Egniol
            Services Private Limited, Egniol Consultancy Services, Egniol Financial Services Private Limited, Egniol Digital
            Services Private Limited, and the type of account is solely “Current Account” via NEFT/IMPS/RTGS and digital payment wallets
            (Cash Free, Razor pay, Aggrepay) and we do not accept payments on personal accounts or under any other name.
          </p>
        </div>
  
        <hr className="my-7 md:my-12 border-[#83838340]" />
  
        {/* Footer Links and Info */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-baseline text-sm">
          <div className="flex flex-col md:flex-row items-center lg:items-baseline order-3 lg:order-first">
            <p className="text-sm opacity-60 mb-2 md:mb-0">EGNIOL © 2024, All rights reserved.</p>
            <div className="hidden md:flex flex-row items-center md:px-3 gap-2 lg:gap-x-4 mb-4 md:mb-0">
              <a href="">Privacy notice</a>
              <a href="">Legal</a>
              <a href="">Cookie settings</a>
            </div>
          </div>
  
          {/* Contact Info */}
          <div className="flex justify-center items-center flex-col-reverse">
            <div className="flex justify-center items-center gap-2 md:gap-x-6 text-sm order-1 lg:order-2 mb-4 lg:mb-0">
              <a href="mailto:info@egniol.co.in" className="flex items-center gap-x-2">
                <img
                  alt="Email icon"
                  width="18px"
                  height="15px"
                  decoding="async"
                  src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmail.cee9d063.png&w=32&q=75"
                />
                <span>info@egniol.co.in</span>
              </a>
              <a href="tel:18005717000" className="flex items-center gap-x-2">
                <img
                  alt="Phone icon"
                  width="16"
                  height="16"
                  decoding="async"                  
                  src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcall.4ddf14d5.png&w=16&q=75"
                />
                <span>1800 571 7000</span>
              </a>
            </div>
          </div>
  
          {/* Social Media Icons */}
          <div className="flex items-center gap-6 order-2 lg:order-3 mb-4 lg:mb-0">
            <a href="https://www.facebook.com/EgniolServices/">
              <img
                alt="Facebook"
                width="15px"
                height="15px" 
                 src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.d76c71f6.png&w=32&q=75"
              />
            </a>
            <a href="https://www.linkedin.com/company/egniol-services-private-limited/">
              <img
                alt="LinkedIn"
                width="15px"
                height="15px" 
                src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flinkdin.3fe3d646.png&w=32&q=75"
              />
            </a>
            <a href="https://www.instagram.com/egniol/">
              <img
                alt="Instagram"
                width="15px"
                height="15px" 
                src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finsta.c2e6edad.png&w=32&q=75"
                />
            </a>
            <a>
              <img
              alt="youtube"
              width="15px"
              height="15px" 
              src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finsta.c2e6edad.png&w=32&q=75"
              />
            </a>
            <a>
              <img
              alt="whatsapp"
              width="15px"
              height="15px" 
              src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyoutube.d9acf919.png&w=32&q=75"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  