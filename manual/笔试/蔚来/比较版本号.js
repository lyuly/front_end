let versions = ["3.1.5.4", "3.1.20"];
const compareVersion = (version1, version2) => {
  const m = version1.length, n = version2.length;
  let i = 0, j = 0;
  while (i < m || j < n) {
    let x = 0;
    for (; i < m && version1[i] !== '.'; i++) {
      x = x * 10 + version1.charCodeAt(i) - '0'.charCodeAt(0);
    }
    ++i;
    let y = 0;
    for (; j < n && version2[j] !== '.'; j++) {
      y = y * 10 + version2.charCodeAt(j) - '0'.charCodeAt(0);
    }
    ++j;

    if (x !== y) {
      return x > y ? 1 : -1;
    }
  }
  return 0;
}

console.log(compareVersion(versions[0], versions[1]));