import Link from "next/link"
import { Button } from "@/components/ui/button"
export function generateStaticParams() {
  return [
    { slug: "Introduction to Islamic Studies" },
    { slug: "Quranic Arabic for Beginners"  },
    { slug: "Islamic History"  },
  ];
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  // In a real application, you would fetch the course details based on the slug
  const course = {
    title: decodeURIComponent(slug),
    description: "This is a detailed description of the course.",
    price: 49.99,
    type: "Online",
    image: "/placeholder.svg",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">{course.description}</p>
          <p className="text-xl font-bold mb-4">${course.price.toFixed(2)}</p>
          <p className="text-md mb-4">Type: {course.type}</p>
          <Button asChild className="w-full md:w-auto">
            <Link href={`/enroll/${encodeURIComponent(course.title)}`}>Enroll Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

