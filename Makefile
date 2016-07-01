############
# Variables

# Node modules bin folder
## N.B. it holds the absolute path
BIN := $(shell pwd)/node_modules/.bin
export PATH := $(BIN):$(PATH)

PACKAGES_FOLDER ?= packages
SCRIPTS_FOLDER ?= scripts
PKG_JSON_FILES := $(shell \
	find . \
		-not \( -path './package.json' -prune \) \
		-not \( -path './.git' -prune \) \
		-not \( -path './node_modules' -prune \) \
		-not \( -path './packages/**/node_modules' -prune \) \
		-type f \
		-name 'package.json' \
)

# applications
LERNA ?= $(BIN)/lerna
YO ?= $(BIN)/yo suit
SHARED_DEPENDENCIES ?= $(SCRIPTS_FOLDER)/shared-dependencies.js



##########
# Targets

node_modules: package.json
	@npm prune
	@npm i --global-style

install: node_modules

bootstrap:
	@$(LERNA) exec -- npm i --global-style

# Cleanup

clean:
	@rm -rf node_modules
	@rm -rf packages/**/node_modules

# Testing

test-ci:
	@tar --exclude=temp.tar -cf temp.tar .
	@mkdir -p temp
	@tar -xf temp.tar -C temp/
	@cd temp && make shared && npm i && make bootstrap test-base
	@rm -rf temp*

shared: $(SHARED_DEPENDENCIES) $(PKG_JSON_FILES)
	@$(SHARED_DEPENDENCIES) $(PKG_JSON_FILES)

test-base:
	@$(LERNA) run test

test: node_modules bootstrap test-base

# Publishing

publish:
	@git pull --rebase
	@$(LERNA) publish --independent --only-explicit-updates

# Scaffolding

## Component
### Usage: make component name=componentName
component: node_modules
	@$(eval LOCAL_$@_PATH := $(PACKAGES_FOLDER)/components-$(name))
	@mkdir -p $(LOCAL_$@_PATH)
	@cd $(LOCAL_$@_PATH) && $(YO) $(name)

## Utilities
### Usage: make utils name=utilsName
utils: node_modules
	@$(eval LOCAL_$@_PATH := $(PACKAGES_FOLDER)/utils-$(name))
	@mkdir -p $(LOCAL_$@_PATH)
	@cd $(LOCAL_$@_PATH) && $(YO) $(name)


####################
# Available targets

.PHONY: install clean
.PHONY: publish
.PHONY: test test-ci
.PHONY: component utils
