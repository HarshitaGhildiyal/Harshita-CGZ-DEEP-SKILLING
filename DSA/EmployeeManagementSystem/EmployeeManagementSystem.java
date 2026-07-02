package DSA.EmployeeManagementSystem;

// Employee Class
class Employee {

    int employeeId;
    String name;
    String position;
    double salary;

    Employee(int employeeId, String name, String position, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee ID: " + employeeId +
                ", Name: " + name +
                ", Position: " + position +
                ", Salary: ₹" + salary;
    }
}

public class EmployeeManagementSystem {

    static Employee[] employees = new Employee[10];
    static int size = 0;

    // Add Employee
    static void addEmployee(Employee employee) {

        if (size < employees.length) {
            employees[size] = employee;
            size++;
            System.out.println("Employee Added Successfully.");
        } else {
            System.out.println("Employee Array is Full.");
        }
    }

    // Search Employee
    static void searchEmployee(int id) {

        for (int i = 0; i < size; i++) {

            if (employees[i].employeeId == id) {
                System.out.println("Employee Found:");
                System.out.println(employees[i]);
                return;
            }
        }

        System.out.println("Employee Not Found.");
    }

    // Traverse Employees
    static void displayEmployees() {

        System.out.println("\nEmployee Records:");

        for (int i = 0; i < size; i++) {
            System.out.println(employees[i]);
        }
    }

    // Delete Employee
    static void deleteEmployee(int id) {

        int index = -1;

        for (int i = 0; i < size; i++) {

            if (employees[i].employeeId == id) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            System.out.println("Employee Not Found.");
            return;
        }

        // Shift elements to the left
        for (int i = index; i < size - 1; i++) {
            employees[i] = employees[i + 1];
        }

        employees[size - 1] = null;
        size--;

        System.out.println("Employee Deleted Successfully.");
    }

    public static void main(String[] args) {

        addEmployee(new Employee(101, "Harshita", "Developer", 65000));
        addEmployee(new Employee(102, "Amit", "Manager", 80000));
        addEmployee(new Employee(103, "Priya", "Tester", 50000));

        displayEmployees();

        System.out.println();

        searchEmployee(102);

        System.out.println();

        deleteEmployee(102);

        displayEmployees();
    }
}
