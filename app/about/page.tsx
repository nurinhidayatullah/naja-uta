import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    { name: "Dr. Aisha Rahman", role: "Founder & Lead Instructor", image: "/placeholder.svg" },
    { name: "Imam Yusuf Ali", role: "Senior Islamic Scholar", image: "/placeholder.svg" },
    { name: "Prof. Fatima Hassan", role: "Quranic Studies Expert", image: "/placeholder.svg" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">About Islamic Learning</h1>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-lg mb-4">
              Islamic Learning is dedicated to providing high-quality Islamic education to students worldwide. Our
              mission is to make Islamic knowledge accessible to everyone, regardless of their location or background.
            </p>
            <p className="text-lg">
              We believe in fostering a deep understanding of Islam through comprehensive courses, interactive learning
              experiences, and a supportive community of learners.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Students learning"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600 text-center">Our Vision</h2>
        <p className="text-xl text-center">
          To be the leading online platform for Islamic education, empowering individuals to deepen their faith,
          increase their knowledge, and apply Islamic principles in their daily lives.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Excellence", description: "Striving for the highest quality in education" },
            { title: "Authenticity", description: "Providing genuine and verified Islamic knowledge" },
            { title: "Inclusivity", description: "Welcoming learners from all backgrounds" },
            { title: "Innovation", description: "Embracing modern technology for effective learning" },
            { title: "Community", description: "Fostering a supportive learning environment" },
            { title: "Continuous Growth", description: "Encouraging lifelong learning and development" },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

