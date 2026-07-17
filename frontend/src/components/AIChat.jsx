import { useState } from "react";
import { askAI } from "../services/aiService";
import ReactMarkdown from "react-markdown";

export default function AIChat() {

    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleAsk() {

        if (!question.trim()) return;

        setLoading(true);

        try {

            const data = await askAI(question);

            setResponse(data.response);

        } catch (error) {

            console.error(error);

            setResponse("Unable to contact AI.");

        }

        setLoading(false);
    }

    return (<>
         <div className="flex flex-wrap gap-3 mt-4">

    <button
        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg"
        onClick={() => setQuestion("Which gate is the most crowded?")}
    >
        Most Crowded Gate
    </button>

    <button
        className="bg-green-100 text-green-700 px-4 py-2 rounded-lg"
        onClick={() => setQuestion("Where should visitors park?")}
    >
        Parking Recommendation
    </button>

    <button
        className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg"
        onClick={() => setQuestion("Are there any active alerts?")}
    >
        Active Alerts
    </button>

    <button
        className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg"
        onClick={() => setQuestion("How should volunteers be deployed?")}
    >
        Volunteer Deployment
    </button>

</div>
        <div className="bg-white rounded-xl shadow p-6 mt-8">

            <h2 className="text-2xl font-bold mb-4">
                🤖 Ask StadiumSense AI
            </h2>

            <div className="flex gap-3">

                <input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask anything about the stadium..."
                    className="flex-1 border rounded-lg px-4 py-3"
                />

                <button
                    onClick={handleAsk}
                    className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
                >
                    Ask
                </button>

            </div>

            {loading && (
                <p className="mt-4">
                    Thinking...
                </p>
            )}

            {response && (

                <div className="mt-6 border rounded-lg p-5 bg-gray-50">

                    <ReactMarkdown>

                        {response}

                    </ReactMarkdown>

                </div>

            )}

        </div>
        </>

    );

}