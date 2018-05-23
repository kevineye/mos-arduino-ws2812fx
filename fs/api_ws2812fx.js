let WS2812FX = {
    _create: ffi('void *mgos_WS2812FX_create(int, int, int)'),
    _init: ffi('void mgos_WS2812FX_init(void *)'),
    _setPClr: ffi('void mgos_WS2812FX_setPixelColor(void *, int, int)'),
    _setPClrRGB: ffi('void mgos_WS2812FX_setPixelColorRGB(void *, int, int, int, int)'),
    _setPClrRGBW: ffi('void mgos_WS2812FX_setPixelColorRGBW(void *, int, int, int, int, int)'),
    _setBrt: ffi('void mgos_WS2812FX_setBrightness(void *, int)'),
    _setSpd: ffi('void mgos_WS2812FX_setSpeed(void *, int)'),
    _setClrRGB: ffi('void mgos_WS2812FX_setColorRGB(void *, int, int, int)'),
    _setClr: ffi('void mgos_WS2812FX_setColor(void *, int)'),
    _setMode: ffi('void mgos_WS2812FX_setMode(void *, int)'),
    _start: ffi('void *mgos_WS2812FX_start(void *)'),
    _stop: ffi('void mgos_WS2812FX_stop(void *, void *)'),
    _isRunning: ffi('bool mgos_WS2812FX_isRunning(void *)'),

    NEO_RGB: ((0 << 6) | (0 << 4) | (1 << 2) | (2)),
    NEO_RBG: ((0 << 6) | (0 << 4) | (2 << 2) | (1)),
    NEO_GRB: ((1 << 6) | (1 << 4) | (0 << 2) | (2)),
    NEO_GBR: ((2 << 6) | (2 << 4) | (0 << 2) | (1)),
    NEO_BRG: ((1 << 6) | (1 << 4) | (2 << 2) | (0)),
    NEO_BGR: ((2 << 6) | (2 << 4) | (1 << 2) | (0)),

    NEO_KHZ400: 0x0100,
    NEO_KHZ800: 0x0000,

    BRIGHTNESS_MIN: 0,
    BRIGHTNESS_MAX: 255,

    MODE_COUNT: 57,

    FX_MODE_STATIC:                  0,
    FX_MODE_BLINK:                   1,
    FX_MODE_BREATH:                  2,
    FX_MODE_COLOR_WIPE:              3,
    FX_MODE_COLOR_WIPE_INV:          4,
    FX_MODE_COLOR_WIPE_REV:          5,
    FX_MODE_COLOR_WIPE_REV_INV:      6,
    FX_MODE_COLOR_WIPE_RANDOM:       7,
    FX_MODE_RANDOM_COLOR:            8,
    FX_MODE_SINGLE_DYNAMIC:          9,
    FX_MODE_MULTI_DYNAMIC:          10,
    FX_MODE_RAINBOW:                11,
    FX_MODE_RAINBOW_CYCLE:          12,
    FX_MODE_SCAN:                   13,
    FX_MODE_DUAL_SCAN:              14,
    FX_MODE_FADE:                   15,
    FX_MODE_THEATER_CHASE:          16,
    FX_MODE_THEATER_CHASE_RAINBOW:  17,
    FX_MODE_RUNNING_LIGHTS:         18,
    FX_MODE_TWINKLE:                19,
    FX_MODE_TWINKLE_RANDOM:         20,
    FX_MODE_TWINKLE_FADE:           21,
    FX_MODE_TWINKLE_FADE_RANDOM:    22,
    FX_MODE_SPARKLE:                23,
    FX_MODE_FLASH_SPARKLE:          24,
    FX_MODE_HYPER_SPARKLE:          25,
    FX_MODE_STROBE:                 26,
    FX_MODE_STROBE_RAINBOW:         27,
    FX_MODE_MULTI_STROBE:           28,
    FX_MODE_BLINK_RAINBOW:          29,
    FX_MODE_CHASE_WHITE:            30,
    FX_MODE_CHASE_COLOR:            31,
    FX_MODE_CHASE_RANDOM:           32,
    FX_MODE_CHASE_RAINBOW:          33,
    FX_MODE_CHASE_FLASH:            34,
    FX_MODE_CHASE_FLASH_RANDOM:     35,
    FX_MODE_CHASE_RAINBOW_WHITE:    36,
    FX_MODE_CHASE_BLACKOUT:         37,
    FX_MODE_CHASE_BLACKOUT_RAINBOW: 38,
    FX_MODE_COLOR_SWEEP_RANDOM:     39,
    FX_MODE_RUNNING_COLOR:          40,
    FX_MODE_RUNNING_RED_BLUE:       41,
    FX_MODE_RUNNING_RANDOM:         42,
    FX_MODE_LARSON_SCANNER:         43,
    FX_MODE_COMET:                  44,
    FX_MODE_FIREWORKS:              45,
    FX_MODE_FIREWORKS_RANDOM:       46,
    FX_MODE_MERRY_CHRISTMAS:        47,
    FX_MODE_FIRE_FLICKER:           48,
    FX_MODE_FIRE_FLICKER_SOFT:      49,
    FX_MODE_FIRE_FLICKER_INTENSE:   50,
    FX_MODE_CIRCUS_COMBUSTUS:       51,
    FX_MODE_HALLOWEEN:              52,
    FX_MODE_BICOLOR_CHASE:          53,
    FX_MODE_TRICOLOR_CHASE:         54,
    FX_MODE_ICU:                    55,
    FX_MODE_CUSTOM:                 56,

    create: function (count, pin, flags) {
        let obj = Object.create(WS2812FX._proto);
        obj.timer = 0;
        obj.pixels = WS2812FX._create(count, pin, flags);
        WS2812FX._init(obj.pixels);
        return obj;
    },

    _proto: {

        setPixelColor: function (r, g, b, w) { // or call with just r,g,b or just hex color
            if (w === undefined) {
                if (b === undefined && g === undefined) {
                    WS2812FX._setPClr(this.pixels, r);
                } else {
                    WS2812FX._setPClrRGB(this.pixels, r, g, b);
                }
            } else {
                WS2812FX._setPClrRGBW(this.pixels, r, g, b, w);
            }
        },

        setBrightness: function (brightness) {
            WS2812FX._setBrt(this.pixels, brightness);
        },

        setSpeed: function (speed) {
            WS2812FX._setSpd(this.pixels, speed);
        },

        setColor: function (r, g, b) { // or call with just hex color
            if (b === undefined && g === undefined) {
                WS2812FX._setClr(this.pixels, r);
            } else {
                WS2812FX._setClrRGB(this.pixels, r, g, b);
            }
        },

        setMode: function (mode) {
            WS2812FX._setMode(this.pixels, typeof mode === "string" ? WS2812FX["FX_MODE_" + mode] : mode);
        },

        isRunning: function () {
            return WS2812FX._isRunning(this.pixels);
        },

        start: function () {
            if (this.timer === 0) this.timer = WS2812FX._start(this.pixels);
        },

        stop: function () {
            WS2812FX._stop(this.pixels, this.timer);
            this.timer = 0;
        },

    },

};
