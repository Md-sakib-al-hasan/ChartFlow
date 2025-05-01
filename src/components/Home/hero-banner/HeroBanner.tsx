import Image from "next/image"
import airobot from "@/assets/robot.png"
import assitenrobot from "@/assets/assitenrobot.png"
import art from "@/assets/atr.png"
import backupt_table from "@/assets/backup_table.png"
export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 xl:grid-cols-2 lg:grid-cols-1 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col   ">
            {/* Heading */}
            <div className="mt-[18px]">
                <h1 className="text-2xl font-bold md:hidden"> Your AI- Powered Sales Coach</h1>
              <h1 className="hidden md:block md:text-[80px] text-[40px] leading-20  font-medium tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Your AI-
                <br />
                Powered
                <br />
                Sales Coach
              </h1>
            </div>

            {/* Robot and Description */}
            <div className="md:flex items-start md:gap-x-16 pt-[26px]">
              <div className="relative h-[198px]  w-[204px] flex-shrink-0 overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                <Image
                  src={assitenrobot.src}
                  alt="AI Assistant"
                  width={204}
                  height={198}
                  className="object-contain"
                />
              </div>
              <p className="text-slate-600 md:text-[20px] font-medium md:text-lg pt-7 md:pb-9 md:pr-[74px]">
                Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI
                technology.
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="md:flex justify-between flex-wrap gap-1 xl:gap-14 pt-[92px]">
              <div className="flex items-center gap-4">
                <div  className="flex h-[86px] w-[89px] items-center justify-center rounded-lg bg-white p-2  drop-shadow-[4px_0_4px_rgba(0,0,0,0.3)]">
                  <Image
                    src={backupt_table.src}
                    alt="Deal Closed"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
               
                <div>
                  <p className="2xl:text-[40px] lg:text-[35px] font-semibold text-[#081623]">2000+</p>
                  <p className="2xl:text-[20px] lg:text-[16px] font-medium ">Your protection</p>
                </div>
              </div>
-
              <div className="flex items-center gap-4">
                <div className="flex h-[86px] w-[89px]  items-center justify-center rounded-lg bg-white p-2 drop-shadow-[4px_0_4px_rgba(0,0,0,0.3)]">
                <Image
                    src={art.src}
                    alt="Deal Closed"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="2xl:text-[40px] lg:text-[35px]  font-semibold #081623">7001+</p>
                  <p className="2xl:text-[20px] lg:text-[16px] font-medium ">Provide tailored</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-end  relative rounded-xl bg-white md:p-6 ">
            {/* Robot Image */}
            <div className="relative mb-6 h-[300px]  overflow-hidden rounded-lg sm:h-[350px] md:h-[583px] w-[583]  hidden md:block ">
              <Image
                src={airobot.src}
                alt="AI Robot"
                fill
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>

            {/* Stats and Description */}
            <div className="space-y-[23px] md:absolute bottom-0  left-0 z-10 drop-shadow-xl/20 bg-white px-[30px] pt-[50px] pb-14 max-w-[467px] rounded-[27px] ">
              <div className="flex justify-between">
                <div>
                  <p className="text-[50px] font-semibold text-primary">721+</p>
                </div>
                <div>
                  <p className="text-[50px] font-semibold text-primary">1000+</p>
                </div>
              </div>

              <p className="text-[28px] font-semibold text-[#05131D]">Growth is our priority.</p>

              <p style={{ fontFamily: "var(--font-poppins)" }} className="text-[#05131D]/70 text-[17px] pt-2.5 ">
                As a full-service business agency, we specialize in helping companies of all sizes optimize their
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
