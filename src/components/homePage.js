import styles from "../styles/Home.module.css";
import Cards from "./cards";
import ImageCard from "./imagesCard";

const HomePage = () => {
  const imageArray = [
    "https://www.egniol.co.in/_next/static/media/slide_news8.4a0579be.svg",
    "https://www.egniol.co.in/_next/static/media/slide_news10.8a1e8046.svg",
    "https://www.egniol.co.in/_next/static/media/slide_news4.914287db.svg",
    "https://www.egniol.co.in/_next/static/media/slide_news9.09d7eb66.svg",
    "https://www.egniol.co.in/_next/static/media/slide_news1.ffe2db3c.svg",
    "https://www.egniol.co.in/_next/static/media/slide_news8.4a0579be.svg",
  ];
  
  const imageArraySec = [
    "https://www.egniol.co.in/_next/static/media/1.2acf0873.svg",
    "https://www.egniol.co.in/_next/static/media/22.08c31c38.svg",
    "https://www.egniol.co.in/_next/static/media/18.a317936b.svg",
    "https://www.egniol.co.in/_next/static/media/14.943c5454.svg",
    "https://www.egniol.co.in/_next/static/media/11.ccfcfa66.svg",
    "https://www.egniol.co.in/_next/static/media/20.d28944d2.svg",
    "https://www.egniol.co.in/_next/static/media/11.ccfcfa66.svg",
    
  ];
  
  return (
    <div className={styles.box}>
      <div className={styles.mainContainer}>
        <div className="flex flex-col justify-center items-center md:mb-20 mb-12 text-[#FFFFFF]">
          <h1 className={`${styles.heading} md:text-[3.9rem] text-4xl font-CustomSemiBold leading-none text-center`}>
            Hum Badhayenge <br />
            Aapka Business
          </h1>
          <p className="text-center md:text-start text-sm lg:text-[1.5rem] font-custom1 md:mt-6 mt-4 text-[#F1F3F6] mx-4">
            One stop solution for MSMEs and startups
          </p>
          <button className="bg-[#03518F] px-7 py-3 text-[15px] font-CustomSemiBold rounded-full text-white md:mt-10 mt-8">
            Learn How
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <div className="flex justify-center items-center mt-10">
          <div className="md:px-12 px-8">
            <video
              className={`rounded-xl ${styles.videoBox}`}
              width="1200px"
              height="1000px"
              controls
              playsInline
              autoPlay
              loop
            >
              <source
                src="https://www.egniol.co.in/_next/static/videos/homevideo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className={styles.cardContainer}>
          {imageArray.map((imageSrc, index) => (
            <ImageCard key={imageSrc} imageSrc={imageSrc} index={index} />
          ))}
        </div>
        <Cards />
        <div className={` ${styles.secCard}`}>
          {imageArraySec.map((imageSrc, index) => (
            <ImageCard key={imageSrc} imageSrc={imageSrc} index={index}/> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
