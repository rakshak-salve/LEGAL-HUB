import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Hub - Home",
  description: "Welcome to Legal Hub.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Welcome to Legal Hub!</h1>
      <p className="mt-4 text-lg">Your journey to understanding law starts here.</p>
    </main>
  );
}
