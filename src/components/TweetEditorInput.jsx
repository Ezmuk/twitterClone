export default function TweetEditorInput({ register }) {
  return (
    <div>
      <input
        className="tweet-editor-input w-full h-[60px] border-0 outline-none text-xl bg-black text-white resize-none pt-4 pb-0 px-0 my-3 md:my-5"
        placeholder="What's happening ?"
        {...register("tweet", {
          maxLength: {
            value: 180,
            message: "message must be under 180 characters",
          },
        })}
        required="true"
      />
    </div>
  );
}
