export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    },
    {
      name: "Backend & Database",
      skills: ["Node.js", "Express.js", "Django", "MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      name: "AI/ML & Programming",
      skills: ["Python", "TensorFlow", "LangChain", "OpenCV", "C/C++", "Java"],
    },
    {
      name: "Tools & Cloud",
      skills: ["Git & GitHub", "AWS", "Docker", "Linux", "VS Code", "Postman"],
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.name} className="section-card p-4">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-3">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  <span className="text-xs">✓</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
