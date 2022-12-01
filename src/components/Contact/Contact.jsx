import React from 'react'
import {footerContact} from "../helpers/strings"

const Contact = () => {
  return (
    <div className='container'>
        <div>
            <h1>Contact</h1>
            <p>Lunes a Viernes 10:00 a 13.30 Hs. / 14.30 a 18.30 Hs. Sábados 10:00 a 15:00 Hs.</p>

            <div>
                {footerContact.map((contact) => {
                    return (
                        <li key={contact.id}>
                            {contact.icon} {contact.contact}
                        </li>
                    )
                })}
            </div>
        </div>
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
            </form>
        </div>
    </div>
  )
}

export default Contact