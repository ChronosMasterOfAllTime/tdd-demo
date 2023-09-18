RELEASE_DIR = bin

.ONESHELL:
SHELL = /bin/bash
.SHELLFLAGS = -ec

.EXPORT_ALL_VARIABLES:
GOOS ?= linux
VERBOSE ?= false
THRESHOLD = 60
MAKEFLAGS += --no-print-directory -s


.PHONY: build test

build:
	echo "Building for $(GOOS)"; \
	GOOS=$(GOOS) GOARCH=amd64 CGO_ENABLED=0 go build $$MODFLAGS -ldflags "-s -w" -o $(RELEASE_DIR)/main main.go; \
	echo "Done building for $(GOOS)"; \

test:
	if [ $(VERBOSE) == "true" ]; then \
		TEST_FLAGS="-v"; \
	fi; \
	go test $$TEST_FLAGS ./... -coverprofile=cp.out; \
	COVERAGE=$$(go tool cover -func cp.out | grep total | awk '{print substr($$3, 1, length($$3)-1)}'); \
	MEETS_THRESHOLD=$$(echo $$COVERAGE | awk '{if ($$1 > $(THRESHOLD)) {print "true"} else {print "false"} }'); \
	if [ $$MEETS_THRESHOLD == "true" ]; then \
		echo "✅ Coverage is $$COVERAGE% which is greater than $(THRESHOLD)%"; \
		exit 0; \
	else \
		echo "❌ Coverage is $$COVERAGE% which is less than $(THRESHOLD)%"; \
		exit 1; \
	fi; \
