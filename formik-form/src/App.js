import { Formik, Field } from 'formik';

function App() {
  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
     {
       ({handleSubmit, handleChange}) => (
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange} type="text" name="firstName"/>
        <br/>
        <br/>

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <br/>
        <br/>

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </form>
       )
     }
    </Formik>
  </div>
  );
}

export default App;
