import { Heart } from "lucide-react"
import { useState } from "react"

export interface PostProps {
  id: string
  author: string
  text: string
  liked: boolean
  likesNum: number
}

const Post = ({ text, author, liked, likesNum }: PostProps) => {
  const [currentLiked, setCurrentLiked] = useState(liked)
  const [currentLikesNum, setCurrentLikesNum] = useState(likesNum)

  const toggleLike = () => {
    if (currentLiked) {
      setCurrentLikesNum((prev) => prev - 1)
    } else {
      setCurrentLikesNum((prev) => prev + 1)
    }
    setCurrentLiked((prev) => !prev)
  }

  return (
    <div className="w-xl bg-white border border-gray-400 rounded-lg  p-4 flex flex-col gap-2">
      <div className="text-lg font-medium">{text}</div>
      <div className="flex w-full justify-end text-sm text-gray-500">
        Posteado por: {author}
      </div>
      <div className="flex gap-1">
        <Heart
          onClick={toggleLike}
          className={`size-6 ${
            currentLiked ? "text-pink-400" : "text-gray-500"
          }`}
        />
        <div className="font-medium">{currentLikesNum}</div>
      </div>
    </div>
  )
}

export default Post
