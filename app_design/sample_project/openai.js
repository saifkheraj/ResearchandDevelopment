import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: '', // ⛔️ Replace with your key or use env
  dangerouslyAllowBrowser: true,
});

export async function getMealPlan(goal) {
  const prompt = `
    You're a nutrition expert. Suggest a simple full-day meal plan for the goal: "${goal}".
    Return in this format:
    {
      "Breakfast": "...",
      "Snack 1": "...",
      "Lunch": "...",
      "Snack 2": "...",
      "Dinner": "..."
    }
  `;

  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  try {
    return JSON.parse(res.choices[0].message.content);
  } catch {
    return null;
  }
}
