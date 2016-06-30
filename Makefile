############
# Variables

# Node modules bin folder
## N.B. it holds the absolute path
BIN := $(shell pwd)/node_modules/.bin

PACKAGES_FOLDER ?= packages

# applications
LERNA ?= $(BIN)/lerna
YO ?= $(BIN)/yo suit


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

test-base:
	@$(LERNA) run test

test: node_modules bootstrap test-base
test-ci: bootstrap test-base

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

.PHONY: install bootstrap clean
.PHONY: publish
.PHONY: test test-ci
.PHONY: component utils
