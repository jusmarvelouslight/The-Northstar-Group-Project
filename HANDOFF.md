# Handoff Documentation for Northstar Support Chatbot

## What Works
- All four branches of the chatbot run end-to-end, providing on-brand replies at every path.
- Full mock inventory with details on available sizes and restock dates.
- A dedicated prompt manages missing order IDs with friendly user messaging.
- Classifier output is normalized to lowercase before routing to ensure consistency.
- Final replies are saved to `state.final_reply` on every branch.

## What is Still Rough
- The mock data is currently hardcoded into agent backstories and will require seamless integration with a real API or database for production deployment.
- The system does not maintain conversation memory across runs, which may affect user experience.
- There is no authentication or rate-limiting implemented, posing potential security risks.
- Replies are stored in state only and are not currently sent to external communication channels like email or a chat widget.

## Key Information for Team
- The classifier agent drives all routing decisions; if behavior seems incorrect, begin testing at this stage.
- Mock data can be updated by editing the agent backstories directly in CrewAI Studio.
- The platform uses the default LLM throughout; retest the classifier if the architecture or model changes.
- Ensure that kickoff input field names are used exactly as specified.
