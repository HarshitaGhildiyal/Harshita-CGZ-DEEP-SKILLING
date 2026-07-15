package DesignPatterns.DecoratorPattern;

// ==========================================
// Decorator Pattern Example
// File Name: DecoratorTest.java
// ==========================================

// Component Interface
interface Notifier {
    void send(String message);
}

// Concrete Component
class EmailNotifier implements Notifier {

    @Override
    public void send(String message) {
        System.out.println("Sending Email: " + message);
    }
}

// Abstract Decorator
abstract class NotifierDecorator implements Notifier {

    protected Notifier notifier;

    public NotifierDecorator(Notifier notifier) {
        this.notifier = notifier;
    }

    @Override
    public void send(String message) {
        notifier.send(message);
    }
}

// Concrete Decorator - SMS
class SMSNotifierDecorator extends NotifierDecorator {

    public SMSNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message);
        System.out.println("Sending SMS: " + message);
    }
}

// Concrete Decorator - Slack
class SlackNotifierDecorator extends NotifierDecorator {

    public SlackNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message);
        System.out.println("Sending Slack Message: " + message);
    }
}

// Test Class
public class DecoratorTest {

    public static void main(String[] args) {

        System.out.println("Email Notification:");
        Notifier emailNotifier = new EmailNotifier();
        emailNotifier.send("Meeting at 10 AM");

        System.out.println("\nEmail + SMS Notification:");
        Notifier smsNotifier =
                new SMSNotifierDecorator(new EmailNotifier());
        smsNotifier.send("Meeting at 10 AM");

        System.out.println("\nEmail + SMS + Slack Notification:");
        Notifier fullNotifier =
                new SlackNotifierDecorator(
                        new SMSNotifierDecorator(
                                new EmailNotifier()));

        fullNotifier.send("Meeting at 10 AM");
    }
}
