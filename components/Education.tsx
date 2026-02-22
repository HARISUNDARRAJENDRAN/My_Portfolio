import Image from "next/image";

export default function Education() {
  const education = [
    {
      institution: "Sri Ramachandra Institute of Higher Education and Research",
      location: "Porur",
      period: "2023-27",
      logo: "/images/SRIHER.jpg",
    },
    {
      institution: "DAV BGPM",
      location: "",
      period: "2021-23",
      logo: "/images/DAV Logo - web.png",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="section-card flex gap-4 p-4">
            <div className="flex-shrink-0 pt-1">
              <Image
                src={edu.logo}
                alt={`${edu.institution} logo`}
                width={46}
                height={46}
                className="h-11 w-11 rounded-md object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {edu.institution}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {edu.location ? `${edu.location} | ${edu.period}` : edu.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
