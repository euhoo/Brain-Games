install:
	npm install

lint:
	npx eslint .

start:
	npx babel-node -- src/bin/brain-games.js

s:
	npx babel-node -- src/bin/brain-calc.js

publish:
	npm publish