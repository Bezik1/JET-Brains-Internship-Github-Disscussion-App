import "./index.css"

import { useFetch } from "../../../hooks/useFetch"
import { Repository } from "../../../types/Props"
import { IssueResponse } from "../../../types/Responses"
import Issue from "../Issue"
import { ModalProvider } from "../../../contexts/ModalContext"
import Title from "../../UI/Title"
import LoadingGate from "../../UI/LoadingGate"
import { motion } from "framer-motion"
import PrevArrow from "../../SVG/PrevArrow"
import { useNavigate } from "react-router-dom"

const IssuesList = ({ name, owner } : Repository) =>{
    const navigate = useNavigate()
    const { data: issues, loading } = useFetch<IssueResponse[]>(`/repos/${owner}/${name}/issues`)

    const showUpVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: i * 0.2 }
        }),
    };

    return (
        <div className="issues-list">
            <PrevArrow onClick={() => navigate('/')} className="prev-arrow" />
            <Title>{name}</Title>
            <LoadingGate loading={loading}>
                <div className="issues-container">
                    <ModalProvider>
                        {issues != null && issues.map((issue, i) => (
                            <motion.div
                                key={issue.id}
                                initial="hidden"
                                animate="visible"
                                variants={showUpVariants}
                                custom={i}
                            >
                                <Issue {...issue} i={i}/>
                            </motion.div>
                        ))}
                    </ModalProvider>
                </div>
            </LoadingGate>
        </div>
    )
}

export default IssuesList