function monteCarlo_Obj() {
    var v1 = random(20, 255);
    var v2 = random(120, 255);
    while (v2 > v1) {
        v1 = random(220, 255);
        v2 = random(220, 255);
    }
    return (v1);
}