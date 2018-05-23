#include "mgos_arduino_WS2812FX.h"

WS2812FX *mgos_WS2812FX_create(int n, int p, int t) {
  return new WS2812FX(n, p, t);
}

void mgos_WS2812FX_init(WS2812FX *d) {
  if (d == nullptr) return;
  d->init();
}

void mgos_WS2812FX_setPixelColor(WS2812FX *d, int n, int c) {
  if (d == nullptr) return;
  d->setPixelColor(n, c);
}
void mgos_WS2812FX_setPixelColorRGB(WS2812FX *d, int n, int r, int g, int b) {
  if (d == nullptr) return;
  d->setPixelColor(n, r, g, b);
}
void mgos_WS2812FX_setPixelColorRGBW(WS2812FX *d, int n, int r, int g, int b, int w) {
  if (d == nullptr) return;
  d->setPixelColor(n, r, g, b, w);
}

void mgos_WS2812FX_setBrightness(WS2812FX *d, int b) {
  if (d == nullptr) return;
  d->setBrightness(b);
}

void mgos_WS2812FX_setSpeed(WS2812FX *d, int s) {
  if (d == nullptr) return;
  d->setSpeed(s);
}

void mgos_WS2812FX_setColorRGB(WS2812FX *d, int r, int g, int b) {
  if (d == nullptr) return;
  d->setColor(r, g, b);
}

void mgos_WS2812FX_setColor(WS2812FX *d, int c) {
  if (d == nullptr) return;
  d->setColor(c);
}

void mgos_WS2812FX_setMode(WS2812FX *d, int m) {
  if (d == nullptr) return;
  d->setMode(m);
}

mgos_timer_id mgos_WS2812FX_start(WS2812FX *d) {
  if (d == nullptr) return 0;
  d->start();
  return mgos_set_timer(16, MGOS_TIMER_REPEAT, (void (*)(void*))mgos_WS2812FX_service, d);
}

void mgos_WS2812FX_stop(WS2812FX *d, mgos_timer_id t) {
  if (d == nullptr) return;
  if (t > 0) mgos_clear_timer(t);
  d->stop();
}

bool mgos_WS2812FX_isRunning(WS2812FX *d) {
  if (d == nullptr) return false;
  return d->isRunning();
}

void mgos_WS2812FX_service(WS2812FX *d) {
  if (d == nullptr) return;
  d->service();
}

