import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {

    
    private static final Logger logger =
            LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {

        String username = "Harshita";
        int age = 21;
        double salary = 55000.75;

        
        logger.info("User {} has logged into the application.", username);

        
        logger.info("User {} is {} years old.", username, age);

       
        logger.debug("Current salary of {} is {}.", username, salary);

        
        int attempts = 3;
        logger.warn("User {} has made {} unsuccessful login attempts.", username, attempts);

       
        // String fileName = "data.txt";
        // logger.error("Unable to open file {}.", fileName);

        
        // int itemCount = 15;
        // double totalPrice = 2499.99;
        // logger.info("Order contains {} items with a total price of ₹{}.", itemCount, totalPrice);
    }
}
