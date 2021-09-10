import { Formik, Field } from "formik";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          hobies: [],
          country: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              value={values.firstName}
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <br />
            <br />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <br />
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

            <select
              value={values.country}
              name="country"
              onChange={handleChange}
            >
              <option value="tr">TR</option>
              <option value="en">ENG</option>
              <option value="usa">USA</option>
            </select>

            <br />
            <br />
            <br />

            <button type="submit">Submit</button>
            <br />
            <br />
            {JSON.stringify(values)}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
