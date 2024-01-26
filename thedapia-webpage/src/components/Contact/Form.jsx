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
      <section id="contact-section" className="h-192 flex justify-center items-center bg-gradient-to-r from-purple-300 to-red-300">
        <div className="contact-container">
            <form onSubmit={onSubmit} className="contact-form">
                <h3>Contacto</h3>
                
                <input className="border-b-2" type="text" required id="nombre" name="nombre" placeholder="Nombre" />
                <input type="email" required id="email" name="email" placeholder="Email" />
                <textarea required id="mensaje" name="mensaje" placeholder="Mensaje" />
                <button className="bg-fuchsia-300 hover:bg-fuchsia-500"type="submit">Enviar</button>
            </form>

            <div className="contact-info">
                <img src={ThedapiaMap} alt="" />
                <p><FontAwesomeIcon className="mr-2" icon={faLocationDot}/> Av. Asamblea 682 CABA, 1424</p>
                <p><FontAwesomeIcon className="mr-2" icon={faPhone}/> +5401133445566</p>
                <p><FontAwesomeIcon className="mr-2" icon={faEnvelope}/> thedapia23@gmail.com</p>
                <p>Horario de Atención: 10 hs a 15 hs y de 16 hs a 19:30 hs</p>
                <p>Como llegar: Subte E, Estación Jose M. Moreno</p>
                <p>Colectivos: 4, 7, 25, 42, 134, 135,  </p>
            </div>
        </div>
      </section>
    )
}

export default Contact;