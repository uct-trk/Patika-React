import React, { useEffect, useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

const Form = ({ setContacts, contacts }) => {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // contacts değiştiğinde inputların içerisini temizldeik
  useEffect(() => {
    // inputların icerisini temizledik
    setForm(initialFormValues);
  }, [contacts]);

  // form submit edildiğinde
  const onsubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      alert("Eksiksiz olmalı");
      return false;
    }
    setContacts([...contacts, form]);
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Fullname"
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
