Neopixel FX library for [Mongoose OS](https://mongoose-os.com/) based on [kitesurfer1404/WS2812FX](https://github.com/kitesurfer1404/WS2812FX) and compatible with [Adafruit NeoPixel library](https://github.com/adafruit/Adafruit_NeoPixel).

### Example Javascript code:

    load('api_ws2812fx.js');

    // 8 pixels on GPIO5
    let p = WS2812FX.create(8, 5, WS2812FX.NEO_GRB + WS2812FX.NEO_KHZ800);
    p.setBrightness(WS2812FX.BRIGHTNESS_MAX);
    p.setSpeed(1000);
    p.setColor(0x007BFF);
    p.setMode("RAINBOW_CYCLE");
    p.start();

### Example C++ code:

    #include "mgos.h"
    #include "mgos_arduino_WS2812FX.h"

    enum mgos_app_init_result mgos_app_init(void) {
      WS2812FX *p = mgos_WS2812FX_create(8, 5, NEO_GRB + NEO_KHZ800);
      mgos_WS2812FX_init(p);
      mgos_WS2812FX_setBrightness(p, 255);
      mgos_WS2812FX_setSpeed(p, 1000);
      mgos_WS2812FX_setColor(p, 0x007BFF);
      mgos_WS2812FX_setMode(p, FX_MODE_RAINBOW_CYCLE);
      mgos_WS2812FX_start(p);
      return MGOS_APP_INIT_SUCCESS;
    }
