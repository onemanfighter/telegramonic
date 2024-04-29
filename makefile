.PHONY: coverage
coverage:
	echo "Running coverage tests"
	yarn test -- --coverage --watchAll=false
	open -a Firefox http://localhost:3000
	serve -s coverage/lcov-report