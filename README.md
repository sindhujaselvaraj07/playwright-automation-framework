# Planit Technical Assessment – Playwright Automation Framework

## Overview

This project contains an automated UI testing framework developed using **Playwright** with **TypeScript** following the **Page Object Model (POM)** design pattern.

The framework automates the test scenarios provided in the Planit Technical Assessment for the Jupiter Toys application.

**Application URL:**

http://jupiter.cloud.planittesting.com

---

# Technology Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)
* GitHub Actions (CI Pipeline)

---

# Project Structure

```
playwright-test/
│
├── pages/
│   ├── HomePage.ts
│   ├── ContactPage.ts
│   ├── ShopPage.ts
│   └── CartPage.ts
│
├── tests/
│   ├── home.spec.ts
│   ├── contact-validation.spec.ts
│   ├── contact-submit.spec.ts
│   └── shop-cart.spec.ts
│
├── fixtures/
│   └── testData.ts
│
├── utils/
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── .github/workflows/playwright.yml
└── README.md
```

---

# Test Scenarios

## Test Case 1

* Navigate to Contact page
* Submit without entering mandatory fields
* Verify validation error messages
* Populate mandatory fields
* Verify validation errors disappear

---

## Test Case 2

* Navigate to Contact page
* Populate mandatory fields
* Submit the form
* Verify successful submission message
* Execute successfully over multiple runs

---

## Test Case 3

* Purchase:

  * 2 Stuffed Frog
  * 5 Fluffy Bunny
  * 3 Valentine Bear
* Navigate to Cart
* Verify individual product prices
* Verify subtotals
* Verify overall total

---

# Design Pattern

This framework follows the **Page Object Model (POM)** design pattern.

Each application page is implemented as an independent class containing:

* Locators
* Reusable methods
* Page-specific functionality

This improves:

* Maintainability
* Readability
* Reusability
* Scalability

---

# Prerequisites

* Node.js
* npm

---

# Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Execute All Tests

```bash
npx playwright test
```

---

# Execute Individual Tests

### Test Case 1

```bash
npx playwright test tests/contact-validation.spec.ts
```

### Test Case 2

```bash
npx playwright test tests/contact-submit.spec.ts
```

To repeat the test five times:

```bash
npx playwright test tests/contact-submit.spec.ts --repeat-each=5
```

### Test Case 3

```bash
npx playwright test tests/shop-cart.spec.ts
```

---

# Execute in Headed Mode

```bash
npx playwright test --headed
```

---

# View HTML Report

After execution:

```bash
npx playwright show-report
```

---

# Continuous Integration

The project is CI-ready and includes a GitHub Actions workflow located at:

```
.github/workflows/playwright.yml
```

The workflow performs:

* Dependency installation
* Playwright browser installation
* Test execution
* HTML report generation

---

# Author

Sindhuja Selvaraj
