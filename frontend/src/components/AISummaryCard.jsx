import { useEffect, useState } from "react";
import { getAISummary } from "../services/aiService";
import ReactMarkdown from "react-markdown";

export default function AISummaryCard() {

    const [summary, setSummary] = useState("Generating AI insights...");

    useEffect(() => {
        loadSummary();
    }, []);

    const loadSummary = async () => {
        try {
            const data = await getAISummary();
            setSummary(data.summary);
        } catch (error) {
            console.error(error);
            setSummary("Unable to generate AI insights.");
        }
    };

    return (
        <div className="bg-white rounded-xl shadow p-6 mt-8">

            <h2 className="text-2xl font-bold mb-4">
                🤖 AI Stadium Insights
            </h2>

            <div className="prose max-w-none">
                <ReactMarkdown>
                    {summary}
                </ReactMarkdown>
            </div>

        </div>
    );
}