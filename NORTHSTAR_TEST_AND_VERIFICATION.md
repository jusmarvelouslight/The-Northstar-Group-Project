# Northstar Support Portal — Test & Verification
## MVP Verification
Date: 2026-08-15
## Test Summary
| Metric | Result |
|---|---:|
| Core Test Cases | 22 |
| Automated/Manual Verification Required | 22 |
| Known Order Fixtures | 5 |
| Support Branches | 4 |
---
## Order Status Tests
| ID | Test | Expected |
|---|---|---|
| TC-01 | `NS-1001` | Shipped via FedEx |
| TC-02 | `NS-1002` | Processing |
| TC-03 | `NS-1003` | In transit |
| TC-04 | `NS-1004` | In transit |
| TC-05 | `NS-1005` | In transit |
| TC-06 | Empty Order ID | Validation message |
| TC-07 | Spaces only | Validation message |
| TC-08 | ` NS-1001 ` | Trimmed and recognized |
| TC-09 | `ns-1001` | Normalized to uppercase |
| TC-10 | `NS-9999` | Safe not-found response |
| TC-11 | `1001` | Safe response |
| TC-12 | Special characters | No crash |
| TC-13 | Long input | No layout failure |
| TC-14 | Injection-style input | No crash |
---
## Returns Tests
| ID | Test | Expected |
|---|---|---|
| TC-15 | Within 30 days | Return/refund guidance |
| TC-16 | Over 30 days | Store-credit/closure guidance |
| TC-17 | Yes → No | Result replaced |
| TC-18 | No → Yes | Result replaced |
| TC-19 | Return workflow | No broken links |
| TC-20 | Fresh page | Result hidden |
---
## Cross-Functional Tests
| ID | Test | Expected |
|---|---|---|
| TC-21 | Order + Returns | Both operate independently |
| TC-22 | Refresh page | Portal resets cleanly |
---## Security Tests
The following must also be verified:
- API key is not present in frontend JavaScript.
- API key is not committed to GitHub.
- Empty requests are rejected.
- Invalid JSON does not crash the API.
- Very long user input does not break the interface.
- HTML supplied by a user is escaped before being rendered.
- Unknown order IDs return a safe response.
- Unknown products return a safe catalog fallback.
- Out-of-scope questions are escalated rather than fabricated.
---
## Known Fixture
`NS-1005` is intentionally included as an in-transit order fixture.
Previous testing recorded `NS-1005` as failing because the portal returned `Order not found`.
The new data source includes the fixture so the expected fallback behaviour can be verified.
---
## Acceptance Criteria
The MVP is considered functionally ready when:
- All four support branches work.
- All five order fixtures return expected results.
- Empty input is handled.
- Invalid input does not crash the application.
- Returns results replace previous results.
- Product searches return availability information.
- Unknown products receive a safe fallback.
- General questions reach the support assistant.
- Out-of-scope requests are escalated.
- The application works on mobile.
- No secret is exposed in the browser.
- `/api/support` responds correctly in the deployed environment.
