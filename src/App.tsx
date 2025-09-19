import { useState } from "react"
import Post, { type PostProps } from "./components/Post"

const posts: PostProps[] = [
  {
    id: "1",
    author: "David",
    liked: false,
    text: "Hola como estas",
    likesNum: 12,
  },
  {
    id: "a",
    author: "Alejandro",
    liked: true,
    text: "Adios",
    likesNum: 4,
  },
  {
    id: "b",
    author: "Oscar",
    liked: false,
    text: "Post numero 3",
    likesNum: 2,
  },
]

export default function App() {
  const [search, setSearch] = useState("")
  const handleClear = () => {
    setSearch("")
  }

  const filteredPosts = posts.filter((post) =>
    post.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full h-screen bg-amber-400 flex flex-col gap-2 items-center p-4">
      <div className="p-2 flex flex-col gap-2 items-center justify-center w-xl">
        <p className="font-bold text-xl">Busqueda</p>
        <input
          className="bg-white w-full text-xl border rounded-md border-gray-400 px-3 py-1.5"
          placeholder="Busqueda por texto..."
          type="text"
          value={search}
          onChange={({ target: { value } }) => {
            setSearch(value)
          }}
        />
        <button
          className="bg-white p-2 rounded border border-gray-400 hover:scale-105 transition-all cursor-pointer"
          onClick={handleClear}
        >
          Limpiar busqueda
        </button>
      </div>
      {filteredPosts.map((value) => (
        <Post
          key={value.id}
          {...value}
        />
      ))}
    </div>
  )
}
