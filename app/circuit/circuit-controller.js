angular.module("circuit", [
  'ui.router'
])
    .config(function ($stateProvider) {
      $stateProvider
          .state('lrc', {
            url: "/",
            templateUrl: "app/circuit/select-circuit.tmpl.html",
            controller: "CircuitCtrl"
          })
    })
    .controller("CircuitCtrl", function () {
      var circuit = this;
      circuit.activeCircuitName = null;

      circuit.presets = [
        {
          name: "lrc",
          description: "lrc circuit",
          components: [
            {
              "id": "resistor_1",
              "x1": 100,
              "y1": 100,
              "x2": 100,
              "y2": 200,
              "parameters": [
                {
                  "name": "Resistance",
                  "value": 100
                }
              ],
              prototype: {
                "type": "Resistor",
                "category": "Analog",
                "linear": true,
                "nodeCount": 2,
                "description": "Classical resistor",
                "parameters": [
                  {
                    "name": "Resistance",
                    "unit": "Ohms",
                    "symbol": "Ω",
                    "default": 100
                  }
                ]
              }
            }
          ]
        }
      ];

      circuit.editingComponent = null;

      this.loadPresetCircuit = function(presetName) {
        circuit.activeCircuitName = presetName;
      };

      this.setEditingComponent = function (component) {
        circuit.editingComponent = component;
      };

      this.isEditing = function () {
        return circuit.editingComponent != null;
      };

      circuit.sayHi = function () {
        return "Hello!";
      }
    });
