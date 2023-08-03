import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Subject" />
        <textarea type="text" rows={4} placeholder="Message" />
        <button>Send message</button>
      </form>
    </div>
  );
}

export default ContactForm;
