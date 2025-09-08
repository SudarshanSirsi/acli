import React, { useState } from 'react';
import { render, Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import { main } from './ai.js';

const SearchQuery = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [dots, setDots] = useState('.')
    const [submitted, setSubmitted] = useState(false)

    const handleOnSubmit = async () => {
        setSubmitted(true)
        setLoading(true)
        handleDots()
        setResponse("");
        try {
            const res = await main(query)
            setResponse(res.text)
        } catch (error) {
            setResponse(`Error: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    const handleDots = () => {
        setInterval(() => {
            setDots((prev) => {
                if (prev.length > 2) {
                    return "";
                }
                return prev += "."
            })
        }, 300)
    }

    return (
        <Box flexDirection="column">
            <Text >Enter your query: </Text>
            <Box borderStyle="single" marginRight={1} width="100%" >
                <TextInput
                    placeholder="Enter your query: "
                    value={query}
                    onChange={setQuery}
                    onSubmit={handleOnSubmit}

                />
            </Box>

            {submitted && <Box borderStyle="round" borderColor="blue" marginRight={1} width="100%" >
                {loading && <Text color="yellow">Waiting for response{dots}</Text>}
                {!loading && <Text>{response}</Text>}
            </Box>
            }
        </Box>
    );
};

render(<SearchQuery />);
