---
layout: post
title: RAG-Powered Textbook Assistant
date: 2026-02-10 21:01:00
description: Built a RAG-based AI tutor for textbooks. Ingests PDF or web sources into ChromaDB, answers questions via LlamaIndex.
tags: AI RAG ChromaDB LlamaIndex Docling Ollama Chainlit
categories:
thumbnail: assets/img/portfolio/textbook-AI-assistant/chainlit-screenshot.png
featured: false
---

<p style="text-align:center;">
  <a href="https://github.com/PierreExeter/textbook-AI-assistant">VIEW CODE</a>
</p>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/portfolio/textbook-AI-assistant/chainlit-screenshot.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>

## Situation

Learning from dense textbooks is slow — more time is spent hunting for the right passage than actually understanding the material. Large language models can answer questions conversationally, but without access to the source text they hallucinate or give generic answers. Retrieval-Augmented Generation (RAG) solves this by grounding every response in the actual content.

## Task

I built an AI tutor that lets you point it at any PDF textbook or web article and immediately start asking questions in plain language. It retrieves the most relevant passages, feeds them to a local LLM, and returns an answer with cited sources and relevance scores — all running on your own machine with no API keys required.

## Action

I built a modular Python application with a clean separation between ingestion, retrieval, and conversation:

- **RAG Pipeline** (LlamaIndex + ChromaDB + Docling): Ingests PDFs with full OCR and table-structure support, chunks the content, and stores embeddings in a persistent vector database. A hash-based naming scheme isolates each textbook in its own collection, and lazy index creation skips expensive re-ingestion on subsequent runs.
- **Smart Retrieval**: Uses Maximal Marginal Relevance (MMR) to select context chunks that are both relevant and diverse, reducing redundant passages. Every answer includes source citations with relevance scores so you can verify claims against the original text.
- **Configuration System**: Three-tier cascade — YAML defaults, user overrides, environment variables — with automatic type coercion. Swap LLM providers (Ollama, OpenAI, vLLM), embedding models (HuggingFace local or OpenAI), or retrieval strategies without touching code.
- **Dual Interfaces**: An interactive CLI for quick terminal sessions and a Chainlit web UI for a richer chat experience, both backed by the same orchestrator.
- **Testing & CI**: Comprehensive test suite using mocked embeddings for fast test runs.

## Result

A tool that turns any textbook into a conversational study partner. The project deepened my practical understanding of embedding pipelines, vector similarity search, document chunking trade-offs, and the engineering required to make RAG systems reliable.

**Tech stack:** Python · LlamaIndex · ChromaDB · Docling · Ollama · Chainlit · HuggingFace Embeddings · pytest