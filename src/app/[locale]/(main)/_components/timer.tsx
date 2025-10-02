import StarIcon from "@/assets/icons/star-icon"
import { useEffect, useState } from "react"

export default function Timer({ onEnd }: { onEnd?: () => void }) {
    const [timeLeft, setTimeLeft] = useState({ minutes: 2, seconds: 0 })

    const totalSeconds = timeLeft.minutes * 60 + timeLeft.seconds
    const isDanger = totalSeconds <= 30
    const isFinished = totalSeconds === 0

    useEffect(() => {
        if (isFinished) {
            if (onEnd) onEnd()
            return
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.minutes === 0 && prev.seconds === 0) {
                    clearInterval(timer)
                    return prev
                }
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 }
                }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isFinished, onEnd])

    return (
        <div
            className={`relative flex items-center gap-2 justify-center text-[40px] leading-[110%] font-[Raleway] font-bold
                ${isDanger ? "text-red-500" : "text-white"}
                ${isDanger && !isFinished ? "animate-blink" : ""}`}
        >
            <StarIcon
                className={`w-3 h-3 ${isDanger ? "text-red-500" : "text-yellow-500"}`}
            />
            <span>
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <StarIcon
                className={`w-3 h-3 ${isDanger ? "text-red-500" : "text-yellow-500"}`}
            />
        </div>
    )
}
