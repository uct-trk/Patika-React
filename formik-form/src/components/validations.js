import * as yup from 'yup';


const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir email girin").required("Bu alan zorunludur"),
    password: yup.string().min(5,"parolanız en az 5 karakter olmalıdır").required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")],"parolalar uyuşmalıdır").required()
});

export default validations