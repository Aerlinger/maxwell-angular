angular.module("components", [])
    .controller("ComponentCtrl", function () {
      this.prototypes = [
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
    });
