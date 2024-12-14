all: clean server package

clean:
	rm -rf build

server:
	cd language-server ; ./gradlew build

package:
	npm run package

install: all
	code --install-extension build/nextflow.vsix
