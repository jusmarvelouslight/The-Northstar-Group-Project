NORTHSTAR.
SUPPORT DEFLECTION MVP — PROJECT BOARD
Sprint Duration: Wednesday–Saturday
Final Deadline: Saturday, 11:59 PM
Product: Support Deflection Chatbot
Target Categories: Order Status + Returns & Refunds
________________________________________
Priority Key
Priority	Meaning
P0 — Critical	Must be completed for the MVP to work
P1 — High	Required for a strong demo/submission
P2 — Medium	Valuable but can be reduced if time is limited
________________________________________
PROJECT TASK BOARD
|      ID     |      Task                                                                                                                       |      Owner                    |      Priority     |      Deadline            |      Definition of Done                                                                                              |      Status        |      Est time      |
|-------------|---------------------------------------------------------------------------------------------------------------------------------|-------------------------------|-------------------|--------------------------|----------------------------------------------------------------------------------------------------------------------|--------------------|--------------------|
|             |                                                                                                                                 |                               |                   |                          |                                                                                                                      |                    |                    |
|     T01     |     Draft 1-page   MVP scope note (in-scope flows + 3 success metrics), get team sign-off                                       |                               |     P0            |     Wednesday            |     Two ticket categories selected, requirements documented   and agreed by all members                              |     Done           |     1hr 30 mins    |
|     T02     |     Journey map   covering 4 states: ask → verify order → check status → resolve/escalate, as 1   flowchart                     |     Angieh                    |     P0            |     Wednesday            |     Complete flow documented from customer question to final   answer/escalation                                     |     Not Started    |     2 hrs          |
|     T03     |     Journey map   covering: initiate → eligibility check → refund method → confirmation, as 1   flowchart                       |     Angieh                    |     P0            |     Wednesday            |     Complete return/refund flow documented including refund   expectations and fallback cases                        |     Not Started    |     2 hrs          |
|     T04     |     Compare 3 named platforms   (e.g. Dialogflow, Botpress, Rasa) on cost/integration/NLU in a table, record   the pick         |     Regina                    |     P0            |     Wednesday            |     Technology selected, workspace/repository created and   team can access it                                       |     Not Started    |     2 hrs          |
|     T05     |     Draft intent   list + sample utterances for Order Status only (8–10 intents)                                                |     Angieh                    |     P0            |     Wednesday            |     Conversation branches, inputs, responses and fallback   paths are documented                                     |     Not Started    |     2hrs           |
|     T06     |     Build static   chat-window shell (bubbles + input box), no logic wired yet                                                  |     Regina                    |     P0            |     Thursday             |     User can open/interact with the chatbot interface                                                                |     Not Started    |     3 hrs          |
|     T07     |     Wire Order   Status intent to return a hardcoded response for 1 test order ID                                               |     Regina+     abdurohman    |     P0            |     Thursday             |     User can ask about an order and receive an appropriate   status response through the chatbot                     |     Not Started    |     3 hrs          |
|     T08     |     Wire Returns   & Refunds intent to return a hardcoded response for 1 test case                                              |     Regina + abdurohman       |     P0            |     Thursday             |     User can ask about returning an item/refund and receive   the appropriate response                               |     Not Started    |     3 hrs          |
|     T09     |     After 2 failed   intent matches, bot sends escalation message + logs conversation to [sheet]                                |     Regina+ Abdurohman        |     P1            |     Thursday             |     Unsupported questions receive a clear fallback rather   than an incorrect answer                                 |     Not Started    |     3 hrs          |
|     T10     |     After 2 failed   intent matches, bot sends escalation message + logs conversation to [sheet]                                |     Abdurohman                |     P0            |     Thursday             |     Test cases cover normal, invalid, incomplete and   unsupported user inputs                                       |     Not Started    |     2.5 hrs        |
|     T11     |     Run the 8 Order   Status test cases against the live bot, log pass/fail + notes                                             |     Abdurohman                |     P0            |     Thursday             |     All core flows tested and failures recorded in a bug list                                                        |     Not Started    |     1.5 hrs        |
|     T12     |     Fix bug #[X]   (e.g. "crashes on empty order ID"), verify against the original   test case                                  |     Regina                    |     P0            |     Friday               |     All P0 defects identified during testing are fixed and   retested                                                |     Not Started    |     2 hrs          |
|     T13     |     Test 5 named   edge cases (misspelled ID, empty input, non-English text, long message,   repeat request) on Order Status    |     Regina                    |     P1            |     Friday               |     Chatbot tested against ambiguous, incomplete and   unexpected customer questions                                 |     Not Started    |     1.5 hrs        |
|     T14     |     Write a   3-scenario demo script (Order Status success, Returns success, fallback   trigger) with exact sample inputs       |     Angieh                    |     P1            |     Friday               |     At least 2 realistic customer scenarios can be   demonstrated from start to finish                               |     Not Started    |     1.5 hrs        |
|     T15     |     Go-live note   covering known limitations, open bugs, and rollback plan — 1 page                                            |     Regina                    |     P0            |     Friday               |     One-page note clearly identifies what works, known issues   and Northstar handover requirements                  |     Not Started    |     1 hr           |
|     T16     |     Confirm all 4   teammates have ≥1 commit/edit visible in repo history"                                                      |     Marrion                   |     P0            |     Friday               |     Each member has visible project contributions through   commits, edits, documentation or other auditable work    |     Done    |     20 min         |
|     T17     |     Compile 1 PDF   with charter screenshot, board export, and 3 test-run screenshots                                           |     Samuel                    |     P1            |     Saturday             |     Screenshots, test results, contribution evidence and   relevant project artifacts organized                      |     Not Started    |     1.5 hrs        |
|     T18     |     Run the full   16-case test suite end-to-end on the deployed bot in one sitting, log results                                |     Abdurohman                |     P0            |     Saturday             |     Core chatbot flows pass final testing with no unresolved   critical defects                                      |     Not Started    |     2 hrs          |
|     T19     |     Merge all flow   branches into main, remove unused test content, confirm no broken board links                              |     Marrion                   |     P0            |     Saturday             |     Prototype, documentation and project files are organized   and ready for submission/demo                         |     Done    |     1.5 hrs        |
|     T20     |     Run 1 full   timed rehearsal (≤10 min target), every teammate covers their section, record   for review                     |     All Members               |     P1            |     Saturday             |     Entire team knows the demo flow and can explain their   contribution                                             |     Not Started    |     1 hr           |
|     T21     |     Confirm against   rubric line-by-line: charter signed, 12+ tasks tagged, board permissions   public                         |     Samuel                    |     P0            |     Saturday 11:30 AM    |     All required deliverables verified against the assessment   requirements                                         |     Not Started    |     30 min         |
|     T22     |     Submit final   project                                                                                                      |     Marrion                   |     P0            |     Saturday 11:59 PM    |     Required deliverables successfully submitted before   deadline                                                   |     Done   |                    |




