import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Discuss.css";

export default function Discuss() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Check if userInput is not empty before adding a new message
    if (userInput.trim() !== "") {
      const newMessage = {
        user: "Unknown User", // You can replace this with the actual user information
        message: userInput,
      };

      setMessages([...messages, newMessage]);
      setUserInput(""); // Clear the userInput
    }
  };

  return (
    <div id="discusbg">
      <Navbar />
      <div id="discushead">
        <h1>Discussion</h1>
      </div>
      <div className="discussionsec">
        <div className="discusbox">
          {messages.map((message, index) => (
            <div className="discusbox1" key={index}>
              <div className="d-flex align-items-center py-2">
                <div className="userprofile">
                  <img src="" alt="" />
                </div>
                <h5>{message.user}</h5>
              </div>
              <div className="usermsg px-1">
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="discusinputbox">
          <p>enter your message</p>
          <form
            className="was-validated d-flex flex-row"
            onSubmit={handleSendMessage}
          >
            <div className="mb-3" id="textarea">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
              <div className="invalid-feedback">Please enter your message.</div>
            </div>
            <div className="mb-3">
              <button id="sendmsg" type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}






