# Northstar Support Chatbot

## Overview
The Northstar Support Chatbot is an AI-powered tool designed to classify and auto-reply to the three most common customer support questions at Northstar, as well as escalate inquiries that fall outside of predefined categories. 

## What It Does
The chatbot classifies incoming customer messages into the following categories:
- **Order Status**: Handles queries about order tracking using an optional order ID.
- **Return Request**: Manages requests for returning items.
- **Stock Availability**: Informs customers about product availability, with a fallback to check a full catalog.
- **Out of Scope**: Escalates issues that do not fit into the previous categories.

## How to Run It
Kickoff inputs for the chatbot include:
- `customer_message` (required)
- `order_id` (optional)
- `product_name` (optional)

The chatbot processes these inputs, classifies them, and provides responses.

## Where the Output Lives
The output is saved in the `state.final_reply` field. Each method also outputs relevant information based on the classification and routing.

## Known Limitations
- Mock data is hardcoded in agent backstories, which needs to be replaced with real API or database calls for production use.
- The chatbot lacks conversation memory across sessions.
- The classifier's output is the single point of failure for proper query routing.
- There is currently no authentication or rate-limiting in place.

## How to Swap in Real Data
To implement real data, replace the agent backstory mock data sections with calls to a live API or database that provides updated information.

## Tech Stack
- CrewAI
- crewai.flow/v1
- CrewAI Studio
- composio GitHub integration