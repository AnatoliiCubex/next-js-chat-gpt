// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../utils/openai";

type Data = {
  name: string;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  try {
    const { question } = request.query;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });

    const response_ = completion.data.choices[0].message;
    response.status(200).json(response_);
  } catch (error) {
    console.log(error);
  }
}
