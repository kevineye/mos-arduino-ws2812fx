#include "mgos_arduino_WS2812FX.h"

WS2812FX *mgos_WS2812FX_create(uint16_t n, uint8_t p, neoPixelType t) {
  return new WS2812FX(n, p, t);
}

void mgos_WS2812FX_init(WS2812FX *d) {
  if (d == nullptr) return;
  d->init();
}

void mgos_WS2812FX_setBrightness(WS2812FX *d, uint8_t b) {
  if (d == nullptr) return;
  d->setBrightness(b);
}

void mgos_WS2812FX_setSpeed(WS2812FX *d, uint16_t s) {
  if (d == nullptr) return;
  d->setSpeed(s);
}

void mgos_WS2812FX_setColor(WS2812FX *d, uint32_t c) {
  if (d == nullptr) return;
  d->setColor(c);
}

void mgos_WS2812FX_setMode(WS2812FX *d, uint8_t m) {
  if (d == nullptr) return;
  d->setMode(m);
}

void mgos_WS2812FX_start(WS2812FX *d) {
  if (d == nullptr) return;
  d->start();
}

void mgos_WS2812FX_service(WS2812FX *d) {
  if (d == nullptr) return;
  d->service();
}

