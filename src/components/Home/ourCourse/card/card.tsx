import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "@/components/ui/button"
interface CourseProps {
    title: string
    description: string
    image: string
    duration: string
    level: string
    instructor: string
  }
  
  export const CourseCard = ({ title, description, image, duration, level, instructor }: CourseProps) => {
    return (
      <Card className="bg-[#f0f0f0] overflow-hidden border-0 shadow-sm xl:p-[50px] md:p-[20px] lg:p-[30px]">
        <CardHeader className="p-0">
          <div className="relative w-full xl:h-[420px] h-[220px] lg:h-[320px]">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="rounded-sm px-2 py-1 text-xs font-normal bg-gray-50">
              {duration}
            </Badge>
            <Badge variant="outline" className="rounded-sm px-2 py-1 text-xs font-normal bg-gray-50">
              {level}
            </Badge>
            <div className="ml-auto text-sm text-gray-600">{instructor}</div>
          </div>
          <h3 className="text-[24px] font-semibold mb-3">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button style={{ fontFamily: "var(--font-bevietnam)" }} className="w-full bg-[#001d54] hover:bg-[#00163e] font-medium ">Get it Now</Button>
        </CardFooter>
      </Card>
    )
  }