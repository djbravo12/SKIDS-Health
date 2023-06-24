import { Formik, Field, Form } from 'formik'
import { useGlobalDataContext } from '../Context API/Context';
import { useState } from 'react';
import validationSchema from '../YupSchema';



const AddUserForm = () => {

    const { setUserData, showAlert } = useGlobalDataContext()
    const [idValue, setIdvalue] = useState(0)


    const initialValues = {
        name: '',
        email: '',
        phone: '',
    };


    const handleSubmit = (values, { resetForm }) => {
        const newVal = { id: idValue, ...values }
        setUserData((prev) => { return [...prev, newVal] })
        setIdvalue(prevIdvalue => prevIdvalue + 1)
        showAlert("Contact add in your list")
        resetForm();
    };



    return (<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} >

        {({ errors, touched }) => (

            <Form className="bg-[#02178A] backdrop-blur-2xl  lg:p-[10em] px-12 py-20 ">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-start-1 col-end-3 bg-red-100">

                        <Field type="text" id="name" name="name" placeholder="Name" className={`focus:outline-none  pl-4 py-2 lg:pl-6 lg:py-4 border-2 w-full ${errors.name && touched.name ? 'placeholder:text-[#FF4040]  border-[#FF4040]' : 'placeholder:text-[#02178A]  border-[#02178A]'}`} />
                    </div>

                    <div className="col-start-1 col-end-2">

                        <Field type="email" id="email" name="email" placeholder="Email" className={`focus:outline-none pl-4 py-2 lg:pl-6 lg:py-4 border-2 w-full ${errors.email && touched.email ? 'placeholder:text-[#FF4040]  border-[#FF4040]' : 'placeholder:text-[#02178A]  border-[#02178A]'}`} />

                    </div>

                    <div className="col-start-2 col-end-3">
                        <Field type="number" id="phone" name="phone" placeholder="Contact no" className={`rounded-sm focus:outline-none pl-4 py-2 lg:pl-6 lg:py-4 border-2 w-full ${errors.phone && touched.phone ? 'placeholder:text-[#FF4040]  border-[#FF4040]' : 'placeholder:text-[#02178A]  border-[#02178A]'}`} />
                    </div>

                    <div className="col-start-1 col-end-3 flex gap-6 justify-center mt-6">
                        <button type="submit" className="py-3 px-3 bg-[#FF4040] text-[#FFFFFF]">Add User</button>
                        <button type="reset" className="py-3 px-5 bg-[#FFFFFF]">Reset</button>
                    </div>
                </div>
            </Form>
        )}

    </Formik>
    )
}


export default AddUserForm