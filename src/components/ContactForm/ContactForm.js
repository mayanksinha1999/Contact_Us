import React, { useState } from 'react'
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import {MdMessage} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';



const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");


  const onViaCall = () =>{
    console.log("On call!!");
  }

  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }



  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>} onClick={onViaCall}/>
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
          
          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label hrmlFor="name">Name</label>
              <input type="text" name="name"/>
            </div>

            <div className={styles.form_control}>
              <label hrmlFor="email">Email</label>
              <input type="email" name="email"/>
            </div>

            <div className={styles.form_control}>
              <label hrmlFor="text">Text</label>
              <textarea name="text" rows="8"/>
            </div>
          <div style={{display:'flex', justifyContent:'end'}}>
            <Button text="SUBMIT BUTTON"/>
          </div>

          <div>
            {name + " " + email + " " + text}
          </div>


          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="/images/contact.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm