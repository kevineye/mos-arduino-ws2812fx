#ifndef ARDUINO_EXT_H
#define ARDUINO_EXT_H

#include <Arduino.h>
#include <WString.h>

#define _min(a,b) ((a)<(b)?(a):(b))
#define _max(a,b) ((a)>(b)?(a):(b))
#define min(a,b) ((a)<(b)?(a):(b))
#define max(a,b) ((a)>(b)?(a):(b))

long random(long);
long random(long, long);
void randomSeed(unsigned long);
long secureRandom(long);
long secureRandom(long, long);
long map(long, long, long, long, long);

#endif
