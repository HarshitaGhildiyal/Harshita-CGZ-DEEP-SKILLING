
interface PaymentStrategy {
    void pay(double amount);
}


class CreditCardPayment implements PaymentStrategy {

    @Override
    public void pay(double amount) {
        System.out.println("Paid Rs." + amount + " using Credit Card.");
    }
}


class PayPalPayment implements PaymentStrategy {

    @Override
    public void pay(double amount) {
        System.out.println("Paid Rs." + amount + " using PayPal.");
    }
}

class PaymentContext {

    private PaymentStrategy paymentStrategy;

    
    public PaymentContext(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    
    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    // Execute strategy
    public void makePayment(double amount) {
        paymentStrategy.pay(amount);
    }
}

// Test Class
public class StrategyTest {

    public static void main(String[] args) {

        // Using Credit Card
        PaymentContext payment =
                new PaymentContext(new CreditCardPayment());

        payment.makePayment(2500);

        // Switching to PayPal
        payment.setPaymentStrategy(new PayPalPayment());

        payment.makePayment(4500);

        // Switching back to Credit Card
        payment.setPaymentStrategy(new CreditCardPayment());

        payment.makePayment(1000);
    }
}
