package DSA.SortingCustomerOrders;

// Order Class
class Order {
    int orderId;
    String customerName;
    double totalPrice;

    Order(int orderId, String customerName, double totalPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "Order ID: " + orderId +
                ", Customer: " + customerName +
                ", Total Price: ₹" + totalPrice;
    }
}

public class CustomerOrderSorting {

    static void display(Order[] orders) {
        for (Order order : orders) {
            System.out.println(order);
        }
    }

    // Bubble Sort
    static void bubbleSort(Order[] orders) {

        int n = orders.length;

        for (int i = 0; i < n - 1; i++) {

            for (int j = 0; j < n - i - 1; j++) {

                if (orders[j].totalPrice > orders[j + 1].totalPrice) {

                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }

    // Quick Sort
    static void quickSort(Order[] orders, int low, int high) {

        if (low < high) {

            int pi = partition(orders, low, high);

            quickSort(orders, low, pi - 1);
            quickSort(orders, pi + 1, high);
        }
    }

    static int partition(Order[] orders, int low, int high) {

        double pivot = orders[high].totalPrice;

        int i = low - 1;

        for (int j = low; j < high; j++) {

            if (orders[j].totalPrice < pivot) {

                i++;

                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }

        Order temp = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp;

        return i + 1;
    }

    public static void main(String[] args) {

        Order[] orders = {

                new Order(101, "Harshita", 5500),
                new Order(102, "Amit", 2200),
                new Order(103, "Priya", 8700),
                new Order(104, "Rahul", 4300),
                new Order(105, "Neha", 1200)
        };

        // Bubble Sort
        System.out.println("Orders Before Bubble Sort:");
        display(orders);

        bubbleSort(orders);

        System.out.println("\nOrders After Bubble Sort:");
        display(orders);

        // New Array for Quick Sort
        Order[] orders2 = {

                new Order(101, "Harshita", 5500),
                new Order(102, "Amit", 2200),
                new Order(103, "Priya", 8700),
                new Order(104, "Rahul", 4300),
                new Order(105, "Neha", 1200)
        };

        quickSort(orders2, 0, orders2.length - 1);

        System.out.println("\nOrders After Quick Sort:");

        display(orders2);
    }
}
