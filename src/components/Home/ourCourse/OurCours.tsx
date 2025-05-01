
import { Button } from "@/components/ui/button"
import { CourseCard } from "./card/card"
import aiimagetwo from "@/assets/aiimagetwo.png"
import aiimageone from "@/assets/aiimageone.png"




export default function CoursesSection() {
  const courses = [
    {
      title: "Web Design Fundamentals",
      description:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      image: aiimageone.src,
      duration: "4 Weeks",
      level: "Beginner",
      instructor: "By John Smith",
    },
    {
      title: "Web Design Fundamentals",
      description:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      image: aiimagetwo.src,
      duration: "4 Weeks",
      level: "Beginner",
      instructor: "By John Smith",
    },
  ]

  return (
    <section className="py-12 px-4 md:px-6 container   mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-[48px] font-semibold mb-4">Our Courses</h2>
          <p className="text-gray-600  text-sm">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit
            dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Button variant="default" className="bg-[#001d54] hover:bg-[#00163e] whitespace-nowrap px-[24px] py-[22px]">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  )
}
