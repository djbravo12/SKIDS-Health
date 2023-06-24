/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null)


const ContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || [])
    const [showModal, setShowModal] = useState(false)
    const [getIDforEdit, setGetIDForEdit] = useState({})
    const [deletePopUp, setDeletePopUp] = useState({
        show: false,
        id: null,
    });
    const [alertMessage, setAlertMessage] = useState(null)



    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("userData"))
        if (getData) {
            setUserData(getData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData])

    const userDeleteButton = (e) => {
        setDeletePopUp({
            show: true,
            id: e
        })
    }

    const hanldeDeleteTrue = (e) => {
        if (e.show && e.id !== null) {
            setUserData((prevData) => { return prevData.filter((userData) => { return userData.id !== e.id }) })
        }
        showAlert("contact delete from your list")
        setDeletePopUp({ show: false, id: null })
    }

    const handleDeleteFalse = () => {
        setDeletePopUp({
            show: false,
            id: null
        })
    }



    const EditFormButton = (e) => {
        setShowModal(true)
        setGetIDForEdit(e)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const showAlert = (msg) => {
        setAlertMessage(msg)
        setTimeout(() => { setAlertMessage(null) }, 1000)
    }





    return <DataContext.Provider value={{ userData, setUserData, userDeleteButton, EditFormButton, showModal, closeModal, setGetIDForEdit, getIDforEdit, handleDeleteFalse, hanldeDeleteTrue, deletePopUp, alertMessage, showAlert }}>
        {children}
    </DataContext.Provider>
}


const useGlobalDataContext = () => { return useContext(DataContext) }


export { ContextProvider, useGlobalDataContext }