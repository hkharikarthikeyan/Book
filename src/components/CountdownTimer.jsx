import { useState, useEffect } from 'react'

export default function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const target = targetDate || new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now

        const updateTimer = () => {
            const now = new Date()
            const diff = target - now

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            })
        }

        updateTimer()
        const interval = setInterval(updateTimer, 1000)
        return () => clearInterval(interval)
    }, [targetDate])

    const blocks = [
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Secs' },
    ]

    return (
        <div className="flex items-center justify-center gap-2 sm:gap-3">
            {blocks.map((block, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center">
                        <div className="w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] rounded-xl bg-dark-800/80 border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
                            <span className="text-xl sm:text-2xl font-extrabold text-white tabular-nums relative z-10">
                                {String(block.value).padStart(2, '0')}
                            </span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 mt-1.5 uppercase tracking-wider">{block.label}</span>
                    </div>
                    {i < blocks.length - 1 && (
                        <span className="text-xl font-bold text-gray-600 mb-5">:</span>
                    )}
                </div>
            ))}
        </div>
    )
}
