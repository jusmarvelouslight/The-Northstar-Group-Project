# Northstar Retail — Support Workflow Decision Trees

These decision trees are the implementation-ready workflow reference for the Northstar support portal.

## 1. Order Status — Support Workflow

![Order Status decision tree](decision-tree-order-status.png)

**Flow:** Customer Message → Classify Question → Order Status → Order ID Present?

- **Yes** → Look Up Order Status → Order status response
- **No** → Request Order ID → Order ID requested

## 2. Returns & Refunds — Support Workflow

![Returns & Refunds decision tree](decision-tree-returns-refunds.png)

**Flow:** Customer Message → Returns & Refunds → Purchased Within 30 Days?

- **Yes** → Eligible for Full Refund → Provide free prepaid return label
- **No** → Standard Return Closed → May qualify for store credit upon review

- 
- ## Handoff

These decision trees translate the Northstar Retail support requirements into implementation-ready workflow logic.

### Order Status
- Check whether an Order ID is available.
- If present, look up the order status.
- If missing, request the Order ID.
- Return the appropriate customer-facing response.

### Returns & Refunds
- Check whether the purchase falls within the return window.
- If eligible, proceed with the refund/return path.
- If outside the window, close the standard return path or route for review.
- Return the appropriate customer-facing response.

### Next Team Step
Use these flows as the reference when implementing the corresponding HTML/JavaScript interactions and testing the support workflow.


