import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import "../Chat.css";
import {
  sendMessage,
  chatSelector,
} from "../../../../slices/ChatSlice/ChatSlice";
const Conversation = ({ id }) => {
  const chatData = useSelector(chatSelector);
  console.log(chatData.chatData);
  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [chatList, setChatData] = useState([]);
  console.log(id);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    if(!chatData.chatData.length)return
    setChatData([...chatData.chatData]);
  }, [chatData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage({ message, id, token }));
     e.target.reset();
    
  };
  console.log("==============>", chatList);

  return (
    <>
      <div className="chat-container">
        {chatList.length > 0 ?
          chatList.map((item, index) => {
            return (
              <div className="chat-row">
                <div className="chat-thumb-container">
                  <div className="chat-user-thumb">
                    <img src={item.avatar} />
                  </div>
                  <span className="status-icon active"></span>
                </div>

                <div className="chat-info-container">
                  <div className="chat-user-name">
                    {item.name}{" "}
                    <span className="chat-time">
                      <Moment format="h:mm A">{item.sent_at}</Moment>
                    </span>
                  </div>
                  <div className="chat-message-text">{item.message}</div>
                </div>
              </div>
            );
          }):<>
          <div className="chat-row">
                <div className="chat-thumb-container">
                  <div className="chat-user-thumb">
                    <img src="s" />
                  </div>
                  <span className="status-icon active"></span>
                </div>

                <div className="chat-info-container">
                  <div className="chat-user-name">
                    <span className="chat-time">
                      <Moment format="h:mm A"></Moment>
                    </span>
                  </div>
                  <div className="chat-message-text"></div>
                </div>
              </div>
          </>}
       
      </div>

      <div className="chat-input-container">
        <div>
          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control chat-control"
              placeholder="Write your message here"
              onChange={handleChange}
            />
            <button type="submit" className="chat-submit-btn">
              <i className="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Conversation;
