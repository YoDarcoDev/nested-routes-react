import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Map() {

    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const location = useLocation()

   

    const handleModal = () => {
        setShowModal(false)
        navigate('/map')
    }

    return (
        <>
            <h1 className="text-center mt-[100px] text-[40px]">Map</h1>
            
            <div className="flex flex-col items-center mt-[50px]">
                <Link to={`${location.pathname}/notice/27`} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Capsule 27</Link>
                <Link to={`${location.pathname}/notice/43`} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Capsule 43</Link>
                <Link to={`${location.pathname}/notice/38`} onClick={() => setShowModal(true)} state={{ previousLocation: location.pathname }}>Capsule 38</Link>
            </div>
            
            <AnimatePresence>
                { showModal &&          
                    <motion.div
                        className="fixed inset-0 bg-red-200 translate-y-[100%]"
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