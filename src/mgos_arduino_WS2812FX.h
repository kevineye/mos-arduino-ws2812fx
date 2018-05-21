#include "WS2812FX.h"

#ifdef __cplusplus
extern "C"
{
#endif

WS2812FX *mgos_WS2812FX_create(uint16_t n, uint8_t p, neoPixelType t);
void mgos_WS2812FX_init(WS2812FX *d);

void mgos_WS2812FX_setPixelColor(WS2812FX *d, uint16_t n, uint32_t c);
void mgos_WS2812FX_setPixelColorRGB(WS2812FX *d, uint16_t n, uint8_t r, uint8_t g, uint8_t b);
void mgos_WS2812FX_setPixelColorRGBW(WS2812FX *d, uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w);

void mgos_WS2812FX_setBrightness(WS2812FX *d, uint8_t b);
void mgos_WS2812FX_setSpeed(WS2812FX *d, uint16_t s);
void mgos_WS2812FX_setColorRGB(WS2812FX *d, uint8_t r, uint8_t g, uint8_t b);
void mgos_WS2812FX_setColor(WS2812FX *d, uint32_t c);
void mgos_WS2812FX_setMode(WS2812FX *d, uint8_t m);

void mgos_WS2812FX_start(WS2812FX *d);
void mgos_WS2812FX_stop(WS2812FX *d);
boolean mgos_WS2812FX_isRunning(WS2812FX *d);
void mgos_WS2812FX_service(WS2812FX *d);

#ifdef __cplusplus
}
#endif  /* __cplusplus */
