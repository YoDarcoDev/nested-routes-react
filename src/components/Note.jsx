import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"

export default function Note() {

    const [showModal, setShowModal] = useState(false)
    
    const { id } = useParams()
    const navigate = useNavigate()

    const location = useLocation()


    const handleModal = () => {
        setShowModal(false)
        navigate(location.state.previousLocation)
    }

    return (
        <>
            <h1 className="text-center mt-[100px] text-[40px]">Note - { id }</h1>

            <div className="flex flex-col items-center mt-[50px]">
                <Link to={`${location.pathname}/source/1`} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Source 1</Link>
                <Link to={`${location.pathname}/source/2`} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Source 2</Link>
                <Link to={`${location.pathname}/source/3`} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Source 3</Link>
            </div>

            
            <AnimatePresence>
                { showModal &&          
                    <motion.div
                        className="fixed inset-0 bg-teal-700 translate-y-[100%]"
                        initial={{ y: '100%'}}
                        animate={{ y: 0 }}
                        exit={{ y: '100%', top: '100%'}}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="absolute right-[20px] top-[20px] cursor-pointer text-[20px] text-white" onClick={() => handleModal()}>X</span>
                        <Outlet />
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}