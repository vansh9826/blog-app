import axios from "axios";
import { useState } from "react";

const Publish = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: ""
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlog((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const publish = async () => {
    try {
      await axios.post(
        "https://medium1.vanshchabra786.workers.dev/api/v1/blog/post",
        blog,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );
      setBlog({
        title: "",
        content: ""
      });
      alert("Published successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl m-auto flex flex-col gap-y-2">
      <textarea
        className="text-6xl focus:outline-none"
        rows={2}
        name="title"
        value={blog.title}
        onChange={handleOnChange}
        placeholder="Title"
      />
      <div className="min-h-screen">
        <textarea
          rows={10}
          name="content"
          value={blog.content}
          onChange={handleOnChange}
          className="border-none text-3xl focus:outline-none w-full"
          placeholder="Content"
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={publish}
          className="text-white bg-black rounded-full p-2 w-24 hover:bg-gray-800"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Publish;
