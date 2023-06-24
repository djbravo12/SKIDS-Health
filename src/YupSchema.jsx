import * as  Yup from "yup"


const validationSchema = Yup.object().shape({
    name: Yup.string().matches(/^[A-Za-z\s]+$/).required('Name is required'),
    email: Yup.string().matches(/^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i, { excludeEmptyString: true }).email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^\d{10}$/).required('Phone number is required'),
});

export default validationSchema