import { configureGenkit } from "@genkit-ai/core";
import { defineFlow, generate } from "@genkit-ai/flow";
import { geminiPro } from "@genkit-ai/google-cloud";

// Ensure you have GOOGLE_APPLICATION_CREDENTIALS and GOOGLE_CLOUD_PROJECT_ID
// set in your .env.local file.

export const POST = configureGenkit({
  // Configure your models (e.g., Gemini Pro)
  plugins: [
    geminiPro(), // Initialize Gemini Pro model
  ],
  googleCloud: {
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    region: 'us-central1',
  },
  logLevel: 'debug', // Set log level for debugging
  // For local development, enable CORS. In production, restrict to your domain.
  enableTracingAndMetrics: true, // Enable tracing for debugging/monitoring
});

// Define a simple Genkit flow to test if it's working
export const sayHelloFlow = defineFlow(
  {
    name: "sayHello",
    inputSchema: { type: "string" }, // Expects a string input (e.g., a name)
    outputSchema: { type: "string" }, // Outputs a string (e.g., a greeting)
  },
  async (name) => {
    const response = await generate({
      prompt: `Say hello to ${name}.`,
      model: geminiPro,
      config: { temperature: 0.7 },
    });
    return response.text();
  }
);
