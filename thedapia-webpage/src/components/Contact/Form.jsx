import ThedapiaMap from '../../img/thedapia-map.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import './Form.css'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c65291ab-110e-430b-a6d6-7cd1c1cc09ff"); //cambiar key a la de patrick
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    return (
        <div className="contact-container">
            <form onSubmit={onSubmit} className="contact-form">
                <h3>Contacto</h3>
                
                <input type="text" required id="nombre" name="nombre" placeholder="Nombre" />
                <input type="email" required id="email" name="email" placeholder="Email" />
                <textarea required id="mensaje" name="mensaje" placeholder="Mensaje" />
                <button type="submit">Enviar</button>
            </form>

            <div className="contact-info">
                <img src={ThedapiaMap} alt="" />
                <p><FontAwesomeIcon icon={faLocationDot}/> Av. Asamblea 682 CABA, 1424</p>
                <p><FontAwesomeIcon icon={faPhone}/> +5401133445566</p>
                <p><FontAwesomeIcon icon={faEnvelope}/> thedapia23@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact;