'use client';

import { useChat } from '@ai-sdk/react';
import { Bot, User, Send, Sparkles } from 'lucide-react';

export default function Alpha1Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="border-b border-slate-800 p-4 bg-slate-900/60 backdrop-blur flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">ALPHA 1</h1>
            <p className="text-xs text-indigo-400 font-medium">Next-Gen Intelligence Architecture</p>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-w-4xl w-full mx-auto">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-70 my-auto">
            <div className="p-4 bg-slate-900 rounded-full border border-slate-800">
              <Sparkles className="w-12 h-12 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold">Welcome to ALPHA 1</h2>
            <p className="text-sm max-w-md text-slate-400">
              How can ALPHA 1 assist you today? Ask questions, generate code, or analyze tasks.
            </p>
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-4 ${
                m.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`p-2 rounded-lg flex items-center justify-center shrink-0 ${
                  m.role === 'user' ? 'bg-indigo-600' : 'bg-slate-800 border border-slate-700'
                }`}
              >
                {m.role === 'user' ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-indigo-400" />
                )}
              </div>
              <div
                className={`p-4 rounded-2xl max-w-[80%] whitespace-pre-wrap leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-indigo-600/20 text-indigo-100 border border-indigo-500/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-200'
                }`}
              >
                <div className="text-xs font-semibold mb-1 opacity-50">
                  {m.role === 'user' ? 'You' : 'ALPHA 1'}
                </div>
                {m.content}
              </div>
            </div>
          ))
        )}
      </main>

      <footer className="p-4 border-t border-slate-800 bg-slate-900/40">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex items-center gap-3">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Message ALPHA 1..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-500"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white p-3 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-indigo-600/30"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </footer>
    </div>
  );
}
