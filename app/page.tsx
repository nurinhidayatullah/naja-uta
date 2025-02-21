import Link from "next/link"
import { CourseCard } from "@/components/course-card"
import { MoonIcon } from "@radix-ui/react-icons"
import { Carousel } from "@/components/carousel"

export default function Home() {
  const carouselItems = [
    {
      image: "/placeholder.svg",
      title: "Discover Islamic Knowledge",
      description: "Explore our wide range of courses and deepen your understanding of Islam.",
    },
    {
      image: "/placeholder.svg",
      title: "Learn from Expert Scholars",
      description: "Our courses are taught by renowned Islamic scholars and educators.",
    },
    {
      image: "/placeholder.svg",
      title: "Flexible Learning Options",
      description: "Choose from online courses, live classes, and self-paced video lessons.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full">
          <Carousel items={carouselItems} />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl md:text-5xl mb-8">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                title="Introduction to Islamic Studies"
                description="A comprehensive overview of Islamic principles and practices."
                type="Online"
                price={49.99}
                image="/placeholder.svg"
              />
              <CourseCard
                title="Quranic Arabic for Beginners"
                description="Learn to read and understand the Quran in its original language."
                type="Video Series"
                price={79.99}
                image="/placeholder.svg"
              />
              <CourseCard
                title="Islamic History Bundle"
                description="Explore the rich history of Islam with this comprehensive package."
                type="Bundle"
                price={129.99}
                image="/placeholder.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

