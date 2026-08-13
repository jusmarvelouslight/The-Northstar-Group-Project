# Northstar Support Chatbot

The Northstar Support Chatbot is an AI-powered customer support solution designed to enhance the customer experience for Northstar, an online clothing store. This chatbot efficiently classifies and auto-replies to the three most common support inquiries, while seamlessly escalating out-of-scope questions to human representatives.

## Functionality
The chatbot processes incoming customer messages and classifies them into the following categories:
- **Order Status**: Checks the order status using the order ID.
- **Return Request**: Provides details regarding return policies and procedures.
- **Stock Availability**: Inquires about the availability of products, with the option to fallback to a full catalog.
- **Out-of-Scope**: Escalates questions that don't fit into the first three categories.

## How to Run
To kick off the chatbot, provide the following inputs:
- **customer_message**: (required) The customer's inquiry.
- **order_id**: (optional) The ID of the order in question.
- **product_name**: (optional) The name of the product being inquired about.

The output for the processed messages will be saved in the `state.final_reply` field, as well as returned through the method outputs.

## Known Limitations
- The application uses hardcoded mock data within the agent backstories, requiring real data integration for production use.
- There is no conversation memory across sessions.
- The classifier output is the sole point of failure for correctly routing inquiries.
- The system does not currently implement user authentication or rate limiting.

## Swapping in Real Data
To replace the mock data with real data, update the agent backstory sections to call the actual APIs or databases required for retrieving order and inventory information.

## Tech Stack
- **CrewAI**
- **crewai.flow/v1**
- **CrewAI Studio**
- **Composio GitHub Integration**
