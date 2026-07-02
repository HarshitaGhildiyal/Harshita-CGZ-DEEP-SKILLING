package InventoryManagementSystem;

import java.util.HashMap;
import java.util.Map;


class Product {
    int productId;
    String productName;
    int quantity;
    double price;

    Product(int productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    @Override
    public String toString() {
        return "ID: " + productId +
                ", Name: " + productName +
                ", Quantity: " + quantity +
                ", Price: ₹" + price;
    }
}


class Inventory {
    private HashMap<Integer, Product> inventory = new HashMap<>();

    
    public void addProduct(Product product) {
        inventory.put(product.productId, product);
        System.out.println("Product Added Successfully.");
    }

    
    public void updateProduct(int id, int quantity, double price) {
        Product product = inventory.get(id);

        if (product != null) {
            product.quantity = quantity;
            product.price = price;
            System.out.println("Product Updated Successfully.");
        } else {
            System.out.println("Product Not Found.");
        }
    }

    
    public void deleteProduct(int id) {
        if (inventory.remove(id) != null) {
            System.out.println("Product Deleted Successfully.");
        } else {
            System.out.println("Product Not Found.");
        }
    }

    
    public void displayProducts() {
        System.out.println("\nInventory:");

        for (Map.Entry<Integer, Product> entry : inventory.entrySet()) {
            System.out.println(entry.getValue());
        }
    }
}


public class InventoryManagementSystem {

    public static void main(String[] args) {

        Inventory inventory = new Inventory();

        inventory.addProduct(new Product(101, "Laptop", 20, 65000));
        inventory.addProduct(new Product(102, "Mouse", 50, 800));
        inventory.addProduct(new Product(103, "Keyboard", 40, 1200));

        inventory.displayProducts();

        inventory.updateProduct(102, 70, 850);

        inventory.displayProducts();

        inventory.deleteProduct(103);

        inventory.displayProducts();
    }
}
