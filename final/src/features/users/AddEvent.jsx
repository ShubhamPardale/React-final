import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

export function AddEvent() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (title && body) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          title,
          body,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setTitle("");
    setBody("");
  };

  return (
    <div className="create">
       <h1>Add Event</h1>
        <label htmlFor="nameInput">Title</label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            onChange={handleTitle}
            value={title}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            type="email"
            placeholder="details of events"
            id="emailInput"
            onChange={handleBody}
            value={body}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
    </div>
  );
}
