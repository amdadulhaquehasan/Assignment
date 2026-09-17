import { Star } from "lucide-react"

export default function Rating({ value }) {
  if(value == null){
    return <span className="text-sm text-paper-muted">Unrated</span>
  }
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-violet-bright">
        <Star size={14} className="fill-violet-bright text-violet-bright"/>
        {value.toFixed(1)}
    </span>
  )
}
