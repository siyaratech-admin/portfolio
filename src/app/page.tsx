import { BoxesCore } from "@/components/background-boxes"
import { Container } from "@/components/Container"
import { Paragraph } from "@/components/Paragraph"
import Projects from "./projects/page"
import About from "./about/page"

export default function Home() {
  return (
    <div className="bg-black">
      <div className="relative flex flex-col items-start justify-center overflow-clip w-full">
        {/* <BoxesCore className="opacity-50 w-screen h-full" /> */}
        <div className="flex flex-col  items-start w-full  md:px-40 py-20 px-4  relative z-10  h-fit top-[20%] pointer-events-none justify-center">
          <span className="text-8xl mb-4 inline-block items-start">👋</span>
          <div className="w-full flex-col items-start">
          <h1 className="font-bold text-3xl text-foreground item-start">Welcome to</h1>
          <h1 className="text-transparent text-3xl md:text-6xl w-full md:w-fit uppercase font-bold  leading-loose tracking-wider bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text mt-2">
            Siyaratech Innovations
          </h1>
          <h1 className="font-normal text-3xl md:text-6xl py-2 text-foreground item-left"> Works</h1>
          <Paragraph className=" font-medium mt-4 items-start text-left">Pioneering Tomorrow&apos;s Solutions Today</Paragraph>
          </div>

          <Paragraph className=" mt-4">
            At Siyaratech Innovation Works, we are more than just a technology company – we are architects of
            transformative digital experiences. Our passion lies in crafting innovative solutions that push the
            boundaries of what&apos;s possible, combining cutting-edge technology with human-centric design.
          </Paragraph>

          <Paragraph className=" mt-4">
            We believe in creating products that not only solve problems but inspire, educate, and empower individuals
            and businesses to reach their fullest potential. From AI-driven platforms to intuitive digital experiences,
            our team of dedicated innovators is committed to turning visionary ideas into reality, one breakthrough at a
            time.
          </Paragraph>
          <Projects/>
          {/* <About/> */}
        
        </div>
      </div>
    </div>
  )
}

