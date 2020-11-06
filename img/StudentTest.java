package fd;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

//class StudentTest {
//	public static void calculateSchoolRank(List list) { 
//		Collections.sort(list); // ���� list�� �������� ������������ �����Ѵ�.
//
//		int prevRank = -1;       // ���� �������
//		int prevTotal = -1;       // ���� ����
//		int length = list.size(); 
//		
//		/*
//	      (2) �˸��� �ڵ带 �־� �ϼ��Ͻÿ�.
//	      1. �ݺ����� �̿��ؼ� list�� ����� Student��ü�� �ϳ��� �д´�.
//                 1.1 ����(total)�� ��������(prevTotal)�� ������
//                         ���� ���(prevRank)�� ���(schoolRank)�� �Ѵ�.
//	        1.2 ������ ���� �ٸ���,
//                         ���(schoolRank)�� ���� �˸°� ����ؼ� �����Ѵ�.
//                         ������ ������ ���ٸ�, �� ���� ����� �������� ���� ����ؾ��Ѵ�.
//       		       (������ ����)
//                 1.3 ���� ������ ����� ��������(prevTotal)���������(prevRank)�� �����Ѵ�.
//		*/
//	}
//
//	public static void main(String[] args) {
//		ArrayList list = new ArrayList();
//		list.add(new Student("���ڹ�",2,1,70,90,70));
//		list.add(new Student("���ڹ�",2,2,60,100,80));
//		list.add(new Student("ȫ�浿",1,3,100,100,100));
//		list.add(new Student("���ü�",1,1,90,70,80));
//		list.add(new Student("���ڹ�",1,2,80,80,90));
//
//		calculateSchoolRank(list);
//
//		Iterator it = list.iterator();
//
//		while(it.hasNext())
//			System.out.println(it.next());
//	}
//}

class StudentTest {
	public static void calculateSchoolRank(List list) { 
		Collections.sort(list); // ���� list�� �������� ������������ �����Ѵ�.

		int prevRank = -1;       // ���� �������
		int prevTotal = -1;       // ���� ����
		int length = list.size(); 
		
		// 1. �ݺ����� �̿��ؼ� list�� ����� Student��ü�� �ϳ��� �д´�.
		for(int i=0;i < length; i++) {
		Student s = (Student)list.get(i);
		// 1.1 ����(total)�� ��������(prevTotal)�� ������
		// ���� ���(prevRank)�� ���(schoolRank)�� �Ѵ�.
		if(s.total==prevTotal) {
		s.schoolRank = prevRank;
		} else {
		// 1.2 ������ ���� �ٸ���,
		// ���(schoolRank)�� ���� �˸°� ����ؼ� �����Ѵ�.
		// ������ �����ڿ��ٸ�, �� ���� ����� �������� ���� ����ؾ��Ѵ�.
		s.schoolRank = i + 1;
		}
		// 1.3 ���� ������ ����� ��������(prevTotal)�� �������(prevRank)�� �����Ѵ�.
		prevRank = s.schoolRank;
		prevTotal = s.total;
		} // for
	}

	public static void main(String[] args) {
		ArrayList list = new ArrayList();
		list.add(new Student("���ڹ�",2,1,70,90,70));
		list.add(new Student("���ڹ�",2,2,60,100,80));
		list.add(new Student("ȫ�浿",1,3,100,100,100));
		list.add(new Student("���ü�",1,1,90,70,80));
		list.add(new Student("���ڹ�",1,2,80,80,90));

		calculateSchoolRank(list);

		Iterator it = list.iterator();

		while(it.hasNext())
			System.out.println(it.next());
	}
}