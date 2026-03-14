import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  { name: "All", id: "all" },
  { name: "HVAC", id: "hvac" },
  { name: "Electrical", id: "electrical" },
  { name: "Plumbing", id: "plumbing" },
  { name: "Fire Safety", id: "firesafety" }
];

const projects = [
  {
    title: "Commercial HVAC System",
    category: "hvac",
    description: "Complete HVAC installation including ducting and cooling systems.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      "https://images.unsplash.com/photo-1581092160607-ee22731a8c61",
      "https://images.unsplash.com/photo-1581092335878-7d2f8d6d3c6c"
    ]
  },
  {
    title: "Industrial Panel Installation",
    category: "electrical",
    description: "Industrial electrical panel setup and automation wiring.",
    images: [
      "https://images.unsplash.com/photo-1598514982901-5b2b2c5c8e1b",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
    ]
  },
  {
    title: "Factory Plumbing Work",
    category: "plumbing",
    description: "Heavy duty plumbing pipelines installed in factory.",
    images: [
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39"
    ]
  },
  {
    title: "Mall Fire Safety System",
    category: "firesafety",
    description: "Fire pipeline and sprinkler system installation.",
    images: [
      "https://images.unsplash.com/photo-1598514982901-5b2b2c5c8e1b"
    ]
  }
];

const Projects = () => {

  const [active, setActive] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>

      {/* HERO SECTION */}

      <section className="bg-primary py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Our Projects</h1>
        <p>Showcasing our engineering excellence</p>
      </section>


      {/* PROJECT SECTION */}

      <section className="py-16 container mx-auto px-4">

        <SectionHeading
          title="Project Gallery"
          subtitle="Browse projects by category"
        />

        {/* CATEGORY BUTTONS */}

        <div className="flex justify-center flex-wrap gap-3 mb-10">

          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 rounded-full transition ${
                active === c.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {c.name}
            </button>
          ))}

        </div>


        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

          {filtered.map((p, i) => (

            <div
              key={i}
              onClick={() => setSelectedProject(p)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >

              <img
                src={p.images[0]}
                alt={p.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-4 bg-white">

                <p className="text-sm text-gray-500 capitalize">
                  {p.category}
                </p>

                <h3 className="text-lg font-bold">
                  {p.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* MODAL */}

      {selectedProject && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕

            </button>

            <h2 className="text-2xl font-bold mb-3">
              {selectedProject.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {selectedProject.description}
            </p>

            {/* IMAGE GALLERY */}

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">

              {selectedProject.images.map((img, index) => (

                <img
                  key={index}
                  src={img}
                  alt="project"
                  className="rounded-lg h-40 w-full object-cover"
                />

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Projects;