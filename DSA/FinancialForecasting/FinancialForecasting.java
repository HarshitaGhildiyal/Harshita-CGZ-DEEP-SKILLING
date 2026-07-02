package DSA.FinancialForecasting;

import java.util.Scanner;

public class FinancialForecasting {

    
    public static double futureValue(double presentValue, double growthRate, int years) {

        
        if (years == 0) {
            return presentValue;
        }

        
        return futureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Present Value: ");
        double presentValue = sc.nextDouble();

        System.out.print("Enter Annual Growth Rate (%): ");
        double growthRate = sc.nextDouble() / 100;

        System.out.print("Enter Number of Years: ");
        int years = sc.nextInt();

        double result = futureValue(presentValue, growthRate, years);

        System.out.printf("\nFuture Value after %d years = ₹%.2f", years, result);

        sc.close();
    }
}
