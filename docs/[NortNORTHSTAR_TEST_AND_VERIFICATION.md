Northstar Support Chatbot — Test and Verification

Verification Date
2025

Test Summary
| Metric | Result |
|---|---:|
| Core Test Cases | 28 |
| Support Branches | 4 |
| Product Categories | 6 |
| Products in Catalog | 25 |
| Live Deployment | https://teal-biscochitos-1eab1e.netlify.app |

---

Classification and Routing Tests
| ID | Customer Message | Expected Route |
|---|---|---|
| TC-01 | Do you have the Arctic Fleece Jacket in size M? | stock_availability |
| TC-02 | I want to return my order | return_request |
| TC-03 | Where is my order NS-1001? | out_of_scope (human escalation) |
| TC-04 | (no email in message) | contact_capture |
| TC-05 | I need help with my account | out_of_scope |

---

Stock Availability Tests
| ID | Test | Expected Result |
|---|---|---|
| TC-06 | Arctic Fleece Jacket (NS-001) | In stock — sizes XS-XL,
colours Navy/Charcoal/Forest Green, price $189.99 |
| TC-07 | Merino Wool Blazer (NS-005) | OUT OF STOCK reply, not not-found |
| TC-08 | Lambswool V-Neck (NS-015) | OUT OF STOCK reply |
| TC-09 | A-Line Wrap Skirt (NS-025) | OUT OF STOCK reply |
| TC-10 | Relaxed Linen Trousers (NS-035) | OUT OF STOCK reply |
| TC-11 | Broderie Anglaise Blouse (NS-045) | OUT OF STOCK reply |
| TC-12 | Product not in catalog | Not found in catalog — no
fabricated details |
| TC-13 | Cashmere Scarf (NS-051) | In stock — One Size,
Camel/Charcoal/Ivory/Blush, $129.99 |
| TC-14 | Structured Tote Bag (NS-055) | In stock — One Size,
Black/Tan/Dusty Rose, $249.99 |

---

Return Request Tests
| ID | Test | Expected Result |
|---|---|---|
| TC-15 | I want to return my purchase | Step-by-step Northstar return
instructions |
| TC-16 | How do I exchange for a different size? | Exchange
instructions (same item, different size or colour) |
| TC-17 | Return instructions include policy | 30-day window, unused
items, original packaging, no final-sale returns |
| TC-18 | Refund timeline | 5-7 business days stated |
| TC-19 | Reply delivered via Gmail | Email received at customer address |

---

Out of Scope Tests
| ID | Test | Expected Result |
|---|---|---|
| TC-20 | Order status query | Warm holding reply, flagged for human follow-up |
| TC-21 | Unrelated query (e.g. opening hours) | Warm holding reply,
flagged for human follow-up |
| TC-22 | Reply includes support@northstar.com | Escalation email
includes contact address |
| TC-23 | Reply delivered via Gmail | Email received at customer address |

---

Contact Capture Tests
| ID | Test | Expected Result |
|---|---|---|
| TC-24 | Message with no email address | Chatbot asks for customer
email address |
| TC-25 | Message with email address included | Email extracted and
used for reply delivery |
| TC-26 | Extracted email passed to all branches | Correct email
appears on all Gmail sends |

---

Email Delivery Tests
| ID | Test | Expected Result |
|---|---|---|
| TC-27 | Valid customer email in message | Gmail send confirmed,
email received |
| TC-28 | No email in message | Contact capture flow triggered, no Gmail crash |

---

Netlify Deployment Tests
| ID | Test | Expected Result |
|---|---|---|
| TD-01 | GET https://teal-biscochitos-1eab1e.netlify.app | Home / chat page loads |
| TD-02 | GET /dashboard | Dashboard page loads |
| TD-03 | GET /returns | Returns & Refunds page loads |
| TD-04 | GET /contact | Contact Us page loads |
| TD-05 | POST /api/chat with valid message | JSON reply received |
| TD-06 | GET /api/health | Returns healthy status |
| TD-07 | No Account page accessible | 404 or redirect on /account |

---

Security and Safety Checks
- API key is not present in frontend code
- Agents do not fabricate product names, SKUs, prices, or stock levels
- Out-of-stock items are reported as out of stock, never as not found
- Products not in the catalog are reported as not found, never invented
- Out-of-scope queries are escalated, never fabricated
- Empty or missing customer email triggers contact capture, not a crash
- No Account, Login, or Admin pages exist on the live site

---

Acceptance Criteria
The chatbot is considered production-ready when:
- All four support branches route and reply correctly
- In-stock products return accurate name, SKU, price, sizes, and colours
- Out-of-stock products return the correct out-of-stock message, not not-found
- Products not in the catalog return a safe not-found response
- Return requests receive full step-by-step policy instructions
- Out-of-scope queries receive a warm holding reply and human escalation
- Contact capture correctly asks for email when none is provided
- All replies are delivered via Gmail to the correct customer address
- The Netlify site loads correctly at https://teal-biscochitos-1eab1e.netlify.app
- The dashboard page loads and displays product support information
- No secrets are exposed in any deployed code
