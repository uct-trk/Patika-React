import React from 'react'
import { useFormik } from "formik";
import validations from './validations';

const Signup = () => {
    const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues: {
          email: "",
          password: "",
          passwordConfirm: ""
        },
        onSubmit: (values) => {
          console.log(values);
        },
        validationSchema: validations
      });

      console.log(errors)
    return (
        <div>
            <h1>Sign Up</h1>

<form onSubmit={handleSubmit}>
  {/* <label htmlFor="firstName">First Name</label>
  <input
    onChange={handleChange}
    type="text"
    name="firstName"
    value={values.firstName}
  />
  <br />
  <br /> */}

  {/* <label htmlFor="lastName">Last Name</label>
  <input id="lastName" name="lastName" placeholder="Doe" />

  <br />
  <br /> */}

  <label htmlFor="email">Email</label>
  <input
    id="email"
    name="email"
    placeholder="jane@acme.com"
    type="email"
    onChange={handleChange}
    value={values.email}
    onBlur={handleBlur}
  />

  {errors.email && touched.email && <div>{errors.email}</div>}
  
  <br />
  <br />

  <label htmlFor="email">Password</label>
  <input
    id="password"
    name="password"
    placeholder="jane@acme.com"
    type="password"
    onChange={handleChange}
    value={values.password}
    onBlur={handleBlur}
  />
  {errors.password && touched.password && <div>{errors.password}</div>}

  <br />
  <br />

  <label htmlFor="email">Password Confirm</label>
  <input
    id="passwordConfirm"
    name="passwordConfirm"
    placeholder="jane@acme.com"
    type="password"
    onChange={handleChange}
    value={values.passwordConfirm}
    onBlur={handleBlur}
  />
  {errors.passwordConfirm && touched.passwordConfirm && <div>{errors.passwordConfirm}</div>}
 {/*  <br />
  <br />
  <br />

  <span>Male</span>
  <input
    type="radio"
    value="male"
    name="gender"
    onChange={handleChange}
    checked={values.gender === "male"}
  />

  <span>Famale</span>
  <input
    type="radio"
    value="famale"
    name="gender"
    onChange={handleChange}
    checked={values.gender === "famale"}
  />
  <br />
  <br />

  <div>
    Futbol
    <input
      onChange={handleChange}
      type="checkbox"
      name="hobies"
      value="football"
    />
  </div>
  <div>
    Sinema
    <input
      onChange={handleChange}
      type="checkbox"
      name="hobies"
      value="cinema"
    />
  </div>
  <div>
    Fotoğraf
    <input
      onChange={handleChange}
      type="checkbox"
      name="hobies"
      value="photo"
    />
  </div>

  <br />
  <br />
  <br />

  <select value={values.country} name="country" onChange={handleChange}>
    <option value="tr">TR</option>
    <option value="en">ENG</option>
    <option value="usa">USA</option>
  </select>

  <br />
  <br />
  <br /> */}

  <button type="submit">Submit</button>
  <br />
  <br />
  {JSON.stringify(values)}
</form>
        </div>
    )
}

export default Signup
