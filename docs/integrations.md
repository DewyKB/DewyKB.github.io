---
sidebar_position: 5
---

# Integrations

## Rest API

Dewy provides a RestAPI which allows it to be used from any language.
See the [OpenAPI documentation](api/dewy-knowledge-base-api) for available methods.

## OpenAPI Clients

The RestAPI is defined using OpenAPI, allowing you to generate client libraries in a variety of languages.
See the [OpenAPI documentation](api/dewy-knowledge-base-api) for available methods.

### Python

The OpenAPI client for Dewy is published to PyPI as [`dewy-client`](https://pypi.org/project/dewy-client/).

- For LangChain, see [LangChain](#langchain) for a `DewyRetriever`.

### Javascript / Typescript

The OpenAPI client for Dewy is published to NPM as [`dewy-ts`](https://www.npmjs.com/package/dewy-ts).

- For LangChainJS, see [LangChainJS](#langchainjs) for a `DewyRetriever`.
- [Building a RAG chatbot with NextJS, OpenAI & Dewy](../blog/rag-app-with-nextjs-openai-and-dewy).

## Frameworks

### LangChainJS

[`dewy-langchainjs`](https://www.npmjs.com/package/dewy-langchainjs) provides a LangChainJS retriever backed by the Dewy API.
See [Building a question-answering CLI with LangChain.js and Dewy](../blog/qa-cli-with-langchain).

### LangChain

[`dewy-langchain`](https://pypi.org/project/dewy-langchain/) provides a LangChain retriever backed by the Dewy API.