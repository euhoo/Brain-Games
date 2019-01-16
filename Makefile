install:
	npm install

lint:
	npx eslint .

start:
	npx babel-node -- src/bin/brain-games.js

even:
	npx babel-node -- src/bin/brain-even.js

calc:
	npx babel-node -- src/bin/brain-calc.js

publish:
	npm publish