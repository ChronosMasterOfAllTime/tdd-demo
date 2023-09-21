#!/usr/bin/env bash

set -e
# Run coverage tests
echo "running tests..."
COVERAGE=$(./gradlew test | grep Line | awk '{print substr($4, 1, length($4)-1)}')

THRESHOLD=60

MEETS_THRESHOLD=$(echo $COVERAGE $THRESHOLD | awk '{if ($1 > $2) {print "true"} else {print "false"} }')

if [ "$MEETS_THRESHOLD" = "true" ]; then
    echo "✅ Coverage ($COVERAGE%) meets threshold of $THRESHOLD%"
    exit 0
else
    echo "❌ Coverage ($COVERAGE%) does not meet threshold of $THRESHOLD%"
    exit 1
fi
