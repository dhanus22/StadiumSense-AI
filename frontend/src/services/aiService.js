import api from "../api/axios";

export const getAISummary = async () => {
    const response = await api.get("/ai/summary");
    return response.data;
};

export const askAI = async (question) => {
    const response = await api.post("/ai/chat", {
        question,
    });

    return response.data;
};