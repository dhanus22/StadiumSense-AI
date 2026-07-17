import MainLayout from "../layouts/MainLayout";
import AISummaryCard from "../components/AISummaryCard";
import AIChat from "../components/AIChat";

export default function AIAssistant() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        🤖 AI Operations Center
      </h1>

      <AISummaryCard />

      <AIChat />
    </MainLayout>
  );
}