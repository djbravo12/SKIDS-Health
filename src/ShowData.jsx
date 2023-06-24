import { useGlobalDataContext } from "./Context API/Context"
import FormModal from "./Modals Components/FormModal"
import DeletePopUpModal from "./Modals Components/DeletePopUpModals"
import EmptyDataComponent from "./ShowData Component/EmptyDataComponent"
import DataComponent from "./ShowData Component/DataComponent"



const DisplayData = () => {

    const { userData, showModal } = useGlobalDataContext()


    if (userData.length == 0) {
        return (<>
            <EmptyDataComponent />
        </>)
    }




    return (<>
        <main className="px-4 py-6 relative">
            <DataComponent />
            {showModal && <FormModal />}
            <DeletePopUpModal />
        </main>

    </>)
}

export default DisplayData