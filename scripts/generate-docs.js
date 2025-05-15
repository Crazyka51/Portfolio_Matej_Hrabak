const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

// Ensure assets directory exists
const assetsDir = path.join(__dirname, "..", "assets")
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true })
}

// Copy custom CSS if it doesn't exist
const customCssSource = path.join(__dirname, "..", "assets", "custom.css")
if (!fs.existsSync(customCssSource)) {
  console.log("Creating custom CSS file...")
  const cssContent = fs.readFileSync(path.join(__dirname, "..", "assets", "custom.css"), "utf8")
  fs.writeFileSync(customCssSource, cssContent)
}

console.log("Generating documentation...")
try {
  execSync("npx jsdoc -c jsdoc.json", { stdio: "inherit" })
  console.log("Documentation generated successfully!")
  console.log("To view the documentation, run: npm run docs:dev")
} catch (error) {
  console.error("Error generating documentation:", error)
  process.exit(1)
}
