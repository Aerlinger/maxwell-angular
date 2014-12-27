angular.module("circuit", [
  'ui.router'
])
    .config(function ($stateProvider) {
      $stateProvider
          .state('lrc', {
            url: "/",
            views: {
              "circuit@": {
                templateUrl: "app/circuit/ui.tmpl.html",
                controller: "CircuitCtrl as circuit"
              }
            }
          })
    })
    .controller("CircuitCtrl", function () {
      var circuit = this;
      circuit.activeCircuitName = null;

      circuit.prototypes = [
        {
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
              "default_value": 100
            }
          ]
        },
        {
          "type": "Capacitor",
          "category": "Analog",
          "linear": true,
          "nodeCount": 2,
          "description": "Classical capacitor",
          "parameters": [
            {
              "name": "Capacitance",
              "unit": "Farads",
              "symbol": "F",
              "default": 1e-5
            }
          ]
        },
        {
          "type": "Inductor",
          "category": "Analog",
          "linear": true,
          "nodeCount": 2,
          "description": "Classical inductor",
          "parameters": [
            {
              "name": "Inductance",
              "unit": "Henries",
              "symbol": "H",
              "default": 1e-5
            },
            {
              name: "Internal resistance",
              "unit": "Ohms",
              "symbol": "Ω",
              default: 0
            }
          ]
        }
      ];

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
                    "default_value": 100
                  }
                ]
              }
            }
          ]
        }
      ];

      circuit.createdComponents = [];
      circuit.placingComponent = null;
      circuit.editingComponent = null;

      // TODO: Rename startPlacingComponent
      circuit.setPlacingComponent = function (component) {
        circuit.placingComponent = component;
        circuit.placingComponent.x = 0;
        circuit.placingComponent.y = 0;
        circuit.placeComponent(component, 0, 0);
      };

      // TODO: Rename cancelPlacingComponent
      circuit.unsetPlacingComponent = function () {
        circuit.placingComponent = null;
      };

      circuit.placeComponent = function (component, xPos, yPos) {
        added_component = angular.copy(component);
        circuit.createdComponents.push(added_component);
      };

      circuit.moveComponent = function ($event) {
        if (circuit.isPlacingComponent()) {
          circuit.placingComponent.x = $event.offsetX;
          circuit.placingComponent.y = $event.offsetY;
        }
      };

      circuit.placingStyle = function () {
        if (circuit.isPlacingComponent()) {
          return {
            left: circuit.getPlacingComponent().x,
            top: circuit.getPlacingComponent().y
          };
        }
      };

      circuit.getPlacingComponent = function () {
        return circuit.placingComponent;
      };

      circuit.isPlacingComponent = function () {
        return circuit.placingComponent != null;
      };

      circuit.loadPresetCircuit = function(presetName) {
        circuit.activeCircuitName = presetName;
      };

      circuit.setEditingComponent = function (component) {
        circuit.editingComponent = component;
      };

      circuit.isEditing = function () {
        return circuit.editingComponent != null;
      };

      circuit.sayHi = function () {
        return "Hello!";
      }
    });
