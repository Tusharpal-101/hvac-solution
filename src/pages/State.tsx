import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 120, label: "Projects Completed" },
  { value: 85, label: "Happy Clients" },
  { value: 15, label: "Years Experience" },
  { value: 24, label: "Support Available" },
];

const StatsSection = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (

    <section ref={ref} className="bg-primary py-12">

      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 px-4">

        {stats.map((s) => (

          <div
            key={s.label}
            className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md hover:bg-secondary/10 transition-all duration-300 hover:scale-105 shadow-lg"
          >

            <div className="text-3xl md:text-4xl font-bold text-secondary">

              {inView && (
                <CountUp
                  start={0}
                  end={s.value}
                  duration={2}
                />
              )}

              +

            </div>

            <div className="text-white/70 text-sm mt-2">
              {s.label}
            </div>

          </div>

        ))}

      </div>

    </section>

  );
};

export default StatsSection;