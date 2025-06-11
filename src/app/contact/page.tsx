import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Hub - Contact Us",
  description: "Get in touch with Legal Hub for support or inquiries.",
}

export default function ContactPage() {
  return (
    <section className="container py-8 md:py-12 lg:py-16">
      <h1 className="text-4xl font-bold font-headline mb-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground">
        Have questions or feedback? Feel free to reach out.
        Content coming soon!
      </p>
      {/* Future content: contact form, email, social links */}
    </section>
  )
}
