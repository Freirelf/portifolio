import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
const Contact = () => {
  const formRef = useRef()
  const { alert, showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = ({ target: { name, value }}) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Lucas Freire',
          from_email: form.email,
          to_email: 'lucasfreirel.dev@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Obrigado pela sua mensagem 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "Não recebi sua mensagem 😢",
            type: 'danger',
          });
        },
      );
  }

  return (
    <section className="c-space my-20">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
        <div className="contact-container">
          <h3 className="head-text">Vamos conversar</h3>
          <p className="text-lg text-white-600 mt-3">Quer você esteja procurando construir um novo site, melhorar sua plataforma existente ou dar vida a um projeto único, estou aqui para ajudar.</p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Nome completo</span>
              <input 
                type="text" 
                name="name"  
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Insira seu nome completo"
                className="field-input"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input 
                type="email" 
                name="email"  
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Insira seu email"
                className="field-input"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Sua mensagem</span>
              <textarea 
                name="message"  
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Olá, Eu estou interessado em..."
                className="field-input"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>  
              {loading ? 'Enviando...' : 'Enviar Mensagem'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
            </button>

          </form>
        </div>
      </div>
      
    </section>
  )
}

export default Contact