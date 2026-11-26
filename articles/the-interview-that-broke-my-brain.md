---
title: "The Interview That Broke My Brain"
date: "2026-08-26"
description: "Hiring a senior React Native team showed me two kinds of engineers: those who handed their fundamentals to AI, and those who won't touch it. How I think about keeping the best of both."
tags: ["ai", "react-native", "hiring", "career"]
---

Two years ago I pressed `Tab` in Cursor for the first time and felt like I'd been handed a cheat code I didn't deserve. I was mid-thought, about to write a `console.log` to check some state, and the editor had already put it there in ghost text. I tapped one key and it was done before I'd finished forming the thought. I laughed out loud, alone in my apartment, like a maniac.

I've used Cursor every day since. I've watched the agentic features roll in, the little bots that refactor a whole file while you grab coffee, and I've liked all of it. But I've always been stubborn about the tap. I like typing my own `useEffect` dependencies and wiring up utility functions by hand. The friction keeps me honest.

## Building a team from zero

Last year I joined a new company. The project was brownfield, though not the legacy-nightmare kind: the React Native part didn't exist yet, so I had to build it from scratch and integrate it into the existing Android and iOS apps. Great chance to grow as a developer. (That beast gets its own article.)

I was also the first React Native developer there, which meant building a team of senior React Native engineers from zero.

When I sat down to design the interview process, I promised myself I'd throw out everything I hated about the interviews I'd sat through and build something that shows how a person actually thinks.

## The exercise

I ended up with one exercise: a small Expo Snack that worked, but was deliberately awful.

The scenario was simple. Fetch a list of products from a mocked server. The catch was that you had to combine two separate lists, handle the race conditions, manage loading and error states, and update everything without mutations. It's the kind of code that looks boring to a junior and beautiful to a senior.

The candidate didn't have to write it, though. I told them: *"We're on the same team, same project. I just wrote this and I need your review before we can merge it to master. Treat it like your own personal project, you know, the kind of code you'd commit at 3 AM because you're actually proud of it. Show me what's wrong, show me what's right, and help me get it there."*

## Two kinds of engineers

The candidates split into two clean groups, and that broke my brain a little.

### The ones who handed it to AI

Some of them, experienced people with impressive résumés, stared at the Snack like it was written in a language they'd never seen. They could describe a hook in theory, but writing a clean custom hook from scratch made them hesitate. A simple `Promise.all` with error handling got blank faces. One of them reached for an AI assistant in the middle of the exercise. I watched them paste my broken code into a chat window and wait for the machine to tell them what they should already have known.

Then there was the guy who refused to write anything at all. He looked at the code, then at me, like I was crazy. *"What? I should write code? No thanks."* Fine, I said, you can just explain it. I pointed at an obvious state mutation and asked why the code behaved the way it did. He talked for a couple of minutes without saying anything that showed he understood it.

### The ones who won't touch it

The other group tore the code apart and enjoyed every minute. They spotted the race condition before I finished my sentence. They rewrote the state updates like people who'd suffered through the bad patterns themselves, and they clearly knew the platform. But when I asked *"How do you use AI in your daily work?"* they shrugged. "I don't really trust it," one said. "I tried Copilot once. It got in my way."

## Living in the middle

After the last interview I sat staring at my notes, a bit rattled.

For two years I'd lived in the middle. I loved the tap, but I never let the machine think for me, and I assumed that made me... normal? Balanced? My interviews showed a split instead: engineers who had outsourced their fundamentals to autocomplete, and engineers who had walled themselves off from the most useful tool our industry has had in years.

I didn't want to choose between "can write a clean hook from memory" and "knows how to get real work out of AI." I wanted both. I wanted people who could survive a flight with no Wi-Fi and a broken build (we all know the best code gets written on planes, in airports, or anywhere your own brain is the only tool you have) and who could also get an agent to generate native module boilerplate in thirty seconds.

So I stopped asking whether AI is good or bad, and started asking how we keep the best of both.

## What I've learned so far

This is where I've landed after a year of building that team and shipping code this way.

Prompting is a skill, but it isn't the skill. We all know that guy from a totally different field who decided to build his own website. He was thrilled with what he, *ahem*, built, and then he sent you the link: `https://localhost:3000`. You knew right away that the AI wrote it and he watched. Without a technical foundation, prompting is wishful thinking in a chat box. You can't direct work you don't understand.

The opposite is just as dangerous. An engineer who refuses to touch AI is leaving a lot on the table. You ship faster, and you also ship better, because you have room to think about architecture instead of boilerplate. And you learn things. Cursor has suggested patterns I'd never seen, and when I asked *why* instead of blindly accepting, that back-and-forth taught me more than a dozen Medium articles.

### Two ways to work with AI

I've started thinking about it in two modes.

**Mode one: AI as a junior.** You're in charge and you know exactly what you want. You break the problem down, review every line, and catch the hallucinations before they reach `git commit`. This is how I work deep in native module territory, where one wrong import can cost me an afternoon in Xcode.

**Mode two: AI as a partner.** You ask it questions, it asks you questions, you argue about state management. You settle on a solution together, and it starts typing while you think about the next problem. This is how I work when I'm prototyping, exploring, or just tired of writing my hundredth `useState` hook.

In both modes you need to know what you want it to build. Don't rely on AI for everything, the same way you shouldn't insist on typing every character by hand anymore. The tools have changed, and we adapt.

## Where the middle is

I don't have it all figured out. I still type my own `console.log`s. I also let the agent write the `Podfile` integration while I grab coffee, and I'm starting to think that's about where the middle should be.
