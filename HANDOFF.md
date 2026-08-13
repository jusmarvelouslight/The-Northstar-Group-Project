# Handoff Documentation for Northstar Support Chatbot

## What Works
- All four branches (order status, return request, stock availability, out-of-scope) run end-to-end without issues.
- The chatbot generates on-brand replies for each inquiry type on every execution path.
- Comprehensive mock inventory includes size-level details and restock dates for each product.
- The system has a no-product fallback for stock inquiries to gracefully handle out-of-stock situations.
- The bot offers a friendly prompt when an order ID is missing, guiding the user effectively.
- Classifier output is normalized to lowercase before routing, ensuring uniformity.
- Final replies are consistently saved to `state.final_reply` across all branches.

## What is Still Rough
- The mock data is fixed in the agent backstories and needs real API or database integration for production readiness.
- The chatbot lacks conversation memory, meaning it does not “remember” past interactions across runs.
- There is no authentication or rate-limiting set up to control access or manage usage behavior.
- The chatbot only writes replies to `state` and does not send them anywhere (like email or a chat widget).

## Key Considerations for Future Development
- The classifier acts as the primary driver for all routing; therefore, test it thoroughly if unexpected behavior occurs.
- To update mock data, edit the relevant sections in agent backstories directly within CrewAI Studio.
- The default LLM provided by the platform is used throughout this chatbot; it’s important to re-test the classifier if the organizational model changes.
- Ensure the kickoff input field names are used exactly as specified during implementation.
