import { AnimatePresence } from "framer-motion";
import Loading from "../components/Loader";
import Message from "../components/Message";
import { useForm } from "../hooks/useForm";
import { ContentMain } from "./Services";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ValidateForm {
  name: string;
  phone: string;
  comments: string;
}

interface ContactValidationErrors {
  name?: string;
  phone?: string;
  comments?: string;
}

interface ContactValidateForm extends ValidateForm {
  name: string;
  phone: string;
  comments: string;
}

const initialForm = {
  name: "",
  phone: "",
  comments: "",
};

const validationsForm = (
  form: ContactValidateForm
): ContactValidationErrors => {
  const errors: ContactValidationErrors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexPhone = /^\d{3}-?\d{3}-?\d{4}$/;
  const regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.phone.trim()) {
    errors.phone = "El campo 'Teléfono' es requerido.";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "El campo 'Teléfono' es incorrecto.";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido.";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres.";
  }
  return errors;
};

const styles = {
  fontWeight: "bold",
  color: "#dc3445",
};

const maxLength = {
  name: 50,
  phone: 15,
  comments: 255,
  col: 30,
  row: 10,
};

export const Contact = () => {
  const [responsiveMaps, setResponsiveMaps] = useState(false);

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 1024px)");

    const responsive = (e: MediaQueryListEvent) => {
      setResponsiveMaps(e.matches);
    };

    breakpoint.addEventListener("change", responsive);
    setResponsiveMaps(breakpoint.matches);

    return () => {
      breakpoint.removeEventListener("change", responsive);
    };
  }, []);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      exit={{ opacity: 0 }}
      className="section"
    >
      <ContentMain className="container">
        <h2>Contacto</h2>
        <ContentData>
          <ContentInfo>
            <p>
              <b>Dirección:</b> José Inocente Lugo Pte., Col del Centro, 40660
              Cd Altamirano, Gro.
            </p>
            <p>
              <b>Teléfono:</b> (+52) 767-102-8887
            </p>
            <ContentMainMaps>
              <h4>Nuestra ubicación:</h4>
              <MapContainer>
                {responsiveMaps ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236.66791288867242!2d-100.66822294539264!3d18.36157650358221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84332d8390dc2823%3A0xdb0b64b887440a90!2sTapicer%C3%ADa%20Miryta!5e0!3m2!1ses-419!2smx!4v1693352869049!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div>
                    <a
                      href="https://goo.gl/maps/6eKPnKZxACtk5m548"
                      target="_blank"
                    >
                      Ver ubicación
                    </a>
                  </div>
                )}
              </MapContainer>
            </ContentMainMaps>
          </ContentInfo>
          <ContactForm>
            <form onSubmit={handleSubmit}>
              <h4>Ponte en contacto con nosotros</h4>
              <label htmlFor="name">Tu nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Juan Pérez"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                required
                maxLength={maxLength.name}
              />
              {errors.name && <p style={styles}>{errors.name}</p>}
              <label htmlFor="phone">Tu teléfono</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="767-162-6546"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.phone}
                required
                maxLength={maxLength.phone}
              />
              {errors.phone && <p style={styles}>{errors.phone}</p>}
              <label htmlFor="comments">Tu mensaje</label>
              <textarea
                name="comments"
                id="comments"
                placeholder="¿Qué te gustaría que te tapicemos?"
                cols={maxLength.col}
                rows={maxLength.row}
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.comments}
                required
                maxLength={maxLength.comments}
              ></textarea>
              {errors.comments && <p style={styles}>{errors.comments}</p>}
              <input type="submit" value="Enviar" />
            </form>
            {loading ? <Loading /> : null}
            <AnimatePresence>{response ? <Message /> : null}</AnimatePresence>
          </ContactForm>
        </ContentData>
      </ContentMain>
    </motion.section>
  );
};

const ContentData = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

const ContactForm = styled.div`
  padding: 28px 0;

  h4 {
    margin: 0 0 1.5rem 0;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    border: thin solid #000;
    font-family: "Open Sans", sans-serif;
    padding: 0.75rem;
    margin-bottom: 1rem;
    outline: none;
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1;
    background-color: transparent;
    resize: none;
    font-size: inherit;
    border-radius: 0.25rem;
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    display: block;
    font-family: "Raleway", sans-serif;
    width: 100%;
    padding: 1rem 1rem;
    margin: 0 0.5rem 0 0;
    display: inline-block;
    background-color: #90e0ef;
    border: none;
    color: #000;
    border-radius: 0.25rem;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1;
    text-transform: none;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }

  form {
    margin-bottom: 1rem;
  }

  label {
    padding: 0.5rem 0;
    margin: 0 0 0.5rem 0;
    display: inline-block;
    color: #444;
    font-weight: bold;
    line-height: 1;
    cursor: pointer;

    &::before {
      content: "*";
      color: #bb1616;
    }
  }

  input:focus {
    background-color: #f4f4f4;
  }

  textarea:focus {
    background-color: #f4f4f4;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    padding: 0 0 1.5rem 0;
  }
`;

const ContentInfo = styled.div`
  p {
    margin: 1.5rem 0 0 0;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const ContentMainMaps = styled.div`
  margin-top: 1.5rem;

  h4 {
    margin: 0;
  }
`;

const MapContainer = styled.div`
  div {
    margin-top: 1.5rem;
    a {
      color: #000;
    }
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    margin: 2rem 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;
