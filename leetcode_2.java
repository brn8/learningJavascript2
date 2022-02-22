import java.util.ArrayList;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.ArrayList;

public class leetcode_2 {
	public static void minheap(int [] arr) {
		int [] newArray = new int[arr.length];
		String [] ranking = new String[arr.length];
		String [] finalRanking = new String[arr.length];
		PriorityQueue<Integer> heap = new PriorityQueue<Integer>(Collections.reverseOrder());
		
		for(int i=0; i<arr.length; i++) {
			heap.add(arr[i]);
		}
		for(int i=0; i<arr.length; i++) {
//			System.out.println(heap.peek()+" ");
			newArray[i]=heap.peek();
			heap.poll();
		}
		for(int i=0; i<newArray.length; i++) {
			if(i==0) {
				ranking[i]="Gold Medal";
			}
			else if (i==1) {
				ranking[i]="Silver Medal";
			}
			else if (i==2) {
				ranking[i]="Bronze Medal";
			}
			else {
				int r = i+1;
				ranking[i]=Integer.toString(r);
			}
		}
		for(int i =0; i<arr.length; i++) {
			for(int j=0; j<newArray.length; j++) {
				if(arr[i]==newArray[j]) {
					finalRanking[i]=ranking[j];
					break;
				}
			}
		}
		System.out.println(finalRanking[1]);
	}
	
	public static void main(String[] args) {
		int [] arr = {10,3,8,9,4};
		leetcode_2.minheap(arr);
	}

}
