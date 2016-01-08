---
layout: default
title: F.A.Q
---

### CPU lacks feature 0x00f8

By default it is supposed that you use enclosed app on the
same computer where you compiled it. So enclosed app uses
all the features of the CPU (SSE3, AVX, etc). If you
plan to run the app on another machine, specify option
`--features=no`. This will disable CPU extensions, that
may be unsupported on other computer.

### Can't install. Npm log has `/usr/bin/nodejs`

You installed node via `sudo apt-get install nodejs`. Just
install one more package `sudo apt-get install nodejs-legacy`.
But there are variants: http://stackoverflow.com/questions/20057790
