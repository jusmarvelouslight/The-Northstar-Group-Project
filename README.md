Northstar Support Portal
Northstar Support Portal is a lightweight customer-support MVP for Northstar Clothing Co.
The portal provides a customer-facing support experience for:
- Order status
- Returns and refunds
- Product and size availability
- General customer-support questions
- Out-of-scope escalation
## MVP Architecture
The project intentionally avoids unnecessary agent orchestration for the MVP.
### Frontend
- HTML5
- CSS3
- Vanilla JavaScript
### Backend
- Vercel Functions
- JavaScript
### AI Layer
- OpenAI Responses API
- Optional AI enhancement layer
The deterministic support logic continues to work without an OpenAI API key.
## Repository Structure
```text
The-Northstar-Group-Project/
■■■ api/
■ ■■■ support.js
■■■ data/
■ ■■■ store.js
■■■ docs/
■ ■■■ PROJECT_BOARD.md
■ ■■■ TEAM_CHARTER.md
■■■ .github/
■ ■■■ CODEOWNERS
■■■ .env.example
■■■ .gitignore
■■■ HANDOFF.md
■■■ NORTHSTAR_TEST_AND_VERIFICATION.md
■■■ README.md
■■■ TEAM_LOG.md
■■■ index.html
■■■ package.json
■■■ script.js
■■■ style.css
■■■ vercel.json
```
## Support Branches
### 1. Order Status
Customers can provide an Order ID such as:
- `NS-1001`
- `NS-1002`
- `NS-1003`
- `NS-1004`
- `NS-1005`
The system validates the input and returns the available order status.
### 2. Returns & Refunds
The portal asks whether the customer's order is within the 30-day return period.The system then returns the appropriate return guidance.
### 3. Stock Availability
Customers can search for products and receive information about available sizes and restock dates.
### 4. Out-of-Scope Requests
Requests outside the supported categories are not fabricated.
Instead, the portal explains that a human support specialist may be required.
## AI Behaviour
The AI layer is used only to improve the presentation of verified support information.
The AI must not invent:
- Order information
- Tracking information
- Stock quantities
- Refund eligibility
- Delivery dates
- Policies
Verified Northstar data remains the source of truth.
## Environment Variables
Create the following environment variables in the deployment platform:
```text
OPENAI_API_KEY=your_api_key
OPENAI_MODEL=gpt-5
```
Never commit the real API key to GitHub.
## Local Development
Install Vercel CLI if necessary and run:
```bash
vercel dev
```
Then open the local URL provided by Vercel.
## Deployment
Connect the GitHub repository to Vercel.
Add the required environment variables in the Vercel project settings.
Deploy the project.
Vercel automatically detects the `/api` function.
## MVP Limitations
This version intentionally uses local structured data.
For production, the following should eventually be replaced:
- Local order data → real order database/API
- Local inventory → real inventory system
- Simple support routing → production-grade intent classification
- No customer authentication → authenticated customer accounts
- No persistent conversations → database-backed conversation history
- No human ticket system → helpdesk integration
- No persistent newsletter storage → email marketing platform/database
## Security
Never expose the OpenAI API key in:
- `index.html`
- `script.js`
- `style.css`
- public GitHub files
- browser local storage
The API key must remain server-side.
## Project Goal
The goal of this MVP is to demonstrate a functional Northstar customer-support portal with clear routing, verified responses and a maintainable architecture.
CrewAI is not required for this MVP.
A future version may introduce a dedicated agent framework if the project grows to require complex multi-agent workflows.
