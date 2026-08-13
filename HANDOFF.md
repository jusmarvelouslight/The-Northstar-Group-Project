# Handoff Documentation for Northstar Support Chatbot

## What Works
- All four branches run end-to-end, delivering on-brand replies on every path.
- Full mock inventory, complete with size-level detail and estimated restock dates.
- Dedicated friendly prompt handles cases where the order ID isn't provided.
- Classifier output is normalized to lowercase before routing to ensure consistency.
- The final reply is reliably saved to `state.final_reply` across all branches.

## What is Still Rough
- The mock data is hardcoded in agent backstories; real API or database integration is essential for production readiness.
- Lacks conversation memory; no information persists beyond the current session.
- There is no authentication or rate limiting in place.
- The chatbot interface only writes replies to `state` and does not yet send them to channels like email or chat applications.

## Important Notes
- The classifier agent drives all routing; test it thoroughly first if the chatbot's behavior seems incorrect.
- To update mock data, simply edit the agent backstories directly in CrewAI Studio.
- The platform default LLM is utilized throughout the process, so be sure to retest the classifier if there are changes to the organizational model.
- Be sure to keep input field names the same as typed for accuracy.
