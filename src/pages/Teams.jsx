import teamData from "../data/teamData";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Teams = () => {
    return (
        <div className="px-5 py-12 max-w-7xl mx-auto">

            {/*EXECUTIVE BODY */}
            <h2 className="text-3xl font-bold mb-12 text-center text-[#19366b]">
                Executive Body
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
                {teamData.executive.map((member, index) => (
                    <div
                        key={index}
                        className="group bg-white border rounded-2xl p-6 text-center
                        transition-all duration-300
                        hover:-translate-y-2 hover:shadow-xl"
                    >
                        {/* IMAGE (RECTANGLE, SMALLER) */}
                        <img
                            src={member.image || "/team/placeholder.jpg"}
                            alt={member.name}
                            className="w-40 h-40 mx-auto rounded-full
                            object-cover object-top mb-5
                            ring-4 ring-gray-100
                          group-hover:ring-[#F6170F]
                            transition-all duration-300"
                        />


                        <h3 className="text-sm uppercase tracking-wide text-gray-500">
                            {member.role}
                        </h3>
                        <p className="text-lg font-semibold text-[#19366b]">
                            {member.name}
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex justify-center gap-5 mt-4
                            opacity-0 translate-y-3
                            group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-300">
                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-[#0A66C2] text-xl"
                                >
                                    <FaLinkedin />
                                </a>
                            )}
                            {member.instagram && (
                                <a
                                    href={member.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-[#E1306C] text-xl"
                                >
                                    <FaInstagram />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/*  SUB TEAMS */}
            <h2 className="text-3xl font-bold mb-14 text-center text-[#19366b]">
                Sub Teams
            </h2>

            <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
                {teamData.teams.map((team, index) => {
                    const member = team.assistantCoordinators?.[0];

                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center
                ${index === teamData.teams.length - 1 ? "lg:col-span-3" : ""}
              `}
                        >
                            {/* TEAM NAME */}
                            <h3 className="text-xl font-semibold mb-6 text-[#19366b] text-center">
                                {team.teamName}
                            </h3>

                            {/* ASSISTANT COORDINATOR CARD */}
                            <div
                                className="group bg-white border rounded-xl p-5 text-center
                           w-full max-w-sm
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg"
                            >
                                <img
                                    src={member?.image || "/team/placeholder.jpg"}
                                    alt={member?.name}
                                    className="w-full h-56 rounded-lg
                             object-cover object-top mb-4"
                                />

                                <p className="text-sm uppercase tracking-wide text-gray-500">
                                    Assistant Coordinator
                                </p>
                                <p className="text-lg font-medium text-[#19366b]">
                                    {member?.name}
                                </p>

                                <div className="flex justify-center gap-4 mt-3
                                opacity-0 group-hover:opacity-100
                                transition-all duration-300">
                                    {member?.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-[#0A66C2] text-lg"
                                        >
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {member?.instagram && (
                                        <a
                                            href={member.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-[#E1306C] text-lg"
                                        >
                                            <FaInstagram />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Teams;
