import { useEffect, useState } from "react"

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = () => {
        setScrollY(window.scrollY)
        console.log(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])
    
    return scrollY
}