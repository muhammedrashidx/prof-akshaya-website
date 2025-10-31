import About from "@/components/About";
import HomeNewsSection from "@/components/News/HomeNewsSection";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akshaya Nikumbh - Atmospheric Convection and Dynamics Group",
  description: "The Atmospheric Convection and Dynamics Group at CCS, IIT Bombay focuses on understanding diverse atmospheric phenomena elucidated by atmospheric dynamics and thermodynamics. This includes weather and climate extremes, the South-Asian summer monsoon and tropical-extratropical interactions.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "externalUrl"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <HomeNewsSection posts={posts} />
      <Contact />
      
    </main>
  );
}
