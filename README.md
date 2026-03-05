Title : Quick-Calc

Description : 
Quick-Calc is a basic calculator application built with React. This handles standard mathematical operations including the addition, the substraction, the multiplication, the division, and handles such as division by 0.

Setup : 
- To install all necessary depedencies, run 'npm install'.
- To start the local development server, run 'npm run dev'.

Test : 
To execute the entire test suite, run the following command in your terminal : 'npx vitest run'.

Framework research :
For this project, i evaluated two testing frameworks for the JavaScript and React ecosystem : Jest and Vitest.

Jest is the long-standing industry standard. The main advantage of Jest is that it provides an all-in-one solution with a massive community. However, it can be relatively slow and requires a complex configuration to work seamlessly with modern ES modules and build tools.

Vitest is a modern testing framework powered by Vite. Its primary advantage is the speed and out-of-the-box support for a recent version of JavaScript features without any extra configuration because it shares the same API as Jest so the learning curve is minimal.

I choose Vitest for this work because it's fast, the integration is perfect with my Vite-based React setup and provides a much smoother developer experience.