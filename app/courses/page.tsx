import { CourseCard } from "@/components/course-card"

export default function CoursesPage() {
  const courses = [
    {
      title: "Introduction to Islamic Studies",
      description: "A comprehensive overview of Islamic principles and practices.",
      type: "Online",
      price: 49.99,
      image: "/placeholder.svg",
    },
    {
      title: "Quranic Arabic for Beginners",
      description: "Learn to read and understand the Quran in its original language.",
      type: "Video Series",
      price: 79.99,
      image: "/placeholder.svg",
    },
    {
      title: "Islamic History",
      description: "Explore the rich history of Islam from its beginnings to the modern era.",
      type: "Online",
      price: 69.99,
      image: "/placeholder.svg",
    },
    // Add more courses as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  )
}

