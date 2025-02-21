import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  title: string
  description: string
  type: string
  price: number
  image: string
}

export function CourseCard({ title, description, type, price, image }: CourseCardProps) {
  return (
    <Card>
      <CardHeader>
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-semibold">{type}</span>
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/courses/${encodeURIComponent(title)}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

