import { BoxesCore } from "@/components/background-boxes";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Siyaratech Innovations",
  description:
    "",
};

export default function Projects() {
  return (
    <Container>
                  <BoxesCore className="opacity-50" />

      <div className="flex space-x-2 z-50 relative ">
        <span className="text-8xl">⚡</span>
        <Heading className="font-black mb-10">
          {" "}
          What we&apos;ve been working on
        </Heading>
      </div>
      <Products />
    </Container>
  );
}
