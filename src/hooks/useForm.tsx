import { FormEvent, useState } from "react";
import { HelpHttp } from "../helpers/HelpHttp";

type ValidateForm = {
  name: string;
  phone: string;
  comments: string;
};

type ValidationErrors = {
  name?: string;
  phone?: string;
  comments?: string;
};

type ValidateFunction = (form: ValidateForm) => ValidationErrors;

export const useForm = (
  initialForm: ValidateForm,
  validateForm: ValidateFunction
) => {
  const [form, setForm] = useState<ValidateForm>(initialForm);
  const [errors, setErrors] = useState<ValidationErrors>({
    name: "",
    phone: "",
    comments: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      HelpHttp()
        .post("https://formsubmit.co/ajax/adrian.ane7@gmail.com", {
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json ",
          },
        })
        .then(() => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
