const Cards = () => {
    const card = [
        {
            title: "Business Setup",
            description: "Company Registrations, Certifications and more..",
            imgSrc: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstage1.a8275048.webp&w=256&q=75",
            imgAlt: "Business Setup",
        },
        {
            title: "Business Growth",
            description: "Grants, Loans, Funding's and more..",
            imgSrc: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstage2.98333348.webp&w=256&q=75",
            imgAlt: "Business Growth",
        },
        {
            title: "Business Expansion",
            description: "Web Development, Marketing services & more..",
            imgSrc: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstage3.413b9c7b.webp&w=256&q=75",
            imgAlt: "Business Expansion",
        },
        {
            title: "Business Protection",
            description: "Legal & Compliances..",
            imgSrc: "https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstage4.ace7a85b.webp&w=256&q=75",
            imgAlt: "Business Protection",
        },
    ]
    return (
        <div className="bg-blue-50 pt-8 w-full md:px-10 px-4 mb-10 pb-16">
            <div className="md:px-4">
                <h2 className="md:block hidden text-4xl font-CustomSemiBold text-center">
                    Our Expertise helps your startup
                </h2>
                <h2 className="md:block hidden text-4xl font-CustomSemiBold text-center mb-10">
                    grow at every stage
                </h2>
                <h2 className="md:hidden text-4xl font-CustomSemiBold text-center mb-10">
                    Our Services
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-2">
                    {card.map((card, index) => (
                        <div
                            key={index}
                            className="md:h-[300px] flex flex-col justify-between bg-white md:p-6 rounded-md shadow-lg hover:shadow-xl md:hover:-translate-y-3 transition hover:border border-[#03518F] duration-500"
                            style={{
                                background: "linear-gradient(rgb(255, 255, 255) 0%, rgb(234, 237, 252) 100%)",
                            }}
                        >
                            <div>
                                <div className="flex md:hidden justify-center items-center h-20 w-20 mx-auto mt-2">
                                    <img
                                        alt={card.imgAlt}
                                        loading="lazy"
                                        width="300"
                                        height="300"
                                        src={card.imgSrc}
                                        className="transition-opacity duration-300"
                                    />
                                </div>
                                <div className="hidden md:flex justify-center items-center h-20 w-20 md:h-28 md:w-28 mx-auto mt-2">
                                    <img
                                        alt={card.imgAlt}
                                        loading="lazy"
                                        width="250"
                                        height="250"
                                        src={card.imgSrc.replace('.gif', '.webp')} // Example for a different image source
                                        className="transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                            <div className="md:mt-auto mt-3">
                                <h3 className="lg:text-base text-base font-CustomSemiBold text-center">
                                    {card.title}
                                </h3>
                                <p className="text-[#49484E] text-[10px] md:text-sm lg:text-[12px] text-center mb-2 mx-1 md:mx-auto">
                                    {card.description}
                                </p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="relative w-full z-10 md:py-2 xl:px-2 rounded-b-md md:rounded-3xl bg-[#03518F] border border-[#03518F] transition-colors duration-300 overflow-hidden">
                                    <span className="relative z-20 text-xs md:text-lg text-white">
                                        Explore
                                    </span>
                                    <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full transition-transform duration-300 ease-in-out"></div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
