
import styles from "./contactheader.module.css";

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <div className={styles.contact_content}>
        <h1>CONTACT US</h1>
        <p>
          LET'S CONNECT: WE'RE HERE TO HELP AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, <br />
          YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM ON THIS PAGE,
          OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
