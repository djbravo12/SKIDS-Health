import { useGlobalDataContext } from '../Context API/Context'

const AlertComponent = () => {

    const { alertMessage } = useGlobalDataContext()

    return (<>

        {alertMessage && <div className="bg-[#FF4040] fixed top-0 left-0 w-full z-10 px-4 py-2">
            {alertMessage}
        </div>}
    </>)
}

export default AlertComponent