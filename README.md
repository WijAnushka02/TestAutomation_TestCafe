
---

# 🚀 TestAutomation_TestCafe

A comprehensive **end-to-end test automation project** developed using **TestCafe** as part of Software QA coursework. This project focuses on building reliable, maintainable, and scalable web test automation solutions with modern testing practices.

---

## 🧩 Overview

This repository demonstrates practical implementation of:

* Cross-browser web automation
* Maintainable test architecture
* Data-driven testing strategies
* Automated reporting and debugging support

The project mainly targets **HRM systems** and common web application workflows.

---

## ✨ Key Features

### 🔹 Cross-Browser Testing

* Optimized for **Firefox** to handle browser permission limitations effectively
* Supports execution across multiple browsers if needed

### 🔹 Page Object Model (POM)

* Clean separation of UI elements and test logic
* Improves readability and maintainability

### 🔹 Data-Driven Testing

* Uses **JSON datasets**
* Enables running the same test scenarios with multiple inputs (e.g., login credentials)

### 🔹 Automated Reporting

* Screenshot capture on test failures
* Headless execution support
* Configurable reporting options

### 🔹 Targeted Test Coverage

* HRM system workflows
* Common web application functionalities

---

## 📁 Project Structure

```
TestAutomation_TestCafe/
│
├── tests/              # Test scripts and fixtures
├── page-models/        # Page Object Model implementations
├── data/               # JSON datasets for testing
├── .testcaferc.js      # Global TestCafe configuration
└── package.json        # Project dependencies and scripts
```

---

## ⚙️ Getting Started

### 📌 Prerequisites

* Install **Node.js** (LTS version recommended)

---

### 📥 Installation

Clone the repository:

```bash
git clone https://github.com/WijAnushka02/TestAutomation_TestCafe.git
```

Navigate to the project directory:

```bash
cd TestAutomation_TestCafe
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running Tests

### Run all tests (Firefox)

```bash
npx testcafe firefox tests/
```

### Run tests in headless mode

```bash
npx testcafe firefox tests/ --headless
```

---

## 🔧 Configuration

The project uses `.testcaferc.js` for centralized configuration:

* Default browser setup (Firefox)
* Screenshot storage paths
* Concurrency settings
* Headless execution
* Optional video and report generation

---

## 📌 Highlights

* Structured using **industry-standard design patterns**
* Easy to extend for new test scenarios
* Suitable for learning **real-world QA automation practices**

---

## 🤝 Contribution

This project is primarily for academic and learning purposes.
However, improvements and suggestions are welcome.

---

## 📄 License

This project is open-source and available for educational use.

---
