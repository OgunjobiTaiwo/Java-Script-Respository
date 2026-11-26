import java.util.Scanner; 
public class PerfectNumber{


  public static void isPerfectNumber(int number){
  
  int sum = 0;
  for (int count = 1 ; count < number ; count++){
      if(number % count == 0){
          sum = sum + count;
         
         
    }
      if(sum == number){
        System.out.println("Its a perfect number");
      }
    else{
        System.out.println("Its not a perfect number");
      }
      
      
      
}
public static void main(String[]args){
Scanner input = new Scanner(System.in);
System.out.print("Enter a number");
int number = input.nextInt();

isPerfectNumber(number);
}
}
