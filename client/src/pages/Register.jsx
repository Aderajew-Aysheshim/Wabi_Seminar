export default function Register() {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input className="border p-2 w-full mb-3" placeholder="Name" />
      <input className="border p-2 w-full mb-3" placeholder="Email" />
      <input className="border p-2 w-full mb-3" placeholder="Password" type="password" />
      <button className="bg-green-500 text-white px-4 py-2 w-full">
        Register
      </button>
    </div>
  )
}
