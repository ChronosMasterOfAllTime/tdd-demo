# TDD Demo Repository

This repository contains Test-Driven Development examples in multiple programming languages (Vue.js, Node.js, Python, Golang, Java, .NET). Each component demonstrates TDD practices with unit tests and code coverage.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Setup - All Components
```bash
# Install Node.js dependencies first for Vue and Node projects
cd vue && CYPRESS_INSTALL_BINARY=0 npm install  # Takes ~16s, skips Cypress due to network restrictions
cd ../node && npm install                       # Takes ~20s
```

### Vue.js Application (Port 3000)
- **Location**: `./vue/`
- **Technology**: Vue 3 + TypeScript + Vite + Tailwind CSS
- **Bootstrap and build**:
  ```bash
  cd vue
  CYPRESS_INSTALL_BINARY=0 npm install  # NEVER CANCEL: Takes ~16s. Set timeout to 60s.
  npm run lint                           # Takes ~1s
  npm run build                          # NEVER CANCEL: Takes ~30s. Set timeout to 120s.
  npm run test                           # Takes ~3s (Vitest unit tests)
  ```
- **Run the application**:
  ```bash
  npm run dev  # Starts dev server at http://localhost:3000
  ```
- **NOTE**: E2E tests with Cypress will fail due to network restrictions preventing Cypress download.

### Node.js Application (Port 3000) 
- **Location**: `./node/`
- **Technology**: TypeScript + Express-like HTTP server
- **Function**: Calculator web application that adds comma-separated numbers
- **Bootstrap and build**:
  ```bash
  cd node
  npm install     # Takes ~20s
  npm run lint    # Takes ~1s
  npm run build   # Takes ~2s (TypeScript compilation)
  npm test        # Takes ~3s (Jest tests)
  ```
- **Run the application**:
  ```bash
  npm start  # Builds and starts server at http://localhost:3000
  ```

### Python Application
- **Location**: `./python/`
- **Technology**: Python 3 with unittest
- **Function**: Person class with basic string validation methods
- **Bootstrap and test**:
  ```bash
  # pip install -r python/requirements.txt  # FAILS due to network timeout - documented limitation
  python3 -m python.person_test             # Takes <1s - run from repo root, not python/ directory
  ```
- **NOTE**: Dependencies cannot be installed due to network restrictions. Tests run directly using built-in unittest from repository root.

### Golang Application
- **Location**: `./golang/`
- **Technology**: Go with built-in testing
- **Function**: Simple boolean function with coverage tracking
- **Bootstrap and build**:
  ```bash
  cd golang
  make build  # NEVER CANCEL: Takes ~11s. Set timeout to 60s.
  make test   # Takes ~5s, includes coverage report (>60% threshold)
  ```
- **Run the application**:
  ```bash
  ./bin/main  # Outputs: true
  ```

### Java Application
- **Location**: `./java/`
- **Technology**: Gradle + Spock (Groovy) tests
- **Function**: Hello World application
- **Bootstrap and build**:
  ```bash
  cd java
  ./gradlew build -x test  # NEVER CANCEL: Takes ~25s first run (downloads Gradle). Set timeout to 120s.
  ./gradlew run           # Takes ~1s, outputs: "Hello World!"
  ```
- **Testing**:
  ```bash
  ./coverage.sh  # Attempts to run tests but has Groovy dependency conflicts - documented limitation
  ```
- **NOTE**: Test execution fails due to Groovy version conflicts between 3.0.19 and 4.0.4.

### .NET Application  
- **Location**: `./dotnet/`
- **Technology**: .NET 7.0 (Console App + MSTest)
- **Function**: String utility library with extension methods
- **Bootstrap and build**:
  ```bash
  cd dotnet
  dotnet build  # NEVER CANCEL: Takes ~13s. Set timeout to 60s.
  ```
- **Testing**:
  ```bash
  dotnet test  # FAILS - .NET 7.0 runtime not available (only .NET 8.0 installed)
  ```
