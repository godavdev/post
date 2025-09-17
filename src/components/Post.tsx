const Post = ({ text }: { text: string }) => {
  return (
    <div className="w-xl bg-white border border-gray-400 rounded h-40">
      {text}
    </div>
  )
}

export default Post
