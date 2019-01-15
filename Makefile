install:
	npm install

lint:
	npx eslint .

start:
	npx babel-node -- src/bin/brain-games.js

publish:
	npm publish