# BinarySearch

_May 16, 2020_ **One minute read**

Binary Search java implementation.

```
/**
 *  The {@code BinarySearch} class provides a static method for binary
 *  searching for a Comparable in a sorted array of objects.
 *  <p>
 *  The <em>find</em> operations takes logarithmic time in the worst case.
 */
public class BinarySearch {

    /**
     * Returns the index of the specified key in the specified array.
     *
     * @param  a the array of comparables, must be sorted in ascending order
     * @param  key the search key
     * @return index of key in array {@code a} if present; {@code -1} otherwise
     */
    public static int find(final Comparable[] items, final Comparable key) {
        int left = 0;
        int right = items.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (items[mid].compareTo(key) < 0)      right  = mid - 1;
            else if (items[mid].compareTo(key) > 0) left   = mid + 1;
            else                                    return mid;
        }

        return -1;
    }

}
```
