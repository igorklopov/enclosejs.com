---
layout: default
title: F.A.Q
---

### When running enclosed app i get "CPU lacks feature 0x00f8"

By default it is supposed that you use enclosed app on the
same computer where you compiled it. So enclosed app uses
all the features of the CPU (SSE3, AVX, etc). If you
plan to run the app on another machine, specify option
`--features=no`. This will disable CPU extensions, that
may be unsupported on other computer.
