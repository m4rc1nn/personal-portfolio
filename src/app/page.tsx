import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Cześć! Jestem Marcin</Heading>
      <Paragraph className="max-w-xl mt-4">
        Jestem <Highlight>Fullstack Developerem</Highlight>, który uwielbia tworzyć aplikacje Webowe.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Specjalizuje się w takich technologiach jak: <br /> <Highlight>Next.js</Highlight> <Highlight>React.js</Highlight> <Highlight>Node.js</Highlight> <Highlight>MySQL</Highlight> <Highlight>REST API</Highlight>
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-2xl md:text-3xl lg:text-4xl mt-20 mb-10"
      >
        Nad tym ostatnio pracowałem
      </Heading>
      <Products />
    </Container>
  );
}
