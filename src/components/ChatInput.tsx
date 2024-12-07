
import { useState } from 'react';
import { trpc } from '~/utils/trpc';

const ChatInput = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const ask = trpc.assistant.ask.useQuery;

    const handleAsk = async () => {
        if (!question) return;
        const { data } = await ask.mutateAsync(question);
        setResponse(data?.answer || 'No response available');
    };

    return (
        <div>
            <input
                type="text"
    placeholder="Pune o întrebare..."
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    className="border p-2 rounded"
    />
    <button onClick={handleAsk} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Trimite
        </button>
    {response && <div className="mt-4">{response}</div>}
        </div>
    );
    };

    export default ChatInput;
