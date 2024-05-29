import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router"

export default function Source() {

    const { id } = useParams()

    return (
        <div>
            <h1 className="text-center my-[100px] text-[40px] h-full">Source - { id }</h1>
            
            <div className="flex justify-center items-center ">
                <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-[300px]"/>
            </div>
        </div>

    )
}