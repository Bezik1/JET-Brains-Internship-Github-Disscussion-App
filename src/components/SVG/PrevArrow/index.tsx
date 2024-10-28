import "./index.css"

const PrevArrow = ({ className, onClick } : { className?: string, onClick?: () => void }) =>(
    <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 19L3 12M3 12L10 5M3 12L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default PrevArrow