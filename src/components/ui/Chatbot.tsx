"use client"; 

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{sender: 'user' | 'bot', text: string}[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const themeColor = '#0d3b2e'; // Deep teal for header and buttons
    const lightGreen = '#dcfce7'; // Soft light green for user chat bubbles

    const formatMessage = (text: string) => {
        const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);
        
        return parts.map((part, index) => {
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
                return (
                    <a 
                        key={index} 
                        href={linkMatch[2]} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: '#0066FF', textDecoration: 'underline', fontWeight: '500' }}
                    >
                        {linkMatch[1]}
                    </a>
                );
            }
            
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            
            return part;
        });
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg })
            });
            
            const data = await response.json();
            setMessages(prev => [...prev, { sender: 'bot', text: data.reply || data.error }]);
        } catch (error) {
            setMessages(prev => [...prev, { sender: 'bot', text: 'Error connecting to server.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            {isOpen && (
                <div style={{ width: '320px', height: '450px', backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', display: 'flex', flexDirection: 'column', marginBottom: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: themeColor, color: 'white', padding: '16px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Spandhika Orthotics Assistant</span>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </button>
                    </div>
                    
                    <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#f9f9f9' }}>
                        {messages.length === 0 && (
                            <div style={{ textAlign: 'center', color: '#666', fontSize: '14px', marginTop: '20px' }}>
                                Hi! How can I help you today?
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                                <span style={{ 
                                    display: 'inline-block', 
                                    padding: '10px 14px', 
                                    borderRadius: '12px', 
                                    backgroundColor: msg.sender === 'user' ? lightGreen : '#fff', 
                                    color: msg.sender === 'user' ? themeColor : '#333', 
                                    fontSize: '14px', 
                                    border: msg.sender === 'bot' ? '1px solid #e5e5e5' : 'none', 
                                    maxWidth: '85%', 
                                    wordWrap: 'break-word', 
                                    whiteSpace: 'pre-wrap' 
                                }}>
                                    {formatMessage(msg.text)}
                                </span>
                            </div>
                        ))}
                        {isLoading && <div style={{ fontSize: '12px', color: '#666', fontStyle: 'italic' }}>Typing...</div>}
                    </div>

                    <div style={{ display: 'flex', borderTop: '1px solid #e5e5e5', backgroundColor: '#fff', padding: '8px', alignItems: 'center' }}>
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Type your message..." 
                            style={{ flex: 1, padding: '10px', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
                        />
                        <button 
                            onClick={sendMessage} 
                            style={{ padding: '10px', backgroundColor: themeColor, color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '8px' }}
                        >
                            <ArrowRight size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            )}

            <button 
                onClick={() => setIsOpen(!isOpen)} 
                style={{ width: '60px', height: '60px', backgroundColor: themeColor, color: '#fff', border: 'none', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'transform 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isOpen ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                )}
            </button>
        </div>
    );
}