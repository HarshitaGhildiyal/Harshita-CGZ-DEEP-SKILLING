package DesignPatterns.AdapterPattern;

interface PaymentProcessor {
    void processPayment(double amount);
}


class PayPalGateway {
    public void sendPayment(double amount) {
        System.out.println("Payment of Rs." + amount + " processed using PayPal.");
    }
}


class StripeGateway {
    public void makePayment(double amount) {
        System.out.println("Payment of Rs." + amount + " processed using Stripe.");
    }
}


class PayPalAdapter implements PaymentProcessor {

    private PayPalGateway paypal;

    public PayPalAdapter(PayPalGateway paypal) {
        this.paypal = paypal;
    }

    @Override
    public void processPayment(double amount) {
        paypal.sendPayment(amount);
    }
}


class StripeAdapter implements PaymentProcessor {

    private StripeGateway stripe;

    public StripeAdapter(StripeGateway stripe) {
        this.stripe = stripe;
    }

    @Override
    public void processPayment(double amount) {
        stripe.makePayment(amount);
    }
}


public class AdapterTest {

    public static void main(String[] args) {

        PaymentProcessor paypal =
                new PayPalAdapter(new PayPalGateway());

        PaymentProcessor stripe =
                new StripeAdapter(new StripeGateway());

        paypal.processPayment(5000);

        stripe.processPayment(8500);
    }
}
