function Contact() {
  return (
    <div>
      <h1>Contact page</h1>

      {/* ---------- Form container ---------- */}
      <div className="form-container">
        {/* ----- Message and socials ----- */}
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos pariatur odio, ratione sequi reprehenderit repellat ea voluptatum fuga sint facere esse voluptatibus, illum nam similique, quam illo nulla excepturi. Eum!</p>
          <p>Socials go here</p>
        </div>

        {/* ----- Form ----- */}
        <form>
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" name="first-name"></input>

          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name"></input>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"></input>

          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
