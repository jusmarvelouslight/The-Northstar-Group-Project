# Northstar Support Chatbot

The Northstar Support Chatbot is an AI-powered customer support tool designed for Northstar, an online clothing store. It classifies incoming customer messages into four categories: order status, return requests, stock availability, and out-of-scope notifications. The bot routes these messages to appropriate handlers that return friendly and on-brand replies signed by the Northstar Support Team.

## Functionality Overview
- **Order Status**: Handles inquiries about the status of orders by utilizing the order ID.
- **Return Request**: Manages customer return inquiries by leveraging the detailed return policy.
- **Stock Availability**: Checks product availability with a fallback to the full catalog for out-of-stock products.
- **Out-of-Scope**: Escalates inquiries that are outside the bot's predefined categories.

## Running the Chatbot
### Kickoff Inputs
- **customer_message**: (required) The customer's message.
- **order_id**: (optional) The order ID related to the customer’s inquiry.
- **product_name**: (optional) The name of the product for stock inquiries.

### Output
The bot saves the composed customer replies to the `state.final_reply` field and also returns them through method outputs.

## Known Limitations
- Mock data is hardcoded in the agent backstories, which prevents real data integration.
- The chatbot does not maintain conversation history across sessions.
- The classifier output serves as the single point of failure for message routing.
- There is no authentication or rate-limiting implemented.

## Swapping in Real Data
To replace mock data with real data, you simply need to edit the sections of agent backstories that currently use mock data to retrieve information from a real API or database.

## Tech Stack
- **Platform**: CrewAI
- **API Version**: crewai.flow/v1
- **Development Environment**: CrewAI Studio
- **Integration**: composio GitHub integration
