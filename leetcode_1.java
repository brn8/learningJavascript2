import java.util.PriorityQueue;

public class leetcode_1 {
	
	public static void minheap(int [] arr) {
		int prevIndex = -1;
		int count=0;
		int finalCount = 0;
		int finalIndex = -1;
		PriorityQueue<Integer> heap = new PriorityQueue();
		for(int i=0; i<arr.length; i++) {
			heap.add(arr[i]);
		}
		for(int i=0; i<arr.length; i++) {
			int p = heap.peek();
			if(prevIndex==-1) {
				prevIndex=p;
				count++;

			}
			else if(p==prevIndex) {
				count++;
				if(count>finalCount) {
					finalCount = count;
					finalIndex=prevIndex;
				}
			}
			else {
				count=1;
				prevIndex=p;
			}
			heap.poll();
		}
		System.out.println(finalIndex);
	}
	public static void main(String[] args) {
		int [] arr = {2,2,1,1,1,2,2};
		leetcode_1.minheap(arr);
		
	}

}
