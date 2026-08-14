# Handoff Documentation

## What Works
- All four branches of the chatbot execute end-to-end successfully.
- On-brand replies are generated for every interaction path.
- A comprehensive mock inventory is available, with size-level detail and expected restock dates.
- The system features a no-product fallback for stock inquiries.
- Missing order ID scenarios are managed through a dedicated friendly prompt.
- Classifier output is normalized to lowercase before routing decisions.
- The final reply is consistently saved to **state.final_reply** across all pathways.

## What is Still Rough
- Mock data resides in the agent backstories, necessitating real API or database integration for a production rollout.
- The chatbot lacks memory of conversations between runs.
- Authentication or rate-limiting mechanisms are not in place.
- The chatbot currently only constructs replies in **state** and does not send them to any external systems, such as email or a chat widget.

## What Someone Else Needs to Know
- The classifier agent handles all routing; if behaviors seem incorrect, start with testing this component.
- To update mock data, edit the agent backstories directly within CrewAI Studio.
- The platform default LLM is utilized throughout; re-test the classifier in case the organizational model changes.
- Input field names must be typed exactly as specified during kickoff.