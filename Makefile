all: clean package

clean:
	rm -rf build

server:
	make -C ../language-server

compile:
	npm run compile

package:
	npm run package

test: compile
	code --extensionDevelopmentPath=$(PWD)/build

install: all
	code --install-extension build/nextflow.vsix
