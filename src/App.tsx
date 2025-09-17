import Post from "./components/Post"

const arr = [123, 33, 30, 20, 10, 40]

export default function App() {
  return (
    <div className="w-full h-screen bg-amber-400 flex flex-col gap-2 items-center p-4">
      {arr.map((value, index) => (
        <Post
          key={index}
          text={`Este es el texto ${index}, suma del valor con index: ${
            index + value
          }`}
        />
      ))}
    </div>
  )
}
