// --------------------------------------------------------------------
//                            Interfaces
// --------------------------------------------------------------------
interface ContactProps {
  data: {
    contactPage: {
      heroText: {
        page_title: string;
        short_description: string;
      },
      socials: {
        href: string;
        social_media: string;
      }[]
    }[]
  }
};

// --------------------------------------------------------------------
//                            Component
// --------------------------------------------------------------------
function Contact({ data }: ContactProps) {
  const { heroText, socials } = data.contactPage[0];

  // console.log("hero text", heroText)
  // console.log("socials", socials)

  return (
    <div>
      <h1>{heroText.page_title}</h1>

      {/* ---------- Form container ---------- */}
      <div className="form-container">
        {/* ----- Message and socials ----- */}
        <div>
          <p>{heroText.short_description}</p>
          <a href={socials[0].href}>{socials[0].social_media}</a>
          <a href={socials[1].href}>{socials[1].social_media}</a>
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
