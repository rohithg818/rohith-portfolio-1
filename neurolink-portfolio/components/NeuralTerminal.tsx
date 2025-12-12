import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Terminal, Send, Cpu, Minimize2, Loader2 } from 'lucide-react';

export const NeuralTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'CONNECTION SECURE. I AM NEXUS. QUERY MY DATABASE REGARDING THE DEVELOPER.', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateAIResponse(input);
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "CRITICAL ERROR: SIGNAL LOST.", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out ${isOpen ? 'w-[90vw] md:w-[450px] h-[500px]' : 'w-auto h-auto'}`}>
      {/* Minimized State */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-[#00FF4F] text-[#00FF4F] shadow-[0_0_15px_rgba(0,255,79,0.3)] hover:bg-neutral-800 transition-all group"
        >
          <Cpu className="w-5 h-5 animate-pulse" />
          <span className="font-orbitron font-bold tracking-wider">NEURAL LINK</span>
        </button>
      )}

      {/* Expanded Terminal */}
      {isOpen && (
        <div className="flex flex-col w-full h-full bg-neutral-950/95 backdrop-blur-md border border-[#00FF4F]/50 shadow-[0_0_30px_rgba(0,255,79,0.15)] rounded-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-neutral-900 border-b border-green-900">
            <div className="flex items-center gap-2 text-[#00FF4F]">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest">NEXUS_V3.0 // ONLINE</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-red-400 transition-colors">
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 border ${
                  msg.role === 'user' 
                    ? 'bg-green-900/20 border-green-800 text-green-100 rounded-tl-lg rounded-bl-lg rounded-br-lg' 
                    : 'bg-neutral-800/50 border-neutral-700 text-neutral-200 rounded-tr-lg rounded-br-lg rounded-bl-lg'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>
                  <span className="text-[10px] opacity-50 block mt-2 text-right uppercase">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800/50 border border-neutral-700 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#00FF4F]" />
                  <span className="text-[#00FF4F] text-xs animate-pulse">PROCESSING...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-neutral-900 border-t border-green-900 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              className="flex-1 bg-neutral-950 border border-neutral-700 text-green-100 px-3 py-2 text-sm focus:outline-none focus:border-[#00FF4F] transition-colors"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="px-3 bg-green-900/30 border border-green-600 text-[#00FF4F] hover:bg-[#00FF4F] hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
