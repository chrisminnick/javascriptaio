import { useState } from 'react';

function CustomerServiceSurvey(props) {
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  return (
    <div>
      <div>
        You've entered the following: <br />
        Rating:{rating}
        <br />
        Comments:{comments}
        <br />
        Name:{yourName}
        <br />
        Email:{yourEmail}
        <br />
      </div>
      <h1>How was your experience with our website today?</h1>
      <select
        name="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option>Excellent</option>
        <option>Pretty Good</option>
        <option>Fair</option>
        <option>Bad</option>
        <option>Horrible</option>
      </select>
      <h1>Would you like to leave any comments?</h1>
      <textarea
        name="comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <h1>
        Please provide your contact information if you'd like to be contacted.
      </h1>
      Your name:
      <input
        name="yourName"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />
      <br />
      Your email:
      <input
        name="yourEmail"
        value={yourEmail}
        onChange={(e) => setYourEmail(e.target.value)}
      />
    </div>
  );
}
export default CustomerServiceSurvey;
