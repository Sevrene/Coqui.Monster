// TODO: Convert this logic to work for Sanity
const BuilderComponents = {};
const componentFiles = require.context('.', true, /\.jsx?$/);

componentFiles.keys().forEach((fileName) => {
  if (fileName === './index.js') return; // ignore the current file
  // Derived component name from the file name by removing the file extension and directory path
  const componentName = fileName.replace(/^.+\/([^/]+)\.jsx?$/, '$1');
  BuilderComponents[componentName] = componentFiles(fileName).default;
});

export default BuilderComponents;