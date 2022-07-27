import time

size = 1000

for _ in range(24):
  s = '*' * size
  start = time.time()
  r = s[2:size]
  delta = time.time() - start

  print(f'Size {size:9d}, time={delta:.3f}')

  size *= 2