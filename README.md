# Northstar Support Chatbot

The Northstar Support Chatbot is an AI-powered solution designed to classify and automatically respond to the three most common customer inquiries from Northstar, an online clothing store. It also intelligently escalates messages that fall outside its scope.

## Overview
The chatbot operates across four primary branches:
- **Order Status**: Accesses order details using an order ID guard.
- **Return Request**: Guides users through the return process.
- **Stock Availability**: Checks the status of products, with a fallback to the full catalog for queries.
- **Out of Scope Escalation**: Handles inquiries that the chatbot cannot address.

## How to Run It
To initiate the chatbot, provide the required kickoff input:
- **customer_message**: The customer's inquiry (required).
- **order_id**: The customer's order ID (optional).
- **product_name**: The name of the product in question (optional).

The chatbot's outputs are located at:
- **state.final_reply**: Where composed replies are saved.
- **Method Outputs**: Generated alongside the conversation flow.

## Known Limitations
The following limitations apply:
- Mock data is hardcoded within the agent backstories and requires real API or database integration for a production environment.
- There is no memory of conversations across sessions.
- The classifier output serves as the single point of failure for routing outcomes.
- Currently, there is no authentication or rate-limiting in place.

## How to Swap in Real Data
Replace the mock data sections within the agent backstories with calls to genuine APIs or databases for a live implementation.

## Tech Stack
- **CrewAI**
- **crewai.flow/v1**
- **CrewAI Studio**
- **Composio GitHub integration**