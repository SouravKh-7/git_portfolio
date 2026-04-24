---
layout: post
title: "Exploring Industrial AI: Questions, Decisions, and What I’m Learning"
date: 2026-04-24
---

## Introduction

This is not just a collection of projects. It’s more of a record of how I think through problems.

Lately, I’ve been trying to understand how mechanical engineering, simulation, and machine learning can come together in a meaningful way. Not just to build models, but to build systems that actually make sense in practice. I’ve realized that what matters more than the tools is the set of questions behind them.

Instead of jumping directly into solutions, I’ve been trying to slow down and ask: why this approach, what assumptions am I making, and where could it fail?

---

## Where it started

One of the first problems that pulled me in was the idea of reducing simulation time. Running detailed simulations repeatedly is expensive, and it made me wonder if there was a way to learn from previous results instead of starting from scratch every time.

That’s how I began exploring a pipeline that connects CAD automation, simulation, and machine learning. The idea sounds simple—generate designs, simulate them, and train a model to approximate the results—but in practice, it opens up a lot of questions. How much data is enough? How reliable is the model compared to actual simulations? And more importantly, where should I trust it and where should I not?

Working on this has been less about building a perfect pipeline and more about understanding how these pieces interact.

---

## Trying to understand physical behavior

At the same time, I started looking into bearing systems, particularly how thermal behavior and lubrication change under different conditions. On the surface, it’s a physics problem—load, speed, temperature—but when you dig deeper, it becomes a lot more interconnected.

Simulation helps visualize what’s happening, but it also made me curious about whether patterns in this behavior can be learned. Can a model predict thermal response once it has seen enough examples? And if it can, how do I make sure it’s not just learning noise?

This is where I began to see that physics-based understanding and machine learning are not competing approaches. They actually need each other.

---

## Moving toward data-driven predictions

That naturally led me to a more data-focused problem: predicting the remaining useful life of bearings using vibration data.

The idea is straightforward—if we can detect patterns of degradation early, we can avoid unexpected failures. But the challenge lies in the data itself. Vibration signals are messy, and degradation doesn’t always follow a clean pattern.

So the work here became less about building a model and more about asking: what does degradation actually look like in data? Which features capture it? How early can I detect it without being wrong too often?

This part has been teaching me how to think about time-series data from an engineering perspective, not just a statistical one.

---

## Thinking about real systems

As I moved further, I started looking at problems closer to real industrial settings. One of them is predicting product quality using in-process data.

Instead of checking quality after production, can we predict it while the process is still running?

It sounds efficient, but it’s not easy. The data is often imbalanced, noisy, and influenced by many variables at once. What I’ve been trying to understand here is which factors actually matter and how reliable these predictions can be when applied in practice.

This is where things start to feel less like isolated projects and more like parts of a larger system.

---

## Expanding the scope

From there, my curiosity started branching into other areas—like production scheduling and energy monitoring.

Scheduling, for example, seems simple until you try to optimize it under real constraints. It becomes a question of trade-offs: efficiency vs flexibility, optimal vs practical.

Energy monitoring brings a different kind of question. Before optimizing anything, I had to ask what “normal” even means. Once that baseline is understood, only then does anomaly detection make sense.

Each of these problems adds a new layer, but they all seem to connect back to the same core idea.

---

## What ties it all together

Across all of this, I keep coming back to one question:

How do we combine engineering understanding with data-driven methods in a way that is both practical and reliable?

I’m particularly interested in systems where physical intuition, machine learning, and optimization are not used separately, but together. Not as isolated tools, but as parts of a single workflow.

---

## Final Thoughts

This is still very much a work in progress.

I don’t have complete answers, and I’m not trying to. What I’m trying to do is build a way of thinking—one that is comfortable with uncertainty, but still grounded in engineering reasoning.

This space is where I document that process. Not just the results, but the questions, the mistakes, and the gradual improvements along the way.