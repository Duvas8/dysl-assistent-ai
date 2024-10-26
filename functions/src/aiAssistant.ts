// openAiLangChainFunction.ts
import * as functions from 'firebase-functions/v2';
import * as admin from 'firebase-admin';
// import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import { LLMChain } from 'langchain/chains';
import { OpenAI as LangchainOpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';

dotenv.config();
admin.initializeApp();

// const openaiClient = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const llm = new LangchainOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',
});

const promptTemplate = new PromptTemplate({
  inputVariables: ['question'],
  template: 'Answer the following question: {question}',
});

const chain = new LLMChain({
  llm,
  prompt: promptTemplate,
});

export const aiAssistant = functions.https.onRequest(async (req, res) => {
  try {
    const question = req.body.prompt || 'Tell me something interesting about AI!';
    const response = await chain.call({ question });
    res.status(200).send({ message: response });
  } catch (error) {
    console.error('Error with OpenAI LangChain function:', error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

