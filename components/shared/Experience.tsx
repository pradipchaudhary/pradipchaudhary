import React from "react";

// ListItem Component with TypeScript
interface ListItemProps {
    text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
    return (
        <li className="flex items-start group rounded-lg transition-all duration-300">
            <span className="mr-3 mt-1.5 flex-shrink-0">
                <svg
                    width={12}
                    height={12}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#6f49d8]"
                >
                    <g clipPath="url(#clip0_980_24852)">
                        <path
                            d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                            fill="currentColor"
                        />
                        <path
                            d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                            fill="currentColor"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_980_24852">
                            <rect width={20} height={20} fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>
            <span className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">
                {text}
            </span>
        </li>
    );
};

// ExperienceItem Component with TypeScript
interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities: string[];
    markerColor: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    title,
    company,
    period,
    description,
    responsibilities,
}) => {
    return (
        <div className="relative pt-16 pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-[#6f49d8]/20">
            {/* Timeline Dot */}
            <div className="absolute left-[-5.5px] top-[5.25rem] sm:top-[5.55rem] h-3 w-3">
                <div className="h-full w-full rounded-full bg-[#6f49d8] ring-[6px] ring-[#6f49d8]/10" />
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-200 mb-1">
                        {title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-slate-400">
                        <span className="font-medium">{company}</span>
                        {description && (
                            <>
                                <span className="hidden sm:inline">•</span>
                                <span>{description}</span>
                            </>
                        )}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-slate-500">
                        {period}
                    </div>
                </div>

                <ul className="space-y-3">
                    {responsibilities.map((task, index) => (
                        <ListItem key={index} text={task} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Experience Component with TypeScript
const Experience: React.FC = () => {
    // Experience data array
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Sarathi Technosoft Pvt. Ltd",
            companyUrl: "https://www.sarathitechnosoft.com",
            period: "Aug 2021 - Apr 2024",
            description: "",
            responsibilities: [
                "Built and maintained dynamic web applications using React, Node.js, and MongoDB or MySQL.",
                "Collaborated with cross-functional teams to design and implement new features.",
                "Implemented RESTful APIs and integrated with third-party services.",
                "Optimized front-end performance and enhanced user experience across devices.",
            ],
            markerColor: "bg-teal-400",
        },
        {
            title: "Frontend Engineer ",
            company: "Softbenz Infosys",
            companyUrl: "https://softbenz.com",
            period: "Sep 2020 - Jul 2021",
            description: "Software Company",
            responsibilities: [
                "Developed single-page applications (SPAs) using React.js and Redux.",
                "Created responsive and accessible UI components with Tailwind CSS.",
                "Integrated REST APIs to fetch data dynamically and ensure a smooth UX.",
                "Worked with the design team to implement user-friendly and visually appealing designs.",
            ],
            markerColor: "bg-teal-300",
        },
        {
            title: "Junior Frontend Developer",
            company: "Purwanchal Digital Media Technologies Pvt. Ltd.",
            companyUrl: "https://www.purwanchaldigital.com",
            period: "Feb 2016 - May 2021",
            description: "",
            responsibilities: [
                "Developed responsive websites with HTML5, CSS3, and JavaScript.",
                "Collaborated with senior developers to implement features using PHP.",
                "Optimized websites for performance, SEO, and accessibility standards.",
                "Maintained and updated websites, ensuring they were secure and up to date.",
            ],
            markerColor: "bg-teal-300",
        },
    ];

    return (
        <section className="py-16" id="experience">
            <div className="space-y-1">
                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-200">
                        💼 Experience
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 ml-12">
                        My professional journey and roles
                    </p>
                </div>

                <div
                    className="pl-5"
                    style={{
                        marginTop: "-34px",
                    }}
                >
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
