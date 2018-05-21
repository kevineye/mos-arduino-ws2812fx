#include "mgos_arduino_WS2812FX.h"

WS2812FX *mgos_WS2812FX_create(uint16_t n, uint8_t p, neoPixelType t) {
  return new WS2812FX(n, p, t);
}

void mgos_WS2812FX_init(WS2812FX *d) {
  if (d == nullptr) return;
  d->init();
}

void mgos_WS2812FX_setPixelColor(WS2812FX *d, uint16_t n, uint32_t c) {
  if (d == nullptr) return;
  d->setPixelColor(n, c);
}
void mgos_WS2812FX_setPixelColorRGB(WS2812FX *d, uint16_t n, uint8_t r, uint8_t g, uint8_t b) {
  if (d == nullptr) return;
  d->setPixelColor(n, r, g, b);
}
void mgos_WS2812FX_setPixelColorRGBW(WS2812FX *d, uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w) {
  if (d == nullptr) return;
  d->setPixelColor(n, r, g, b, w);
}

void mgos_WS2812FX_setBrightness(WS2812FX *d, uint8_t b) {
  if (d == nullptr) return;
  d->setBrightness(b);
}

void mgos_WS2812FX_setSpeed(WS2812FX *d, uint16_t s) {
  if (d == nullptr) return;
  d->setSpeed(s);
}

void mgos_WS2812FX_setColorRGB(WS2812FX *d, uint8_t r, uint8_t g, uint8_t b) {
  if (d == nullptr) return;
  d->setColor(r, g, b);
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

void mgos_WS2812FX_stop(WS2812FX *d) {
  if (d == nullptr) return;
  d->stop();
}

boolean mgos_WS2812FX_isRunning(WS2812FX *d) {
  if (d == nullptr) return false;
  return d->isRunning();
}

void mgos_WS2812FX_service(WS2812FX *d) {
  if (d == nullptr) return;
  d->service();
}

