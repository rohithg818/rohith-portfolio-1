// Replaced live GenAI service with offline simulation
export const generateAIResponse = async (userPrompt: string): Promise<string> => {
  // Simulate network latency for realism
  await new Promise(resolve => setTimeout(resolve, 800));

  return "NEXUS AI SYSTEM OFFLINE: Live generative capabilities are currently disabled. Please refer to the 'Mission Logs' or 'System Status' sections for manual data retrieval.";
};