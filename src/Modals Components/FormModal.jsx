import { useGlobalDataContext } from "../Context API/Context"
import { Form, Formik, Field } from 'formik'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import validationSchema from "../YupSchema"

const FormModal = () => {

    const { closeModal, getIDforEdit, setUserData, showAlert } = useGlobalDataContext()
    const { id, name, email, phone } = getIDforEdit


    const handleSubmit = (values) => {

        setUserData((prevUserData) => {
            const updatedPrevValues = prevUserData.map(prevUser => {
                if (prevUser.id === values.id) {
                    for (const key in prevUser) {
                        prevUser[key] = values[key]
                    }
                    return prevUser
                } else {
                    return prevUser
                }
            })
            return updatedPrevValues
        })

        showAlert("contact updated")
        closeModal()
    };


    return (
        <div className="bg-[rgba(2,23,138,0.45)] h-full w-full fixed top-0 left-0 flex  flex-col justify-center items-center ">

            <div className="w-[70%]">
                <div className="text-right">
                    <button onClick={() => { closeModal() }} className="hover:text-[#FF4040]">Close <FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div>
                    <Formik initialValues={{
                        id: id,
                        name: name,
                        email: email,
                        phone: phone
                    }}

                        onSubmit={handleSubmit}



                        validationSchema={validationSchema}>

                        {({ errors, touched, resetForm }) => (

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
                                        <button type="reset" className="py-3 px-5 bg-[#FFFFFF]" onClick={() => { resetForm({ values: { name: '', email: '', phone: '' } }) }}>Reset</button>
                                    </div>
                                </div>
                            </Form>
                        )}


                    </Formik>




                </div>
            </div>
        </div >
    )
}


export default FormModal