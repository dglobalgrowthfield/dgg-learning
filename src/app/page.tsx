import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  const trainingTiers = [
    { title: "Basic Tier", features: ["3-month training", "Digital Literacy", "Specialized Course", "Digital Monetization", "Certificate"], label: "Choose Basic" },
    { title: "Standard Tier", features: ["6-month training", "Expanded curriculum", "Portfolio & resume support", "Team projects", "Standard certificate"], label: "Choose Standard" },
    { title: "Advanced Tier", features: ["1-year training", "Google Certificate", "1:1 mentorship", "Premium tools & portfolio support", "Advanced certificate"], label: "Choose Advanced" },
  ]

  const trainingStages = [
    { name: "Stage 1: Digital Literacy", emoji: "📖", details: ["Computer components basics", "Basic OS & software navigation", "Internet & browser fundamentals", "Online communication & collaboration", "AI assistance and prompting"] },
    { name: "Stage 2: Specialized Skills", emoji: "💻", details: ["Coding (Python, JavaScript, HTML, CSS)", "AI & machine learning basics", "Data analytics with spreadsheets, SQL, Power BI, Tableau", "Digital marketing & online branding", "Web design, development & CRM integrations"] },
    { name: "Stage 3: Digital Monetization", emoji: "💰", details: ["Freelancing on platforms like Upwork", "Build online portfolio & resume/CV", "Affiliate marketing & e-commerce", "Content creation and outreach monetization"] },
  ]

  const scrollContainerClasses = "flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-1 pb-2 md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:px-0"

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#512d7c]/15 via-[#512d7c]/10 to-transparent" />
        <div className="absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-[#f2b42c]/30 blur-3xl" />
        <div className="absolute -left-10 top-40 h-64 w-64 rounded-full bg-[#512d7c]/20 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-12 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#512d7c]/20 bg-[#512d7c]/5 px-3 py-1 text-sm text-[#512d7c]">
              Built for DGG students
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Build <span className="bg-gradient-to-r from-[#512d7c] to-[#6d42a3] bg-clip-text text-transparent">real tech skills</span> with D Global Growthfield
            </h1>
            <p className="text-lg text-gray-600">
              Learn from curated video lessons, practice with assignments, and submit your work for feedback.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/auth/sign-up">
                <Button size="lg" className="bg-[#512d7c] text-white hover:bg-[#3f2361]">Start learning</Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="border-[#512d7c] text-[#512d7c]">Log in</Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#f2b42c]" />
                Simple to start
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#512d7c]" />
                Scales with your classes
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
              <Image src="/placegolder.jpg" alt="DGG Learning Platform preview" width={1280} height={720} className="rounded-lg ring-1 ring-gray-200" priority />
              <div className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 -rotate-12 rounded-lg bg-[#f2b42c]/40 blur-lg" />
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 rotate-12 rounded-lg bg-[#512d7c]/30 blur-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to teach and learn</h2>
          <p className="mt-3 text-gray-600">Built for tech courses with clear lessons, assignments, and file submissions.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "YouTube lessons", desc: "Watch embedded videos with titles, descriptions, and modules.", emoji: "🎥" },
            { title: "Assignments", desc: "Clear instructions, due dates, and linked lessons.", emoji: "📝" },
            { title: "Submissions", desc: "Upload code, docs, and zips — automatically timestamped.", emoji: "📤" },
            { title: "Instructor tools", desc: "Create assignments, review work, and manage feedback.", emoji: "🧑‍🏫" },
            { title: "Secure access", desc: "Role-based login for students and instructors.", emoji: "🔐" },
            { title: "Scalable", desc: "Next.js + Supabase for performance and growth.", emoji: "⚡" },
          ].map((f) => (
            <div key={f.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#512d7c]/10 text-xl">
                <span>{f.emoji}</span>
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#f2b42c]/70 transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#f9f9f9] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#512d7c]">Why Choose D-Global Growthfield?</h2>
          <p className="mb-6 text-gray-700">
            Join us to gain in-demand tech skills, build a professional portfolio, and learn how to monetize your expertise online. Our program offers:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Expert instructors with industry experience.</li>
            <li>Hands-on projects topological apply your skills.</li>
            <li>Hybrid learning for flexibility and engagement.</li>
            <li>Certification to boost your career prospects.</li>
            <li>Access to freelancing platforms and job opportunities.</li>
          </ul>
        </div>
      </section>

      {/* Onsite & Online */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#512d7c]">Onsite and Online Learning</h2>
          <p className="mb-6 text-gray-700">We offer a hybrid learning model to suit your needs:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><span className="font-bold text-[#512d7c]">Onsite Labs:</span> Hands-on sessions in our state-of-the-art facilities for practical learning.</li>
            <li><span className="font-bold text-[#512d7c]">Online Lectures:</span> Access live and recorded classes via Zoom, with assignments on Google Classroom.</li>
            <li><span className="font-bold text-[#512d7c]">Collaboration Tools:</span> Use Slack to connect with instructors and peers.</li>
          </ul>
        </div>
      </section>

      {/* 15 Skills - exact grid */}
      <section className="bg-[#f9f9f9] py-16 px-4" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#512d7c]">Available Digital Skills</h2>
          <p className="mb-8 text-gray-700">
            Explore our range of in-demand digital skills to choose the course that aligns with your career goals. Each skill is taught by industry experts to prepare you for the digital economy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "💻", title: "Digital Literacy", desc: "Master essential computer and internet skills..." },
              { emoji: "🎨", title: "UI/UX Design", desc: "Learn to create user-friendly interfaces..." },
              { emoji: "📊", title: "Data Analytics", desc: "Gain expertise in analyzing data..." },
              { emoji: "🛡️", title: "Cyber Security", desc: "Develop skills to protect digital assets..." },
              { emoji: "📢", title: "Digital Marketing", desc: "Master strategies for online advertising..." },
              { emoji: "🖌️", title: "Digital Branding", desc: "Learn to build and manage a strong online brand..." },
              { emoji: "🧊", title: "Graphics & 3D Design", desc: "Create stunning visuals and 3D models..." },
              { emoji: "💻", title: "Coding", desc: "Acquire programming skills in Python, R, SQL..." },
              { emoji: "🌐", title: "Web Design & Development", desc: "Design and develop responsive websites..." },
              { emoji: "📱", title: "Mobile App Development", desc: "Create functional mobile applications..." },
              { emoji: "👥", title: "Social Media Setup & Management", desc: "Learn to set up and manage social media accounts..." },
              { emoji: "🤖", title: "AI & CRM", desc: "Explore artificial intelligence and customer relationship..." },
              { emoji: "🗂️", title: "Project Management", desc: "Develop skills to plan, execute, and deliver projects..." },
              { emoji: "💸", title: "Digital Monetization", desc: "Discover strategies to earn income online..." },
              { emoji: "☁️", title: "Cloud Computing", desc: "Learn to manage and deploy cloud-based solutions..." },
            ].map((skill) => (
              <div key={skill.title} className="bg-white border border-gray-200 rounded-lg p-5 shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-[#512d7c] mb-2 flex items-center gap-2">
                  <span className="text-2xl">{skill.emoji}</span> {skill.title}
                </h3>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Tiers */}
      <section className="bg-white py-16 px-4" id="tiers">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#512d7c]">Our Training Tiers</h2>
          <p className="mb-8 text-gray-700">Choose the tier that best fits your goals. All tiers include hybrid delivery, weekly assessments, and a certificate of completion.</p>
          <div className={scrollContainerClasses}>
            {trainingTiers.map((tier) => (
              <div key={tier.title} className="snap-start flex-shrink-0 w-[85%] min-w-[280px] max-w-sm rounded-xl border border-[#512d7c]/20 bg-[#f9f9f9] p-6 shadow">
                <h3 className="text-lg font-bold mb-3 text-[#512d7c]">{tier.title}</h3>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 text-sm">
                  {tier.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Button className="bg-[#f2b42c] text-white hover:bg-[#512d7c] mt-auto w-full">{tier.label}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* DGG Weekly Timetable */}
      <section className="py-16 px-4 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#512d7c]">DGG’s WEEKLY LEARNING TIMETABLE</h2>
          <p className="mb-8 text-lg text-gray-700">3 days of flexible learning per week…</p>
          <div className="overflow-x-auto">
            <table className="w-full mx-auto border-collapse">
              <thead>
                <tr className="bg-[#512d7c] text-white">
                  <th className="p-4 border">Day</th>
                  <th className="p-4 border">Time</th>
                  <th className="p-4 border">Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-4 border text-center">Monday</td>
                  <td className="p-4 border text-center">10am–4pm</td>
                  <td className="p-4 border">Teaching + Tools Training</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border text-center">Wednesday</td>
                  <td className="p-4 border text-center">10am–4pm</td>
                  <td className="p-4 border">Practical Class + Projects</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 border text-center">Friday</td>
                  <td className="p-4 border text-center">10am–4pm</td>
                  <td className="p-4 border">Practical Lab + Weekly Assignment Review</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Training Strategy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#512d7c]">Our Training Strategy</h2>
          <p className="text-center mb-10 text-gray-700">Our tutoring program is structured in 3 stages to ensure progressive learning and practical application:</p>
          <div className={scrollContainerClasses}>
            {trainingStages.map((stage) => (
              <div key={stage.name} className="snap-start flex-shrink-0 w-[85%] min-w-[280px] max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow">
                <h3 className="text-xl font-bold mb-3 text-[#512d7c] flex items-center gap-3">
                  <span className="text-3xl">{stage.emoji}</span> {stage.name}
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {stage.details.map((d) => <li key={d} className="flex items-start gap-2"><span className="text-[#512d7c]">•</span>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#512d7c]">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Create or join", "Learn", "Submit"].map((title, i) => (
              <div key={title} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f2b42c] flex items-center justify-center text-2xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600">
                  {i === 0 && "Sign up to access your DGG courses and materials."}
                  {i === 1 && "Watch lessons and review resources for each module."}
                  {i === 2 && "Upload your files and track your submission status."}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-lg mb-6">
              Ready to get started? Create an account and start learning today. 
              Enrollment closes <strong>Nov 30</strong>. Only <strong className="text-[#f2b42c]">15</strong> slots left!
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#512d7c] hover:bg-[#3f2361]">Start learning</Button>
              <Button variant="outline" className="border-[#512d7c] text-[#512d7c]">I already have an account</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exact Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">
          © 2025 Powered by <a href="https://dglobalgrowthfield.com" className="underline hover:no-underline">D Global Growthfield</a>
        </p>
      </footer>
     </div>
  )
}
