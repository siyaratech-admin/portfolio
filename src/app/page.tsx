import { BoxesCore } from "@/components/background-boxes"
import { Container } from "@/components/Container"
import { Paragraph } from "@/components/Paragraph"

export default function Home() {
  return (
    <Container>
      <div className="relative flex flex-col items-start justify-center overflow-y-clip">
        <BoxesCore className="opacity-50" />
        <div className="relative z-10 max-w-3xl h-fit top-[20%] pointer-events-none">
          <span className="text-4xl mb-4 inline-block">👋</span>
          <h1 className="font-bold text-2xl text-foreground">Welcome to</h1>
          <h1 className="text-6xl font-bold bg-gradient-to-r leading-loose from-purple-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Siyaratech Innovation
            <span className="font-normal p-2 text-foreground"> Works</span>
          </h1>

          <Paragraph className="max-w-xl font-medium mt-4">Pioneering Tomorrow&apos;s Solutions Today</Paragraph>
          <Paragraph className="max-w-xl mt-4">
            At Siyaratech Innovation Works, we are more than just a technology company – we are architects of
            transformative digital experiences. Our passion lies in crafting innovative solutions that push the
            boundaries of what&apos;s possible, combining cutting-edge technology with human-centric design.
          </Paragraph>

          <Paragraph className="max-w-xl mt-4">
            We believe in creating products that not only solve problems but inspire, educate, and empower individuals
            and businesses to reach their fullest potential. From AI-driven platforms to intuitive digital experiences,
            our team of dedicated innovators is committed to turning visionary ideas into reality, one breakthrough at a
            time.
          </Paragraph>
        </div>
      </div>
    </Container>
  )
}

