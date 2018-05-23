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
    _start: ffi('void mgos_WS2812FX_start(void *)'),
    _stop: ffi('void mgos_WS2812FX_stop(void *)'),
    _isRunning: ffi('bool mgos_WS2812FX_isRunning(void *)'),

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

        setBrightness: function (b) {
            WS2812FX._setBrt(this.pixels, b);
        },

        setSpeed: function (s) {
            WS2812FX._setSpd(this.pixels, s);
        },

        setColor: function (r, g, b) { // or call with just hex color
            if (b === undefined && g === undefined) {
                WS2812FX._setClr(this.pixels, r);
            } else {
                WS2812FX._setClrRGB(this.pixels, r, g, b);
            }
        },

        setMode: function (m) {
            // TODO lookup by name
            WS2812FX._setMode(this.pixels, m);
        },

        isRunning: function () {
            return WS2812FX._isRunning(this.pixels);
        },

        start: function () {
            this.timer = WS2812FX._start(this.pixels);
        },

        stop: function () {
            WS2812FX._stop(this.pixels, this.timer);
        },

    },

};
