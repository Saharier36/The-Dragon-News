import React from "react";

export const metadata = {
  title: "Dragon News - About Us",
};

const AboutPage = () => {
  const values = [
    {
      title: "Truthful Reporting",
      description:
        "We verify facts rigorously to ensure accuracy in every story.",
    },
    {
      title: "Editorial Independence",
      description:
        "We report freely without fear or favor from any institution.",
    },
    {
      title: "Accountability",
      description:
        "We take responsibility for our work and address reader feedback openly.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        About The Dragon News
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Journalism Without Fear or Favour
      </p>

      {/* Overview */}
      <section className="mb-12">
        <p className="text-slate-700 leading-relaxed mb-4">
          The Dragon News is committed to delivering accurate, timely, and
          impactful journalism to readers across the region. We believe that
          access to reliable information is essential for an informed society.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Our experienced team of journalists and editors work tirelessly to
          uncover stories that matter, holding power to account and giving voice
          to those who deserve to be heard.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-700 leading-relaxed">
            To deliver credible, comprehensive news that informs and empowers
            our readers through investigative journalism and ethical reporting.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h2>
          <p className="text-slate-700 leading-relaxed">
            To be a trusted news organization recognized for editorial
            excellence, integrity, and commitment to truth in all our reporting.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Our Values</h2>
        <div className="space-y-4">
          {values.map((value, index) => (
            <div key={index} className="border-l-4 border-[#D72050] pl-4">
              <h3 className="font-semibold text-slate-900 mb-1">
                {value.title}
              </h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-slate-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
        <div className="space-y-3">
          <p className="text-slate-700">
            <span className="font-medium">Email:</span> contact@thedragonews.com
          </p>
          <p className="text-slate-700">
            <span className="font-medium">Phone:</span> +1 (555) 123-4567
          </p>
          <p className="text-slate-700">
            <span className="font-medium">News Tips:</span>{" "}
            tips@thedragonews.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
