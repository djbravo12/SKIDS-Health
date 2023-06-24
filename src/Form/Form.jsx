import { Link } from "react-router-dom"
import AddUserForm from "./AddUserForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"




const FormPage = () => {

    return (<>
        <section className="h-screen w-full flex justify-center items-center">
            <div className="w-[90%]">
                <div className="my-2">
                    <Link to='/'><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
                </div>
                <AddUserForm />
            </div>
        </section>
    </>)
}

export default FormPage