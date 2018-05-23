#include "WS2812FX.h"
#include "mgos_timers.h"

#ifdef __cplusplus
extern "C"
{
#endif

WS2812FX *mgos_WS2812FX_create(int n, int p, int t);
void mgos_WS2812FX_init(WS2812FX *d);

void mgos_WS2812FX_setPixelColor(WS2812FX *d, int n, int c);
void mgos_WS2812FX_setPixelColorRGB(WS2812FX *d, int n, int r, int g, int b);
void mgos_WS2812FX_setPixelColorRGBW(WS2812FX *d, int n, int r, int g, int b, int w);

void mgos_WS2812FX_setBrightness(WS2812FX *d, int b);
void mgos_WS2812FX_setSpeed(WS2812FX *d, int s);
void mgos_WS2812FX_setColorRGB(WS2812FX *d, int r, int g, int b);
void mgos_WS2812FX_setColor(WS2812FX *d, int c);
void mgos_WS2812FX_setMode(WS2812FX *d, int m);

int mgos_WS2812FX_start(WS2812FX *d);
void mgos_WS2812FX_stop(WS2812FX *d, int);
bool mgos_WS2812FX_isRunning(WS2812FX *d);
void mgos_WS2812FX_service(WS2812FX *d);

#ifdef __cplusplus
}
#endif  /* __cplusplus */
