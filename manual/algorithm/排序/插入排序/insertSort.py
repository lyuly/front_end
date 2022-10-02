from random import random
import time

def insertSort(arr):
  if arr:
    for i in range(1, len(arr)):
      key, j = arr[i], i - 1
      while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
      arr[j + 1] = key
  
  return

start = time.time()
arr = list()

for i in range(0, 100):
  arr.append(round(random() * 10))

insertSort(arr)
# print(arr)
delta = time.time() - start
print(f"time={delta:.3f}ms")