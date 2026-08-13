# Northstar Support Chatbot

The Northstar Support Chatbot is an AI-powered customer support solution designed to classify and auto-reply to the three most common Northstar support queries. Additionally, it smartly escalates queries that fall outside of its designated scope.

## Functionality Overview
The chatbot classifies incoming customer messages into four categories:
1. **order_status** - Handles queries related to order tracking, requiring an order ID.
2. **return_request** - Manages return requests according to our return policy.
3. **stock_availability** - Checks product availability, utilizing a full inventory catalog as a fallback.
4. **out_of_scope** - Escalates any other queries that it cannot address.

## How to Run It
To initiate the chatbot, provide the following kickoff inputs:
- **customer_message**: Required
- **order_id**: Required
- **product_name**: Required

The chatbot will output responses in the state field named `final_reply`.

## Known Limitations
- Hardcoded mock data used in agent backstories; integration with a live API or database is needed for production.
- No conversation memory; each session is treated independently.
- The classifier output is the single point of failure for routing inquiries.
- Current implementation lacks authentication and rate limiting.

## Swapping in Real Data
To utilize real-world data, you can swap out the mock data sections in the agent backstories with actual API calls or database queries.

## Tech Stack
- **CrewAI**
- **crewai.flow/v1**
- **CrewAI Studio**
- **composio GitHub integration**
