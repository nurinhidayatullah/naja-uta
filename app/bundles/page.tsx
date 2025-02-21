import { CourseCard } from "@/components/course-card"

export default function BundlesPage() {
  const bundles = [
    {
      title: "Islamic Studies Starter Pack",
      description: "A collection of essential courses for beginners in Islamic studies.",
      type: "Bundle",
      price: 149.99,
      image: "/placeholder.svg",
    },
    {
      title: "Advanced Quranic Studies",
      description: "Deepen your understanding of the Quran with this comprehensive bundle.",
      type: "Bundle",
      price: 199.99,
      image: "/placeholder.svg",
    },
    // Add more bundles as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Course Bundles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bundles.map((bundle, index) => (
          <CourseCard key={index} {...bundle} />
        ))}
      </div>
    </div>
  )
}

