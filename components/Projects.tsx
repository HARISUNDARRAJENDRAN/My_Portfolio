export default function Projects() {
  const githubProfile = "https://github.com/HARISUNDARRAJENDRAN";

  const projects = [
    {
      title: "StreamSmart - AI-Powered Learning Platform",
      description:
        "Full-stack application with Next.js 15 frontend and FastAPI backend; integrated AWS services (DynamoDB, S3, OpenSearch, Cognito, Amplify); implemented RAG-powered chatbot with vector-based semantic search; built Chrome extension for YouTube transcript extraction; deployed globally with CloudFront CDN; added AI-generated quizzes and gamification system.",
      tech: ["Next.js 15", "FastAPI", "AWS", "Google Gemini"],
      link: "https://github.com/HARISUNDARRAJENDRAN/StreamSmart",
    },
    {
      title: "EduGPT - Gemini-Powered Educational Platform",
      description:
        "Production-ready Gradio application with Google Generative AI integration; implemented professional Python architecture with pre-commit hooks (flake8, isort) and setuptools deployment configuration.",
      tech: ["Gradio", "Google Generative AI", "Python"],
      link: "https://github.com/HARISUNDARRAJENDRAN/EduGPT-gemini",
    },
    {
      title: "Django Chatbot with AI Integration",
      description:
        "Full-stack conversational AI platform with Django REST backend and responsive JavaScript frontend; integrated NLP-driven chatbot capabilities for seamless user interactions.",
      tech: ["Django REST", "JavaScript", "NLP"],
      link: "https://github.com/HARISUNDARRAJENDRAN/Chatbot-using-Django",
    },
    {
      title: "Smart Tutor - Voice-Enabled Interactive Learning",
      description:
        "Real-time tutoring system with voice recognition and visual analysis; uses Google Gemini Vision for student drawing recognition; implements adaptive learning with shape/object detection and visual feedback overlay.",
      tech: ["HTML5 Canvas", "Web Speech API", "Gemini Vision"],
      link: "https://github.com/HARISUNDARRAJENDRAN/Smart-Tutor",
    },
    {
      title: "CRBot - Deep Reinforcement Learning Game AI",
      description:
        "Autonomous game agent using PyTorch Deep Q-Network for strategic decision-making; integrated Roboflow computer vision for real-time card/troop detection (66+ classifications); implemented 4-tier decision system with elixir management; containerized with Docker for deployment.",
      tech: ["PyTorch DQN", "Roboflow CV", "Docker"],
      link: "https://github.com/HARISUNDARRAJENDRAN",
    },
    {
      title: "MedChatBot - Medical AI Assistant",
      description:
        "Intelligent medical consultation platform trained on expert medical textbooks; provides health diagnosis, treatment recommendations, and evidence-based insights using advanced language model architecture.",
      tech: ["LLM", "Medical NLP", "Python"],
      link: "https://github.com/HARISUNDARRAJENDRAN/DentalChatbot_RAFT",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="section-card block p-6 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
