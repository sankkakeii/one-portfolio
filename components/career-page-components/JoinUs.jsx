import { CheckCircle2 } from "lucide-react"

export default function JoinUs() {
  const benefits = [
    {
      title: "Learning Opportunities",
      description: "Working in a team can help you develop new skills through mentorship and peer support."
    },
    {
      title: "Cross-Training",
      description: "Gain experience in different roles, enhancing your versatility and career prospects."
    },
    {
      title: "Improved Communication",
      description: "Team environments encourage open dialogue, enhancing your communication skills."
    },
    {
      title: "Career Advancement",
      description: "Active participation in teams can increase your visibility within the organization, leading to career advancement opportunities."
    },
    {
      title: "Supportive Environment",
      description: "Our team provides emotional support and encouragement, boosting morale and motivation."
    },
    {
      title: "Fast Growing Company",
      description: "We're t the point of achieving an accelerated growth."
    }
  ]

  return (
    <section className="w-full py-12 text-white md:py-24 lg:py-28 flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Join Us</h2>
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <CheckCircle2 className="h-5 w-5 text-blue-500" />
              </div>
              <p className="text-base text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}