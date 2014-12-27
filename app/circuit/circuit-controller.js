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
