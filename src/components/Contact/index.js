import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_qpdq14m',
        form.current,
        'r_r37kMJJEsw6yXsA'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>

        <h1 className='head-left'>
            Contact Me here:
        </h1>
        <h1 className='head-right'>
            find me there: <br />
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kacper-%C5%BCurawski/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#0072b1" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/xwaruz1212"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#000" />
          </a>
        </li>
      </ul>
        </h1>
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <br />
                <br />
                <li className='half'>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <br />
                <br />
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required>
                    </textarea>
                </li>
                <li className="flat-button">
                  <input type="submit" value="SEND" />
                </li>
              </ul>
            </form>
        </div>
    </>
  )
}

export default Contact;