TestAutomation_TestCafe 🚀
This repository contains a comprehensive suite of automated end-to-end tests developed as part of my Software QA coursework. It leverages TestCafe to perform robust web automation, focusing on cross-browser compatibility and advanced testing patterns.

🛠 Features
Cross-Browser Testing: Configured specifically to utilize Firefox to bypass common browser permission issues.

Design Patterns: Implements the Page Object Model (POM) for better maintainability and cleaner test scripts.

Data-Driven Testing: Utilizes JSON datasets to run the same test scenarios with multiple inputs (e.g., login credentials).

Automated Reporting: Integrated screenshot capture on failure and headless execution support.

Targeted Testing: Includes test suites for HRM (Human Resource Management) systems and various web application workflows.

📂 Project Structure
tests/: Contains the actual test scripts and fixtures.

page-models/: Encapsulates page elements and actions (POM).

data/: JSON files used for data-driven testing.

.testcaferc.js: Global configuration for the TestCafe runner.

🚀 Getting Started
Prerequisites
Ensure you have Node.js installed on your machine.

Installation
Clone the repository:

Bash
git clone https://github.com/WijAnushka02/TestAutomation_TestCafe.git
Install dependencies:

Bash
npm install
Running Tests
To run the tests using the Firefox configuration:

Bash
# Run all tests
npx testcafe firefox tests/

# Run in headless mode (defined in .testcaferc.js)
npx testcafe firefox tests/ --headless
⚙️ Configuration details
The project uses a .testcaferc.js file to manage:

Browser choice (Defaulting to Firefox)

Screenshot paths

Concurrency levels

Video/Report generation