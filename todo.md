# Project Refactor/Rewrite Todo List

## Project Goal

Refactor and rewrite the existing Coqui.Monster project to improve code quality, maintainability, and performance.
CRA is outdated, switch to Next.js. Use Builder.io for content management.

## Objectives

- **Code Quality**: Improve the code quality by adhering to best practices, using modern React features, and ensuring the code is clean and easy to understand.
- **Maintainability**: Make the codebase easier to maintain by modularizing the code, using clear naming conventions, and adding comprehensive documentation.
- **Performance**: Enhance the performance of the website by optimizing the React components, reducing the bundle size, and ensuring efficient API calls to Builder.io.
- **Integration**: Ensure seamless integration with Builder.io, making sure the data flow is efficient and the website reflects the changes made in Builder.io in real-time.
- **Testing**: Implement a robust testing strategy to catch and fix bugs early in the development process.

## Tasks

### Root Files

- [ ] .gitignore
- [x] LICENSE.md
- [x] package.json
- [ ] README.md

### Public Folder

- [ ] public\images\shareImage.jpg
- [ ] public\index.html
- [ ] public\manifest.json
- [ ] public\robots.txt

### Source Folder

- [ ] src\App.js
- [ ] src\builder.io.jsx
- [ ] src\index.css
- [ ] src\index.js

#### Components Folder

- [ ] src\components\layout\devHandle.jsx
- [ ] src\components\layout\footer.jsx
- [ ] src\components\layout\header.jsx

## Notes

- [ ] Update thumbnail image
- [ ] Update site description based on Coqui's opinion
- [ ] Update site themeColor based on Coqui's opinion [Either purple or her 3am yellow]
- [ ] Attempt to link themeColor to Builder.io as a configurable option [If this works, also add a bunch of other configurable options]
- [ ] Attempt to pull builder imports out to the layout component (Or put it in a provider component?)
- [ ] Reduce Builder.io bandwidth usage by using a secondary cdn for images
