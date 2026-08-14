# Northstar Support Chatbot

The Northstar Support Chatbot is an AI-powered customer support solution designed to classify incoming customer messages into four main categories, allowing for auto-replies to the three most common support questions at Northstar, along with escalation for out-of-scope queries.

## Features

- **Classification & Auto-Replies**: The chatbot recognizes messages related to order status, return requests, stock availability, and flags any out-of-scope inquiries for human review.
- **Four Branches**: 
  - Order Status: Uses order ID for verification.
  - Return Request: Provides information on return policies.
  - Stock Availability: Offers a complete catalog fallback for all product inquiries.
  - Out-of-Scope Escalation: Routes inquiries not addressed by the other branches.

## Running the Chatbot

To operate the chatbot, provide the following kickoff inputs:
- `customer_message` (required): The customer's question or request.
- `order_id` (optional): The specific order ID if pertaining to order status.
- `product_name` (optional): The specific product name if querying stock availability.

The output of the chatbot is stored in:
- `state.final_reply`: This holds the composed reply ready for customer communication.
- Additionally, method outputs are generated for handling executive functions.

## Known Limitations

1. The mock data used in agent backstories is hardcoded and requires real data source integration for production use.
2. The chatbot does not maintain conversation memory across different sessions.
3. The classifier's output is the single point of failure for routing; improvements in this area will enhance reliability.
4. There is currently no authentication or rate-limiting implemented.

## Swapping In Real Data

To integrate real data instead of mock data:
- Replace sections of agent backstory mock data with calls to a real API or database to ensure accurate and up-to-date customer service.

## Tech Stack

- **CrewAI**: The underlying platform for building the chatbot.
- **crewai.flow/v1**: The version used in implementation.
- **CrewAI Studio**: The environment for designing and modifying the chatbot flows.
- **Composio GitHub Integration**: For seamless version control and collaboration.