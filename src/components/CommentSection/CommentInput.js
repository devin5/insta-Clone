import React, {useState, useEffect} from 'react';


const CommentInput = props => {

  const [input, setInput] = useState({ text: "", username: "devin333"})

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.setComments( [ input] )

  };
console.log(input)

  return (
    <form className="comment-form" onsubmit={submitForm} >
      <input
        name="text"
        type="text"
        value={input.text}
        placeholder="Add comment... "
        onChange={handleChange}
      />
      <button type="submit"></button>
    </form>
  );
};

export default CommentInput;
