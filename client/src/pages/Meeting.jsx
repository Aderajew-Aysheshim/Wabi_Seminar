import { useParams } from "react-router-dom"

export default function Meeting() {
  const { code } = useParams()

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Meeting Room</h2>
      <p>Meeting Code: <strong>{code}</strong></p>
    </div>
  )
}
