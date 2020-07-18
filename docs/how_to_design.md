# How to Write a Design Document
This guide will help you write your design doc, a core document that lays the foundation for a project.
If you're ready to begin writing your design doc, check out the [design document template](/docs/design/design_template.md). Be sure to also look at the [example design doc](/docs/design/examples/smart_shoe_design.md).

###### Disclaimer: The content of this guide heavily borrows from Google's "How to write a design doc" guide for interns.

## When should I write a design doc?
Whenever you're planning to work on a project that:
- Takes many days (10+) to complete
- Affects others significantly
- Causes people to wonder *Why did someone do it this way?*
You may gain many benefits by writing a design doc

## Why should I write a design doc?
There are many good reasons to write a design doc:
- Makes you think about the details before doing substantial work developing.
- Feedback from reviewers helps avoid mistakes
- Systems are written once, and rewritten for a long time. Documenting system design is extemely helpful for people maintaining and using it in the future.
- Reduces the questions asked by future users and maintainers. What's obvious today may not be obvious to others, ever.
- Developers will use the document to understant how and why a system was built.
- Managers will use the document to determine the importance of a project, and determine how many developers should work on it.
- Design docs are an easily digestible artifact of the work you've done to make an impact.
- Design docs provide high-level context for small changes.

## Start in the best way possible
Design docs are usually the first step in a big project
- Don't work too much on implementation before getting the design doc reviewed!
- If you've already started implementing, writing a design document later is better than never.
- If the project is extremely ambitious and will take very long to design, consider how it can be broken up into independent features, or start with a design proposal to get basic ideas out there.
- You might want to start writing the document on Google Docs, then eventually migrate it to GitHub as an .md file.
- If a section in the template is not applicable, state so instead of deleting it.

## Writing a **good** design doc
- Don't skimp on the Objective. It should be a concise description of the problem you're trying to solve, not a summary of the proposed design/solution.
- Consider the audience. Everyone is busy, so be concise with the details you share. Consider what level of background information is appropriate.
- Focus on the **why** and **how** your system will be implemented, rather than the specifics of the implementation. Specifically, avoid including too much code and instead focus on diagrams and mocks.
- Consider all the people that will use your system, and how you want their experience to play out from beginning to end, like a story.
- While diagrams communicate better than a block of text, supplement them with explanatory text.
- Don't repeat yourself. Link to other design docs when relevant and simply provide a small summary.
- Avoid using pronouns like "we" or "it" in favor of distant nouns like "the calendar team" or "the app".
- Leverage github features for linking to [issues, pull requests, and users](https://docs.github.com/en/github/writing-on-github/autolinked-references-and-urls).

## Review Early
- Send out the design document for review when it is about 90% ready.
- Mark anything inclomplete with a TODO.
- Read it over form start to finish to make sure it makes sense.
- Avoid references to the future, but if necessary link to the section where such details will be covered.
- If you want input or help in a particular section, add a comment explaing what you would like and from who.
- Start the initial review with a small pool of people, particularly subject experts or someone willing to review the grammar and clarity.

## Dealing with Review Comments
- Review comments should be **constructive**, intended to improve design or how something is communicated. Comments should be specific and actionable rather than vague and wanting.
- *comment, change, reply, resolve*. This is a familiar cycle in the design and code review process. Be sure to reply **and** update the design document in response to comments.

## After approval
Keep the design doc up-to-date! It's frustrating, confusing, and/or even dangerous to read an outdated design doc.
- Keep track somwhere when the document was lat deemed up-to-date
- Change the design doc as soon as possible if something changes during implementation.
- If a big change comes through, it might be better to keep but retire the old document and write a new one that links to the old one.
- Don't be afraid to ask for updates to the design doc in the same [PR](/docs/glossary/pull_request.md) as code changes.

Congrats! You've made it to the end of how to write a design document. Be sure to check out the [example](/docs/design/examples/smart_shoe_design.md) and [template](/docs/design/design_template.md). Good luck designing, the future of CLO is in your hands!
