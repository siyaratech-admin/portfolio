import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <h1 className="font-bold text-2xl">Welcome to Siyaratech Innovation Works</h1>
      <Paragraph className="max-w-xl font-medium mt-4">
      Pioneering Tomorrow&apos;s Solutions Today
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
      At Siyaratech Innovation Works, we are more than just a technology company – we are architects of transformative digital experiences. Our passion lies in crafting innovative solutions that push the boundaries of what&apos;s possible, combining cutting-edge technology with human-centric design.
      </Paragraph>
      
      <Paragraph className="max-w-xl mt-4">
      We believe in creating products that not only solve problems but inspire, educate, and empower individuals and businesses to reach their fullest potential. From AI-driven platforms to intuitive digital experiences, our team of dedicated innovators is committed to turning visionary ideas into reality, one breakthrough at a time.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What we&apos;ve been working on
      </Heading>
      <Products />
      {/* <TechStack /> */}
    </Container>
  );
}
