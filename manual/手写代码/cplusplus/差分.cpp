#include <iostream>
#include <vector>
using namespace std;

int  main() {
  int n;
  cin >> n;
  vector<int> v(n);

  for (int i = 0; i < n; i++) {
    cin >> v[i];
  }

  vector<int> b(n);
  b[0] = v[0];

  for (int i = 1; i < n; i++) {
    b[i] = b[i - 1] + v[i];
  }

  for (int i = 0; i < n; i++) {
    cout << b[i] << endl;
  }
  return 0;
}