- **NOTE**: Runtime version mismatch prevents execution. Build succeeds but requires .NET 7.0 runtime.

## Validation Scenarios

**ALWAYS manually test changes after making modifications:**

### Node.js Calculator Validation
```bash
cd node && npm start &
# Test GET request
curl -s http://localhost:3000  # Should return HTML form
# Test calculator functionality  
curl -s -X POST -d "numbers=1,2,3,4,5" http://localhost:3000  # Should return form with Result: 15
pkill -f "node lib/app.js"
```

### Vue.js UI Validation
```bash
cd vue && npm run dev &
curl -s http://localhost:3000 | head -5  # Should return HTML with Vite dev server
pkill -f "vite"
```

### Golang Binary Validation
```bash
cd golang && make build && ./bin/main  # Should output: true
```

## Build Timing and Timeout Guidelines

**CRITICAL - NEVER CANCEL builds or tests. Always use these minimum timeouts:**

| Component | Command | Time | Recommended Timeout |
|-----------|---------|------|-------------------|
| Vue.js | `npm install` | ~16s | 120s |
| Vue.js | `npm run build` | ~30s | 120s |
| Node.js | `npm install` | ~20s | 120s |
| Node.js | `npm run build` | ~2s | 60s |
| Golang | `make build` | ~11s | 120s |
| Golang | `make test` | ~5s | 60s |
| Java | `./gradlew build` | ~25s | 180s |
| .NET | `dotnet build` | ~13s | 120s |

## CI/CD Validation

Before committing changes, ALWAYS run:
```bash
# For Vue.js changes
cd vue && npm run lint && npm run build && npm run test

# For Node.js changes  
cd node && npm run lint && npm run build && npm test

# For Python changes
python3 -m python.person_test

# For Golang changes
cd golang && make build && make test

# For Java changes
cd java && ./gradlew build -x test

# For .NET changes
cd dotnet && dotnet build
```

## Common Issues and Workarounds

### Known Limitations (DO NOT attempt to fix these)
1. **Cypress installation fails** - Use `CYPRESS_INSTALL_BINARY=0` flag
2. **Python pip install times out** - Run tests directly with `python3 -m python.person_test` from repo root
3. **Java tests fail** - Groovy dependency conflicts, but build and run work
4. **.NET runtime mismatch** - Targets .NET 7.0 but .NET 8.0 is installed

### Network Connectivity Issues
- Several package downloads may fail due to firewall/proxy restrictions
- Use workarounds documented above rather than attempting to fix network issues

## Quick Reference Commands

**Most common validation sequence:**
```bash
# Node.js (most frequently used)
cd node && npm install && npm run build && npm test

# Golang (fastest build/test cycle)
cd golang && make build && make test

# Vue.js (frontend validation)
cd vue && CYPRESS_INSTALL_BINARY=0 npm install && npm run build && npm run test
```

**Manual functionality tests:**
```bash
# Test Node.js calculator
cd node && npm start &
curl -s -X POST -d "numbers=1,2,3" http://localhost:3000 | grep "Result: 6"
pkill -f "node lib/app.js"

# Test Golang binary
cd golang && make build && ./bin/main  # Should output: true
```

## Key Projects Overview

1. **Vue.js (`./vue/`)** - Frontend demo with interactive counter and styling
2. **Node.js (`./node/`)** - Backend calculator web service
3. **Python (`./python/`)** - Basic string validation utilities  
4. **Golang (`./golang/`)** - Simple boolean function with coverage
5. **Java (`./java/`)** - Hello World with Gradle build system
6. **.NET (`./dotnet/`)** - String extension methods library

## Repository Structure
```
.
├── .github/workflows/demo.yml  # CI/CD pipeline for all components
├── vue/                        # Vue.js frontend application
├── node/                       # Node.js backend calculator
├── python/                     # Python utility classes
├── golang/                     # Go application with Makefile
├── java/                       # Java application with Gradle
└── dotnet/                     # .NET console application
```