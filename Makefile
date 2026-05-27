all: clean server package

clean:
	rm -rf build

server:
	cd language-server ; make

package:
	npm run package

test:
	npm run compile
	code --extensionDevelopmentPath=$(PWD)/build

install: all
	code --install-extension build/nextflow.vsix
