import { useGlobalDataContext } from "../Context API/Context"


const DeletePopUpModal = () => {

    const { hanldeDeleteTrue, handleDeleteFalse, deletePopUp } = useGlobalDataContext()

    return (deletePopUp.show && <div className="bg-transparent fixed top-0 left-0 w-full h-screen flex justify-center items-center">

        <div className=" bg-[#02178A] px-20 py-14">
            <h1 className="text-[#FFFFFF] text-xl">Are you sure want to delete?</h1>
            <div className="flex justify-evenly my-4">
                <button onClick={() => { hanldeDeleteTrue(deletePopUp) }} className="bg-[#FF4040] px-4 py-2 text-[#FFFFFF]">Delete</button>
                <button onClick={() => { handleDeleteFalse() }} className="text-[#FFFFFF] border px-4 py-2">Cancel</button>
            </div>
        </div>
    </div>
    )
}

export default DeletePopUpModal