# Northstar Retail Co. — Support Portal Test & Verification

**PLP Northstar Sprint · Task 9 · 22 Edge Cases**

## Test Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 22 |
| Tested | 6 |
| PASS | 5 |
| FAIL | 1 |
| BUG | 0 |
| Not Yet Tested | 16 |
| Pass Rate | 83.3% |
| High Priority Passed | 4 |

---

## Test Log

| Test Case | Category | Priority | Action / Input | Expected Result | Actual Result | Status | Date Tested |
|---|---|---|---|---|---|---|---|
| TC-01 | Order Status | HIGH | Type `NS-1001` → click **Track Order** | Shows shipped via FedEx with tracking #12345 and delivery expected tomorrow. | — | PASS | 2026-08-14 |
| TC-02 | Order Status | HIGH | Type `NS-1002` → click **Track Order** | Shows processing in warehouse with estimated ship date in 2 days. | — | PASS | — |
| TC-03 | Order Status | MEDIUM | Type `NS-1003` → click **Track Order** | Shows generic fallback: order found and package in transit. | — | PASS | — |
| TC-04 | Order Status | MEDIUM | Type `NS-1004` → click **Track Order** | Shows generic fallback: order found and package in transit. | — | PASS | — |
| TC-05 | Order Status | MEDIUM | Type `NS-1005` → click **Track Order** | Shows generic fallback: order found and package in transit. | Order not found | FAIL | — |
| TC-06 | Order Status | HIGH | Leave field empty → click **Track Order** | Shows: `Please enter a valid Order ID.` | — | PASS | — |
| TC-07 | Order Status | HIGH | Enter spaces only → click **Track Order** | Shows: `Please enter a valid Order ID.` | — | NOT TESTED | — |
| TC-08 | Order Status | MEDIUM | Type ` NS-1001 ` → click **Track Order** | Shows FedEx shipped message. Surrounding spaces are removed using `.trim()`. | — | NOT TESTED | — |
| TC-09 | Order Status | MEDIUM | Type `ns-1001` → click **Track Order** | Shows generic in-transit fallback. Case-sensitive behavior should be documented. | — | NOT TESTED | — |
| TC-10 | Order Status | MEDIUM | Type `NS-9999` → click **Track Order** | Shows generic in-transit fallback. No crash or error. | — | NOT TESTED | — |
| TC-11 | Order Status | LOW | Type `1001` → click **Track Order** | Shows generic in-transit fallback. No crash. | — | NOT TESTED | — |
| TC-12 | Order Status | LOW | Type `@#$%^` → click **Track Order** | Shows generic in-transit fallback. Page remains intact. | — | NOT TESTED | — |
| TC-13 | Order Status | LOW | Enter a 50+ character string → click **Track Order** | Shows generic fallback without overflow or broken layout. | — | NOT TESTED | — |
| TC-14 | Order Status | LOW | Type `' OR 1=1` → click **Track Order** | Shows generic fallback. Page remains stable with no crash. | — | NOT TESTED | — |
| TC-15 | Returns & Refunds | HIGH | Click **Yes, within 30 days** | Shows full refund eligibility and clickable prepaid return-label link. | — | NOT TESTED | — |
| TC-16 | Returns & Refunds | HIGH | Click **No, over 30 days** | Shows standard-return closure and possible store-credit message. | — | NOT TESTED | — |
| TC-17 | Returns & Refunds | HIGH | Click Yes → then No | Result updates to store-credit message instead of stacking. | — | NOT TESTED | — |
| TC-18 | Returns & Refunds | HIGH | Click No → then Yes | Result updates to full-refund message. | — | NOT TESTED | — |
| TC-19 | Returns & Refunds | MEDIUM | Click Yes → click the **here** link | Link is clickable and currently goes to `#` as a placeholder. | — | NOT TESTED | — |
| TC-20 | Returns & Refunds | MEDIUM | Fresh page load → inspect Returns section | Result area remains hidden until a button is clicked. | — | NOT TESTED | — |
| TC-21 | Cross-Functional | HIGH | Enter `NS-1001` → use Returns Wizard | Both sections operate independently. | — | NOT TESTED | — |
| TC-22 | Cross-Functional | MEDIUM | Perform test → press F5 → repeat | Portal resets cleanly and functionality remains identical. | — | NOT TESTED | — |

---

## Results by Category

| Category | PASS | FAIL | BUG |
|---|---:|---:|---:|
| Order Status | 5 | 1 | 0 |
| Returns & Refunds | 0 | 0 | 0 |
| Cross-Functional | 0 | 0 | 0 |

---

## Known Issue

### TC-05 — NS-1005 Order Lookup

**Status:** FAIL

**Expected:**
The portal should display the generic fallback:

> Status: Order Found. Package is currently in transit.

**Actual:**
`Order not found`

**Action Required:**
Review the order-status lookup logic for `NS-1005` and determine whether the test fixture or portal implementation is incorrect.

---

## Known / Planned Verification Areas

The following areas still require testing:

- Empty Order ID validation
- Whitespace-only input
- Leading/trailing whitespace
- Case sensitivity
- Unknown Order IDs
- Numeric-only input
- Special characters
- Long input strings
- Injection-style input
- Returns/refunds wizard
- Return-result state replacement
- Return-label link behavior
- Initial hidden state
- Cross-functional behavior
- Page refresh/reset behavior

---

## Suggested Git Commit Message

```text
test: verify 5/22 edge cases for order status and returns wizard - 1 issue logged for handoff
