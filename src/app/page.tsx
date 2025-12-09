import { AboutSection } from "@/features/about/aboutSection";
import { ContactSection } from "@/features/contact/contactSection";
import { Header } from "@/features/header/header";
import { HomeSection } from "@/features/home/homeSection";
import { ProjectionSection } from "@/features/projects/projectsSection";
import { SkillsSection } from "@/features/skills/skillsSection";

export default function Home() {
   return (
      <div>
        <main>
         <Header />
         <HomeSection />
         <AboutSection />
         <SkillsSection />
         <ProjectionSection />
         <ContactSection />
        </main>
      </div>
   );
}
