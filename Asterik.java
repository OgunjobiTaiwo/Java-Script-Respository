import java.util.Scanner;
public class Asterik{
  public static void main(String[]args){
  Scanner input = new Scanner(System.in);
  System.out print("Enter a number of your choice : ");
  int number = input.nextInt();
  
  
  
  
if (number % 2 != 0){



    for (int count = 1 ; count <= number ; count++){
    if (count % 2 != 0){
    int space = number;
          for (space = number ; space >= count ; space--){
            System.out.print(" ");
            for (int row = 1 ; row <= count ; row++){
              System.out.print("*"+ " ")
              
              }
    System.out.println();
    
    
    
    
            }
            else{
              continue;
    
          }
    
        }




    for (int count = number - 2 ; count >= 1 ; count--){
    if (count % 2 != 0){
    int space = number;
          for (space = number ; space >= count ; space++){
            System.out.print(" ");
            for (int row = 1 ; row <= count ; row--){
              System.out.print("*"+ " ")
              }
  System.out.print();



        }
        else{
          continue;{
            }
        
        
        }
        
}
else{
System.out.print("invalid number")
  
  }
}
