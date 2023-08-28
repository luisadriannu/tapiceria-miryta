import Loading from "../components/Loader";
import Message from "../components/Message";
import { useForm } from "../hooks/useForm";
import { ContentMain } from "./Services";
import { styled } from "styled-components";

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

  console.log(errors);

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
    <section className="container">
      <ContentMain className="section">
        <h2>Contacto</h2>
        <div>
          <h4>Ponte en contacto con nosotros</h4>
          <p>
            José Inocente Lugo Pte., Col del Centro, 40660 Cd Altamirano, Gro.
          </p>
          <ContactForm>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Tu nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Alison Love"
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
                placeholder="¿Qué te gustaría decir?"
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
            {response ? <Message /> : null}
          </ContactForm>
        </div>
      </ContentMain>
    </section>
  );
};

const ContactForm = styled.div`
  padding: 48px 0;

  input[type="text"],
  input[type="email"],
  textarea {
    border: thin solid #000;
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
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    display: block;
    width: 100%;
    padding: 1rem 1rem;
    margin: 0 0.5rem 0 0;
    display: inline-block;
    background-color: #000;
    border: none;
    color: #fff;
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
`;
