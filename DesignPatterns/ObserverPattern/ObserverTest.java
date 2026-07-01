package DesignPatterns.ObserverPattern;



import java.util.ArrayList;
import java.util.List;

// Observer Interface
interface Observer {
    void update(String stockName, double price);
}

// Subject Interface
interface Stock {
    void registerObserver(Observer observer);
    void deregisterObserver(Observer observer);
    void notifyObservers();
}

// Concrete Subject
class StockMarket implements Stock {

    private List<Observer> observers = new ArrayList<>();
    private String stockName;
    private double stockPrice;

    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void deregisterObserver(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(stockName, stockPrice);
        }
    }

    public void setStock(String stockName, double stockPrice) {
        this.stockName = stockName;
        this.stockPrice = stockPrice;
        System.out.println("\nStock Updated:");
        System.out.println(stockName + " = Rs." + stockPrice);
        notifyObservers();
    }
}

// Concrete Observer - Mobile App
class MobileApp implements Observer {

    private String user;

    public MobileApp(String user) {
        this.user = user;
    }

    @Override
    public void update(String stockName, double price) {
        System.out.println("Mobile App (" + user + ") : "
                + stockName + " price updated to Rs." + price);
    }
}

// Concrete Observer - Web App
class WebApp implements Observer {

    private String user;

    public WebApp(String user) {
        this.user = user;
    }

    @Override
    public void update(String stockName, double price) {
        System.out.println("Web App (" + user + ") : "
                + stockName + " price updated to Rs." + price);
    }
}

// Test Class
public class ObserverTest {

    public static void main(String[] args) {

        StockMarket stockMarket = new StockMarket();

        Observer mobileUser = new MobileApp("Harshita");
        Observer webUser = new WebApp("Rahul");

        // Register observers
        stockMarket.registerObserver(mobileUser);
        stockMarket.registerObserver(webUser);

        // Update stock prices
        stockMarket.setStock("TCS", 4250.50);

        stockMarket.setStock("Infosys", 1620.75);

        // Remove one observer
        stockMarket.deregisterObserver(webUser);

        // Update again
        stockMarket.setStock("Wipro", 310.25);
    }
}