i = 0;
while (i < 200000) {
    postMessage("Web Worker Counter: " + i);
    i++;
}
