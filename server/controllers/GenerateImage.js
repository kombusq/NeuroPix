// server/controllers/generateImage.js
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return next(createError(400, "Prompt is required and must be a string."));
    }

    // Generate image using GPT Image
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1024x1024",
      output_format: "png",
    });

    const imageBase64 = response.data[0].b64_json;

    res.status(200).json({ photo: imageBase64 });
  } catch (error) {
    // Handle OpenAI errors clearly
    console.error("Raw OpenAI SDK error:", error);
  
    if (error.response?.data) {
      // Attempt to parse buffer or raw JSON
      try {
        const buffer = Buffer.isBuffer(error.response.data)
          ? error.response.data
          : Buffer.from(error.response.data);
  
        const errorString = buffer.toString("utf-8");
        const parsed = JSON.parse(errorString);
        const message = parsed.error?.message || errorString;
  
        console.error("Parsed OpenAI error:", message);
        return next(createError(error.response.status, message));
      } catch (parseError) {
        console.error("Failed to parse error buffer:", parseError);
        return next(
          createError(
            error.response.status || 500,
            "Failed to decode error response from OpenAI"
          )
        );
      }
    }
  
    // If error doesn't have a response, fall back
    const status = error.status || 500;
    const message = error.message || "Unexpected error during image generation.";
    return next(createError(status, message));
  }
};
