const log = (message, data = null) => {
  const stack = new Error().stack;
  const lineNumber = stack.split("\n")[2].split(":")[1];
  console.log(`[Line ${lineNumber}] ${message}`, data || "");
};
module.exports = log;
