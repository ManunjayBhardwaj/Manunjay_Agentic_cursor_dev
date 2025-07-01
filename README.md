
# 🧠 Agentic React Project Builder with Vibe Coding

**Vibe Coding** is a concept where you *vibe and the system codes for you*.  
This project demonstrates an **agentic AI assistant** built with Python that can autonomously scaffold full-stack React projects with backend, authentication, routing, and component structure using structured reasoning and tool execution.

---

## 💡 Features

- 🔁 Structured REPL cycle (Plan → Action → Observe → Output)
- 🧰 Custom tools for file creation, shell/Node commands, editing, and reading
- ⚛️ Automatically scaffolds Vite-based React frontend with components
- 🔒 Adds full-stack authentication with Express.js, MongoDB, and JWT
- 📦 Backend API with REST endpoints for todos and auth
- 📂 Generates detailed project structure for both frontend and backend

---

## 🛠️ Tech Stack

- **Python** – Core automation and OpenAI loop
- **OpenAI GPT-4o-mini** – Response generation in JSON format
- **Node.js & Vite** – React project scaffolding
- **Express.js** – Backend with Auth & Todo API
- **MongoDB** – Database for persistent storage

---

## 🚀 Usage

1. Set up your `.env` file with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_key
   ```

2. Run the agent:
   ```bash
   python main.py
   ```

3. Type any instruction like:
   ```
   make a todo app
   add login page
   setup backend
   ```

4. The system will:
   - Plan the structure
   - Call tools to generate files and run commands
   - Observe tool results and adapt
   - Loop until your full project is generated!

---

## 📁 Folder Structure Example

```
todo-app/
├── frontend/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
└── backend/
    └── src/
        ├── controllers/
        ├── models/
        ├── routes/
        ├── middleware/
        └── server.js
```

---

## 🙌 Why Vibe Coding?

Because you shouldn't have to write boilerplate or repeat yourself.
Just *describe* what you want, and this assistant will handle the rest.

---

## 🧩 Future Ideas

- Add Tailwind or Chakra UI setup
- Deploy project on Vercel/Render
- Integrate database provisioning
- Add test coverage and CI/CD pipeline

---

## 📣 Made with love by **Manunjay Bhardwaj**  
Follow me for more experiments in autonomous coding and vibe-driven development.

