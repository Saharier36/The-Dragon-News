import React from "react";

const CareerPage = () => {
  const positions = [
    {
      title: "Journalists & Reporters",
      description:
        "Join our newsroom and report on stories that impact communities. Experience in investigative reporting is valued.",
    },
    {
      title: "Editors & Sub-Editors",
      description:
        "Help shape our editorial direction and ensure content quality. We seek experienced editors with strong leadership skills.",
    },
    {
      title: "Digital & Social Media Specialists",
      description:
        "Build our online presence and engage with our growing digital audience. Experience with social platforms and analytics required.",
    },
    {
      title: "Photographers & Videographers",
      description:
        "Capture compelling visual stories that complement our reporting. Portfolio demonstrating your best work is essential.",
    },
    {
      title: "Marketing & Communications",
      description:
        "Promote The Dragon News and develop our brand strategy. Help us reach new audiences and build reader loyalty.",
    },
    {
      title: "Technology & Development",
      description:
        "Build and maintain our digital platforms. We seek full-stack developers and engineers passionate about news technology.",
    },
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Health insurance and retirement benefits",
    "Professional development and training programs",
    "Flexible work arrangements",
    "Collaborative and creative work environment",
    "Opportunity to cover impactful stories",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Careers at The Dragon News
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Join a team dedicated to quality journalism and impactful storytelling
      </p>

      {/* Overview */}
      <section className="mb-12">
        <p className="text-slate-700 leading-relaxed mb-4">
          At The Dragon News, we are looking for talented, passionate
          individuals who share our commitment to quality journalism and
          truth-telling. If you have a strong work ethic and are eager to make a
          difference, we want to hear from you.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Our team is diverse, dynamic, and dedicated to delivering accurate,
          impactful news. We offer opportunities for growth, learning, and
          professional development in a supportive environment.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Why Work With Us
        </h2>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#D72050] font-bold">✓</span>
              <p className="text-slate-700">{benefit}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Open Positions */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Open Positions
        </h2>
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div key={index} className="border-l-4 border-[#D72050] pl-4 py-2">
              <h3 className="font-semibold text-slate-900 mb-1">
                {position.title}
              </h3>
              <p className="text-slate-600">{position.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-slate-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Apply</h2>
        <p className="text-slate-700 mb-4">
          Interested in joining our team? Send your resume, cover letter, and
          portfolio (if applicable) to our HR department. We review applications
          on a rolling basis and contact promising candidates for interviews.
        </p>
        <div className="space-y-3">
          <p className="text-slate-700">
            <span className="font-medium">Email:</span> careers@thedragonews.com
          </p>
          <p className="text-slate-700">
            <span className="font-medium">Phone:</span> +1 (555) 123-4567
          </p>
          <p className="text-slate-700">
            <span className="font-medium">Subject Line:</span> [Position Title]
            - [Your Name]
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
