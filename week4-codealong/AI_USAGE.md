# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s): Gemini AI collaborator
- What I asked for: asked for commands regarding terminal
- What I kept, changed or rejected, and why: changed all the components file
- One thing the AI got wrong and how I fixed it: none


## Week 2
- Tool(s): Gemini AI collaborator
- What I asked for: Guidance on structuring vendor data, passing props, rendering lists with .map(), managing cart state, and adding the spice-level feature.
- What I kept, changed or rejected, and why: Kept the component structure and state logic; customized the vendor dishes, prices, and spice levels.
- One thing the AI got wrong and how I fixed it: The AI accidentally included markdown text inside a code file, which I fixed by clearing it and leaving only valid React code.


## Week 3
-  Tool(s): Gemini AI collaborator
- What I asked for: help to create a counter component using useState so that user can add and remove things from food cart
- What I kept, changed or rejected, and why: i kept the useState hook structure and event handler functions. but at the same time i changed the default styling classes. AI suggest a complex global state reducer that was too hard to understand and i dont think that was necessary
- One thing the AI got wrong and how I fixed it: AI used count=count+1 instead of setCount(count+1)


## Week 4
-  Tool(s): Gemini AI collaborator
- What I asked for: i asked for help on the add on feature for spice level badge and filter, spice setting with useLocalStorage to apply on every vendor page
- What I kept, changed or rejected, and why:  i kept the core implementation of the useLocalStorage hook and spice level filter logic on VendorPAge.jsx. i changed the file extention src/context/cart-context.js to .jsx to match Vite and React router module expectations. i rejected plain javascript extensions for files containing jsx markup because vite treats .js files as plain javascript and throws parse errors when encountering jsx syntax
- One thing the AI got wrong and how I fixed it: AI provided cart-context.jsx with full provider logic and jsx tags, and also suggests code structure that caused import/export mismatch so i fixed it by stripping cart-context.jsx down to a clean context creation (createContext(null)).