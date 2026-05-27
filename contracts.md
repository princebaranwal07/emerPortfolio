# API Contracts — Prince Baranwal Portfolio

## Scope
Only the **contact form** submission needs a backend. All other content (hero, about, skills, projects, experience, education, footer) is static and comes from `/app/frontend/src/mock/mock.js` — it stays on the frontend.

## Mocked Data Currently in mock.js (remains frontend)
- personalInfo, aboutHighlights, skills, projects, experiences, education, certifications, navLinks
- Contact form submission → currently stored in `localStorage` under key `pb-messages`

## Backend Endpoints to Implement

### 1. POST /api/contact
Create a new contact message.

Request JSON:
```json
{
  "name": "string (1-100)",
  "email": "valid email",
  "message": "string (1-2000)"
}
```

Response 200:
```json
{
  "id": "uuid",
  "name": "...",
  "email": "...",
  "message": "...",
  "created_at": "ISO8601"
}
```

Errors:
- 422 on validation failure (pydantic default)
- 500 on DB errors

Behavior:
- Validate using Pydantic model
- Store in MongoDB collection `contact_messages`
- Return created record (without MongoDB `_id`)

### 2. GET /api/contact/messages (optional, for owner)
Returns list of messages (limit 100, newest first). Not wired into frontend UI for now; just useful for Prince to curl/inspect later.

## Data Model (MongoDB `contact_messages`)
```
{
  id: uuid4 string,
  name: string,
  email: string,
  message: string,
  created_at: datetime (UTC)
}
```

## Frontend Integration Changes
File: `/app/frontend/src/components/portfolio/Contact.jsx`
- Replace localStorage mock with `axios.post(`${API}/contact`, form)` where `API = ${REACT_APP_BACKEND_URL}/api`
- Keep toast notifications for success/error
- Keep client-side validation (all fields required)

## Out of Scope (for MVP)
- Actual email delivery (no SMTP/SendGrid wired) — messages only stored in DB. Prince can add SMTP later.
- Auth, admin panel
