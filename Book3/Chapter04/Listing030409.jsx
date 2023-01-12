function CustomerServiceSurvey(props) {
  return (
    <div>
      <h1>How was your experience with our website today?</h1>
      <select name="rating">
        <option>Excellent</option>
        <option>Pretty Good</option>
        <option>Fair</option>
        <option>Bad</option>
        <option>Horrible</option>
      </select>
      <h1>Would you like to leave any comments?</h1>
      <textarea name="comments" />
      <h1>
        Please provide your contact information if you'd like to be contacted.
      </h1>
      Your name:
      <input name="yourName" />
      <br />
      Your email:
      <input name="yourEmail" />
    </div>
  );
}
export default CustomerServiceSurvey;
