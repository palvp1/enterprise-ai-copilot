import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! Ask me anything about HR policies.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (customMessage?: string) => {
    const finalMessage = customMessage || input;

    if (!finalMessage.trim()) return;

    const userMessage = {
      role: "user",
      content: finalMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: finalMessage,
        }),
      });

      const data = await response.json();

      const botMessage = {
        role: "assistant",
        content: data.answer,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h1>Enterprise AI</h1>

        <div className="menu-item active">HR Policies</div>
        <div className="menu-item">Onboarding</div>
        <div className="menu-item">Escalation</div>

        <button className="dark-btn">Dark Mode</button>
      </div>

      <div className="main">
        <div className="header">
          <div className="logo-section">
            🤖 <span>Enterprise Copilot</span>
          </div>

          <div className="avatar">AI</div>
        </div>

        <div className="chat-container">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user"
                  ? "message user-message"
                  : "message bot-message"
              }
            >
              <div className="message-content">
                {msg.content}

                {msg.role === "assistant" && (
                  <>
                    <div className="source-box">
                      <strong>Answer generated using semantic retrieval and enterprise document grounding.</strong>
                    </div>

                    <div className="feedback-buttons">
                      <button>👍 Helpful</button>
                      <button>👎 Not Helpful</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="typing">
              Enterprise Copilot is analyzing enterprise documents...
            </div>
          )}

          <div className="quick-prompts">
            <button onClick={() => sendMessage("Leave policy")}>
              Leave Policy
            </button>

            <button onClick={() => sendMessage("What is onboarding?")}>
              Onboarding
            </button>

            <button onClick={() => sendMessage("Explain escalation process")}>
              Escalation
            </button>
          </div>
        </div>

        <div className="input-section">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about HR policies..."
          />

          <button onClick={() => sendMessage()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;