import json


def build_summary_prompt(dashboard_data: dict) -> str:
    formatted_data = json.dumps(dashboard_data, indent=2)

    return f"""
You are StadiumSense AI, an intelligent stadium operations assistant.

Analyze the following live stadium data and provide:

1. Executive Summary (2-3 sentences)
2. Crowd Analysis
3. Parking Analysis
4. Food Court Analysis
5. Weather Impact
6. Volunteer Deployment Suggestions
7. Active Alerts
8. Top 5 Actionable Recommendations

Return the response in clear Markdown.

Stadium Data:
{formatted_data}
"""

def build_chat_prompt(question: str, dashboard_data: dict) -> str:
    formatted_data = json.dumps(dashboard_data, indent=2)

    return f"""
You are StadiumSense AI, an intelligent stadium operations assistant.

Answer the user's question ONLY using the stadium data below.
If the answer is not available in the data, clearly say so.

Stadium Data:
{formatted_data}

User Question:
{question}
"""