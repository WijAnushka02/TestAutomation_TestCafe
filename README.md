
---

# 🚀 TestAutomation_TestCafe

A structured **end-to-end test automation project** built using **TestCafe**, developed as part of Software QA coursework. This project demonstrates practical testing approaches including automation design patterns, data-driven testing, and CI/CD integration.

---

## 🧩 Overview

This project focuses on:

* Reliable web test automation
* Maintainable architecture using industry practices
* Continuous Integration and automated execution
* Testing real-world workflows (HRM systems and web apps)

---

## ✨ Key Features

### 🔹 Cross-Browser Testing

* Configured primarily for **Firefox**
* Can be extended to other browsers

### 🔹 Page Object Model (POM)

* Separates UI logic from test logic
* Improves scalability and maintainability

### 🔹 Data-Driven Testing

* Uses JSON datasets (`data/data.json`)
* Executes test scenarios with multiple inputs

### 🔹 Automated Reporting

* Screenshot capture on failures
* Organized result storage
* Headless execution support

### 🔹 CI/CD Integration

* Integrated with **Azure Pipelines**
* Automated test execution on code changes
* Supports continuous testing workflows

---

## 📁 Project Structure

```bash
TestAutomation_TestCafe/
│
├── data/
│   └── data.json                # Test data (data-driven testing)
│
├── tests/
│   ├── exampleDOT.js
│   ├── exampleXpath.js
│   ├── helloTestcafe.js
│   ├── loginTest.js
│   ├── test.js
│   └── xpath-selector.js       # Test scripts
│
├── screenshots/                # Captured screenshots on failures
├── results/                    # Test execution results
│   └── screenshots/            # Organized failure screenshots
│
├── thumbnails/                 # Screenshot previews
│
├── .testcaferc.js              # TestCafe configuration
├── azure-pipelines.yml         # CI/CD pipeline configuration
├── package.json                # Dependencies and scripts
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### 📌 Prerequisites

* Node.js (LTS version recommended)

---

### 📥 Installation

```bash
git clone https://github.com/WijAnushka02/TestAutomation_TestCafe.git
cd TestAutomation_TestCafe
npm install
```

---

## ▶️ Running Tests

### Run all tests

```bash
npx testcafe firefox tests/
```

### Run in headless mode

```bash
npx testcafe firefox tests/ --headless
```

---

## 🔧 Configuration

The `.testcaferc.js` file manages:

* Default browser (Firefox)
* Screenshot handling
* Concurrency settings
* Headless mode
* Reporting options

---

## 🔄 CI/CD Pipeline

The project includes **Azure DevOps Pipeline configuration**:

* Defined in `azure-pipelines.yml`
* Automatically installs dependencies
* Runs test cases on pipeline triggers
* Helps ensure code quality through continuous testing

---

## 📌 Highlights

* Uses **industry-standard QA practices**
* Clean and modular structure
* Supports scalable automation
* Integrated with CI/CD for real-world workflows

---

## 📄 License

This project is intended for educational and learning purposes.

---