DAILY BOARD
WEDNESDAY — PLAN & DESIGN
Must Finish
•	T01 — Confirm MVP scope
•	T02 — Order Status journey
•	T03 — Returns & Refunds journey
•	T04 — Select technology
•	T05 — Design chatbot architecture
Wednesday Exit Criteria
The team must be able to answer:
What are we building?
Who is building each part?
How will the chatbot handle the two ticket categories?
What does success look like?
________________________________________
THURSDAY — BUILD
Must Finish
•	T06 — Chatbot interface
•	T07 — Order Status flow
•	T08 — Returns & Refunds flow
•	T09 — Fallback flow
•	T10 — Test cases
•	T11 — Initial testing
Thursday Exit Criteria
A customer should be able to interact with the chatbot and complete the two core support journeys.
________________________________________
FRIDAY — TEST & STABILIZE
Must Finish
•	T12 — Critical bug fixes
•	T13 — Edge-case testing
•	T14 — Demo scenarios
•	T15 — Go-live readiness note
•	T16 — Audit trail verification
Friday Exit Criteria
The project should be demo-ready.
No major feature should remain unfinished.
________________________________________
SATURDAY — FINALIZE & SUBMIT
Must Finish
•	T17 — Final evidence
•	T18 — Final QA
•	T19 — Final integration
•	T20 — Demo rehearsal
•	T21 — Submission check
•	T22 — Final submission
Saturday Final Check
11:30 PM: Internal submission deadline
11:59 PM: Absolute project deadline
The 11:30 PM internal deadline gives the team a 29-minute safety buffer.
________________________________________
DEFINITION OF DONE — MVP
The Support Deflection Chatbot can only be marked DONE when:
•	The chatbot is accessible and functional.
•	Order-status questions are handled.
•	Returns/refunds questions are handled.
•	The main customer journeys work from beginning to end.
•	Appropriate responses are generated.
•	Unsupported questions have a fallback.
•	Core functionality has been tested.
•	Critical bugs have been resolved.
•	Demo scenarios work.
•	Go-live readiness note is complete.
•	Collaborative audit trail is visible.
•	All five members have documented contributions.
•	Final files are organized.
•	The team has rehearsed the demonstration.
•	Submission is completed before 11:59 AM Saturday.
________________________________________
AUDIT TRAIL REQUIREMENT
Because Northstar's procurement office requires proof of genuine collaboration, the team will maintain a visible record of:
•	Code commits
•	Chatbot flow edits
•	Documentation edits
•	Test-case contributions
•	Bug reports
•	Meeting decisions
•	Presentation/document contributions
Each member should make identifiable contributions rather than having one member produce the entire project and the others simply attach their names.
________________________________________
MVP SCOPE PROTECTION RULE
If the team falls behind schedule, features will be removed in this order:
1.	Visual polish
2.	Optional chatbot features
3.	Additional edge-case functionality
4.	Third ticket category
The following must not be removed:
•	Order Status flow
•	Returns & Refunds flow
•	Basic fallback handling
•	Testing
•	Audit trail
•	Go-live readiness note
•	Working end-to-end demonstration
Core principle:
A small working chatbot is a successful MVP. A large unfinished chatbot is not.

