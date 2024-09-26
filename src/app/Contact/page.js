import ContactForm from "@/components/contactForm";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
    return (
        <>
        <div className={`${styles.mainContact} flex flex-col justify-between items-center gap-4 pt-44 gradient-header w-full`}>
            <div className="flex flex-wrap justify-center items-center xl:gap-52 gap-16 mb-16">
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-center text-[#FFFFFF] text-3xl md:text-5xl">Get a Free</h1>
                    <h1 className="font-bold text-center text-[#FFFFFF] text-3xl md:text-5xl">Consultation Today.</h1>
                    <h1 className="font-bold text-center text-[#FFFFFF] text-3xl md:text-5xl">Give us a Call!</h1>
                </div>
                <div className="px-16">
                    <img 
                        alt="Company logo or header logo" 
                        className="h-60 w-60" 
                        src="https://www.egniol.co.in/_next/static/media/headerLogo.6013709d.svg" 
                        style={{ color: 'transparent' }}
                    />
                </div>
            </div>
        </div>
        <ContactForm/>
        </>
    );
};

export default Contact;
