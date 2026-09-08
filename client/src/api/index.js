import axios from "axios";

// http://localhost:8080/api/
const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const GetPosts = async () => await API.get("/getpost");
export const CreatePost = async (data) => await API.post("/post", data);
export const GenerateImageFromPrompt = async (data) => {
  console.log("calling open ai");
  const response = await API.post("/generateImage", data);
  console.log("response from open ai");
  return response;
};
