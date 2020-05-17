# MergeSort

_May 17, 2020_ **One minute read**

Merge Sort java implementation.

```
/**
 *  The {@code MergeSearch} class provides a static method for merge
 *  sort for a comparable array of objects.
 *  <p>
 *  The <em>sort</em> operations takes O(n * lg(n)).
 */
public class MergeSearch {

    /**
     * Rearranges the array in ascending order, using the natural order.

     * @param orj the array to be sorted
     */
    public static void sort(final Comparable[] orj) {
        Comparable[] aux = new Comparable[orj.length];

        sort(orj, aux, 0, orj.length - 1);
    }

    private static void sort(
                            final Comparable[] orj, final Comparable[] aux,
                            final int left, final int right) {
      if (left >= right) return;

      int mid = left + (right - left) / 2;

      sort(orj, aux, left,    mid);
      sort(orj, aux, mid + 1, right);

      // check left and right already sorted
      if (aux[mid].compareTo(a[mid + 1]) >= 0) return;

      merge(orj, aux, left, mid, right);
    }

    private static void merge(
                              final Comparable[] orj, final Comparable[] aux,
                              final int left, final int mid, final int right) {
      for (int i = 0; i < aux.length; i++) {
        aux[i] = orj[i];
      }

      int i = left;
      int j = mid + 1;

      for (int k = left; k <= right; k++) {
        if (i > mid)                            orj[k] = aux[j++];
        else if (j < mid)                       orj[k] = aux[i++];
        else if (aux[j].compareTo(aux[i]) < 0)  orj[k] = aux[j++];
        else                                    orj[k] = aux[i++];
      }
    }

}
```
