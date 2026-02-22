import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WorkExperience() {
  const allTechStack = [
    "Google Gemini Vision API",
    "HTML5 Canvas",
    "Web Speech API",
    "JavaScript",
    "REST APIs",
    "NLP",
    "OpenCV",
    "MySQL",
    "PostgreSQL",
    "PathRAG",
    "LightRAG",
    "Query Optimization",
  ];

  const experiences = [
    {
      company: "Congruent Solutions",
      role: "Software Intern",
      location: "Guindy",
      period: "Dec 2025 - Jan 2026",
      logo: "/images/Congruent_Solution.png",
      techStack: ["MySQL", "PostgreSQL", "PathRAG", "LightRAG", "Query Optimization"],
      highlights: [
        "Performed DB migrations from MySQL to PostgreSQL, including schema mapping, data validation, and migration script updates to maintain integrity across environments.",
        "Enhanced existing RAG systems by applying pre-processing and post-processing techniques with approaches like PathRAG and LightRAG, improving retrieval relevance and answer quality for downstream queries.",
        "Applied general database query optimization techniques such as indexing strategy updates, query refactoring, and execution plan review to reduce latency in frequently used operations.",
      ],
    },
    {
      company: "KNOMADIX AI",
      role: "Software Development Intern",
      location: "Texas (Remote)",
      period: "Jun-Jul 2025",
      logo: "/images/Knomadix.png",
      techStack: [
        "Google Gemini Vision API",
        "HTML5 Canvas",
        "Web Speech API",
      ],
      highlights: [
        "Architected Smart Tutor using Google Gemini Vision API with HTML5 Canvas and Web Speech API for real-time voice-enabled tutoring with visual drawing analysis and adaptive feedback overlays, including live prompt orchestration and context-aware response handling for interactive learning sessions.",
      ],
    },
    {
      company: "NEXDHA AI",
      role: "Software Development Intern",
      location: "Chennai",
      period: "May-Jul 2024",
      logo: "/images/nexdha.jpg",
      techStack: ["JavaScript", "REST APIs", "NLP", "OpenCV"],
      highlights: [
        "Built responsive web applications with JavaScript and RESTful APIs; developed an AI chatbot with NLP capabilities and context management, with improved conversational continuity through structured intent handling and fallback flows.",
        "Implemented real-time object tracking using OpenCV with background subtraction and contour detection for speed calculation, and tuned frame processing logic for stable tracking under varying lighting and motion conditions.",
      ],
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <div className="section-card mb-6 p-4">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
          Tech Stack Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {allTechStack.map((tech) => (
            <Button
              key={tech}
              variant="outline"
              size="sm"
              className="h-8 rounded-xl border-dashed bg-zinc-50 px-3 text-xs text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="section-card flex gap-4 p-4">
            <div className="flex-shrink-0 pt-1">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={46}
                height={46}
                className="h-11 w-11 rounded-md object-contain"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {exp.role} | {exp.company}, {exp.location}
                {exp.period ? ` | ${exp.period}` : ""}
              </h3>
              <ul className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-400">
                {exp.highlights.map((point, pointIndex) => (
                  <li key={pointIndex}>• {point}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <Button
                    key={`${exp.company}-${tech}`}
                    variant="outline"
                    size="sm"
                    className="h-7 rounded-xl border-dashed px-2.5 text-xs"
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
