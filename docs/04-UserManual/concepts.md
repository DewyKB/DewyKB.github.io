---
sidebar_position: 1
--- 

# Concepts

## Introduction

Dewy is a state-of-the-art open-source project designed to simplify and optimize the retrieval of information from large volumes of unstructured text data. By leveraging advanced techniques in Retrieval-Augmented Generation (RAG) and semantic search, Dewy offers a powerful tool for building applications that require in-depth, contextually relevant search capabilities. 

This document outlines the core concepts behind Dewy, detailing how its main components work together to solve the challenges associated with extracting and querying knowledge from unstructured data.

## Core Concepts

Retrieval-Augmented Generation (RAG) combines the processes of retrieving information from a database and generating a response based on that information. Retrieval requires efficiently searching through large amounts of data to find relevant information, necessitating structures optimized for searchability based on semantic similarity (e.g., using vector space models). Generation, on the other hand, focuses on creating coherent and contextually appropriate responses, requiring detailed and specific information. 

This duality of needs—efficient retrieval based on broad relevance and detailed generation based on specific information—prompted us to adopt an architecture that separates these functions. **Embeddings** facilitate the retrieval of relevant data, while **Chunks** provide the rich, detailed content necessary for generating useful responses. This separation ensures Dewy's effectiveness in both locating the necessary information and crafting accurate, informative responses.

Dewy's architecture is built around four primary components: **Documents**, **Chunks**, **Embeddings**, and **Collections**. Each component plays a role in Dewy's ability to manage, process, and retrieve information.

### Documents

Documents are the fundamental unit of information in Dewy. They represent the raw, unstructured data provided by users, encompassing a wide range of content from short articles to extensive reports. Dewy is designed to handle tens to thousands of documents, each potentially spanning several hundred pages. Users can upload, update, and delete documents as needed, enabling Dewy to serve as a dynamic repository of knowledge.

### Chunks

Chunks are extracted segments of information from documents, designed to be more digestible and relevant for querying purposes. The extraction process involves parsing, summarization, and model-based interpretation to isolate the most pertinent information. This allows users to focus on specific aspects of their documents that are directly relevant to a given query. Chunks serve as the foundation for generating grounded responses to user queries, bridging the gap between raw data and actionable insights.

### Embeddings

Embeddings are Dewy's mechanism for identifying and retrieving relevant chunks based on a query. By applying advanced techniques such as tokenization, named entity recognition, and summarization, Dewy transforms chunks into a structured format that can be efficiently searched. These embeddings enable Dewy to optimize the retrieval process, ensuring that the most relevant chunks are identified by focusing on the semantic content of the information rather than its presentation.

### Collections

Collections provide a structured way to organize documents within Dewy. Each document is assigned to a collection, which acts as a queryable entity. Collections allow users to configure various aspects of the search operation, including the choice of embedding algorithm and distance metric, to tailor the search process to specific needs. This organizational structure enhances the flexibility and effectiveness of Dewy's search capabilities.

## User Interaction

### Loading Documents

Dewy functions as an advanced document store, allowing users to upload and manage their documents within the system. When a document is loaded or updated, Dewy automatically processes it to extract chunks and generate embeddings, streamlining the preparation of data for retrieval.

### Querying Chunks

Dewy operates similarly to a search engine, enabling users to query the system and retrieve chunks related to their search terms. Queries can be customized to specify the collection to search, the type of chunks to return, and how the results should be ranked and presented. This allows users to obtain highly relevant and contextually appropriate information in response to their queries.

## Conclusion

By integrating Documents, Chunks, Embeddings, and Collections into a cohesive system, Dewy addresses the challenges of extracting and retrieving information from unstructured text. Its architecture provides developers with a robust platform for building applications that require nuanced, contextually aware search capabilities. With Dewy, full-stack developers have access to an open-source knowledge base project that simplifies RAG and semantic search, making it easier to deliver rich, information-dense applications to users.