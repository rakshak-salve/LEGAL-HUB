import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Hub - Resources",
  description: "Access valuable legal resources, articles, and guides.",
}

export default function ResourcesPage() {
  return (
    <section className="container py-8 md:py-12 lg:py-16">
      <h1 className="text-4xl font-bold font-headline mb-4">Resources</h1>
      <p className="text-lg text-muted-foreground">
        Find helpful articles, guides, and external links related to Indian law here.
        Content coming soon!
      </p>
      {/* Future content: articles, FAQs, external links */}
    </section>
  )
}
