---
title: Using the API
sidebar_position: 4
--- 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using the API


## Install the API client library

<Tabs groupId="language">
    <TabItem value="typescript" label="typescript" default>
    ```sh
    npm install dewy-ts
    ```
    </TabItem>
    <TabItem value="python" label="Python">
    ```sh
    pip install dewy-client dewy-langchain
    ```
    </TabItem>
</Tabs>

## Connect to an instance of Dewy

<Tabs groupId="language">
    <TabItem value="typescript">
    ```typescript
    import { Dewy } from 'dewy-ts';
    const dewy = new Dewy({endpoint: “http://localhost:3000”})
    ```
    </TabItem>
    <TabItem value="python" label="Python">
    ```python
    from dewy_client import Client

    client = Client(base_url="http://localhost:3000")
    ```
    </TabItem>
</Tabs>

## Add documents

<Tabs groupId="language">
    <TabItem value="typescript">
    ```typescript
    await dewy.kb.addDocument({
      collection: "main",
      url: 'https://arxiv.org/abs/2005.11401',
    })
    ```
    </TabItem>
    <TabItem value="python" label="Python">
    ```python
    from dewy_client import Client
    from dewy_client.api.kb import add_document
    from dewy_client.models import AddDocumentRequest
    add_document.sync(client=client, body=AddDocumentRequest(
        url = "https://arxiv.org/pdf/2305.14283.pdf",
        collection_id=collection_id,
    ))
    ```
    </TabItem>
</Tabs>

## Retrieve document chunks for LLM prompting

<Tabs groupId="language">
    <TabItem value="typescript">
    ```typescript
    const context = await dewy.kb.retrieveChunks({
      collection: "main",
      query: "tell me about RAG", 
      n: 10,
    });

    // Minimal prompt example
    const prompt = [
      {
        role: 'system',
        content: `You are a helpful assistant.
        You will take into account any CONTEXT BLOCK that is provided in a conversation.
        START CONTEXT BLOCK
        ${context.results.map((c: any) => c.chunk.text).join("\n")}
        END OF CONTEXT BLOCK
        `,
      },
    ]

    // Using OpenAI to generate responses
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [...prompt, [{role: 'user': content: 'Tell me about RAG'}]]
    })
    ```
    </TabItem>
    <TabItem value="python" label="Python">
    ```python
    from langchain_core.runnables import RunnableParallel, RunnablePassthrough
    from langchain_core.output_parsers import StrOutputParser
    from langchain_core.prompts import ChatPromptTemplate
    
    from dewy_langchain import DewyRetriever
    
    retriever = DewyRetriever.for_collection("main", base_url="http://localhost:8000")
    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """
                You're a helpful AI assistant. Given a user question and some retrieved content, answer the user question.
                If none of the articles answer the question, just say you don't know.
    
                Here is the retrieved content:
                {context}
                """,
            ),
            ("human", "{question}"),
        ]
    )
    
    def format_chunks(chunks):
        return "\n\n".join([d.page_content for d in chunks])
    
    chain = (
        { "context": retriever | format_chunks, "question": RunnablePassthrough() }
        | prompt
        | llm
        | StrOutputParser()
    )
    ```
    </TabItem>
</Tabs>
