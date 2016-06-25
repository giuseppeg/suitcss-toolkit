############
# Variables

# Node modules bin folder
## N.B. it holds the absolute path
BIN := $(shell pwd)/node_modules/.bin

PACKAGES_FOLDER ?= packages

# applications
YO ?= $(BIN)/yo suit


##########
# Targets

node_modules: package.json
	@npm prune
	@npm i

install: node_modules

# Scaffolding

## Component
### Usage: make component name=componentName
component: node_modules
	$(eval LOCAL_$@_PATH := $(PACKAGES_FOLDER)/components-$(name))
	@mkdir -p $(LOCAL_$@_PATH)
	@cd $(LOCAL_$@_PATH) && $(YO) $(name)

## Utilities
### Usage: make utils name=utilsName
utils: node_modules
	$(eval LOCAL_$@_PATH := $(PACKAGES_FOLDER)/utils-$(name))
	@mkdir -p $(LOCAL_$@_PATH)
	@cd $(LOCAL_$@_PATH) && $(YO) $(name)


####################
# Available targets

.PHONY: install
.PHONY: component utils
