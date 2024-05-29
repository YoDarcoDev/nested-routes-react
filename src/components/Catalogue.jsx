import { Outlet, useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'

export default function Catalogue() {

    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handleModal = () => {
        setShowModal(false)
        navigate(location.pathname)
    }

    return (
        <>
            <h1 className="text-center mt-[100px] text-[40px]">Catalogue</h1>

            <div className="flex flex-col items-center mt-[50px]">
                <Link to={'/catalogue/note/1'} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Note 1</Link>
                <Link to={'/catalogue/note/2'} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Note 2</Link>
                <Link to={'/catalogue/note/3'} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Note 3</Link>
            </div>

            <AnimatePresence>
                { showModal &&          
                    <motion.div
                        className="fixed inset-0 bg-slate-600 translate-y-[100%]"
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