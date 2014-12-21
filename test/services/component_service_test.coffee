assert = require("assert")

describe ComponentService, ->
  it "manages a list of JSON files for all circuit components", ->
    assert.equal -1, 1

  it "exports circuit components from their configuration files", ->
    circuits_json = ComponentService.getCircuits('a_path_to_components_folder')

