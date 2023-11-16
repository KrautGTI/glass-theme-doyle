{
  "targets": [
    {
      "target_name": "glasstheme",
      "conditions":[
        ["OS=='win'", {
          "sources": [
            "native/glasstheme.cc"
          ]
        }]
      ],
      "cflags": [
        "-O3"
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "defines": [
        "NAPI_DISABLE_CPP_EXCEPTIONS"
      ]
    },
    {
      "target_name": "displayconfig",
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "conditions": [
          ["OS=='win'", {
              "sources": ["native/displayconfig.cc"]
          }],
      ],
      "include_dirs": [
          "<!@(node -p \"require('node-addon-api').include\")"
      ],
      'defines': [
        'NAPI_DISABLE_CPP_EXCEPTIONS'
        ],
      }
  ]
}
