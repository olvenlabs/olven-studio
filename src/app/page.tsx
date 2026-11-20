import { ContactAndFooter } from "@/components/landing/contact-footer"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Manifesto } from "@/components/landing/manifesto"
import { Process } from "@/components/landing/process"
import { ProjectDialogProvider } from "@/components/landing/project-dialog"
import { Services } from "@/components/landing/services"
import { Works } from "@/components/landing/works"

export default function HomePage() {
  return (
    <ProjectDialogProvider>
      <div className="min-h-dvh w-full bg-ink text-bone">
        <Header />
        <main>
          <Hero />
          <Manifesto />
          <Services />
          <Process />
          <Works />
        </main>
        <ContactAndFooter />
      </div>
    </ProjectDialogProvider>
  )
}
