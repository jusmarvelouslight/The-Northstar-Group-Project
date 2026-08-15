
# Northstar Support Portal — Handoff Documentation
## Current MVP Status
The Northstar Support Portal has been migrated from the original CrewAI-centered prototype to a lightweight web application architecture.
## What Works
- Customer-facing support portal
- Responsive navigation
- Search interface
- Order-status lookup
- Returns and refunds workflow
- Product availability lookup
- General support assistant
- Out-of-scope escalation
- Input validation
- NS-1005 order fixture
- Mobile-responsive interface
- Server-side API endpoint
- Optional AI response enhancement
- No API key exposed in frontend code
## Architecture
```text
Browser
 ↓
index.html
 ↓
script.js
 ↓
POST /api/support
 ↓
api/support.js
 ↓
data/store.js
 ↓
Verified support result
 ↓
Optional OpenAI enhancement
 ↓
Customer response
```
## Why CrewAI Was Removed
CrewAI was useful for the original flow prototype, but the MVP does not require a multi-agent orchestration framework.
The support workflow currently has four predictable branches:
1. Order Status
2. Returns
3. Stock
4. Escalation
A direct server-side router is easier to maintain and deploy for this scope.
## AI Safety Principle
The AI layer is not the source of truth.
Verified Northstar data is passed to the model.
The model is instructed not to invent:
- orders
- tracking numbers
- stock
- prices
- delivery dates
- refund eligibility
- policies
## Known MVP Limitations
The current version still uses local data.
Production integration should eventually connect the support API to:
- order management
- inventory management
- customer accounts
- a database
- a helpdesk/ticket system
- email
- analytics
## Environment VariablesRequired only for AI enhancement:
```text
OPENAI_API_KEY
OPENAI_MODEL
```
The portal still has deterministic support functionality when the AI key is unavailable.
## Deployment
Recommended deployment platform:
Vercel.
The repository can be connected directly to Vercel.
The `/api/support.js` file is deployed as a Vercel Function.
## Next Production Priorities
1. Connect real order data.
2. Connect real inventory.
3. Add authentication.
4. Add rate limiting.
5. Add persistent conversation history.
6. Add human support ticket escalation.
7. Add monitoring and analytics.
8. Add automated end-to-end tests.
