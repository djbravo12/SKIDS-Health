import { useGlobalDataContext } from "../Context API/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faTrashCan, faUserTie, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"



const DataComponent = () => {


    const { userData, userDeleteButton, EditFormButton, } = useGlobalDataContext()

    return (<div className="border border-[#02178A]">
        <div className="flex justify-between border-b p-4">
            <div className="p-2">Total- {userData.length} {userData.length > 1 ? "Users" : "User"}</div>
            <Link to='/AddDetails' className="bg-[#FF4040] py-2 px-4">Add User</Link>
        </div>
        <table className="w-full max-w-full text-left ">
            <thead>
                <tr className="font-bold">
                    <th className="py-2 px-4 border"><FontAwesomeIcon icon={faUserTie} /> Name</th>
                    <th className="py-2 px-4 border "><FontAwesomeIcon icon={faPhone} /> Phone</th>
                    <th className="py-2 px-4 border"><FontAwesomeIcon icon={faEnvelope} /> Email</th>
                    <th className="py-2 px-4 border"></th>

                </tr></thead>
            <tbody>
                {userData.map((data) => {
                    const { id, name, email, phone } = data

                    return (<tr key={id}>
                        <td className="py-2 px-4 border">{name}</td>
                        <td className="py-2 px-4 border">{phone}</td>
                        <td className="py-2 px-4 border">{email}</td>
                        <td className="py-2 px-4 border flex justify-around">
                            <button onClick={() => { EditFormButton(data) }}><FontAwesomeIcon icon={faUserPen} className="hover:text-[#02178A]" /></button>
                            <button onClick={() => { userDeleteButton(id) }}><FontAwesomeIcon icon={faTrashCan} className="hover:text-[#FF4040]" /></button>
                        </td>

                    </tr>)

                })}
            </tbody>
        </table>
    </div>)
}


export default DataComponent