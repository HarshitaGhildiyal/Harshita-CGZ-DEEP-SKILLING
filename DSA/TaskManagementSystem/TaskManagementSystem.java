package DSA.TaskManagementSystem;

// Task Class (Node)
class Task {
    int taskId;
    String taskName;
    String status;
    Task next;

    Task(int taskId, String taskName, String status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
        this.next = null;
    }
}

// Singly Linked List
class TaskLinkedList {

    private Task head = null;

    // Add Task
    public void addTask(int id, String name, String status) {

        Task newTask = new Task(id, name, status);

        if (head == null) {
            head = newTask;
        } else {
            Task temp = head;

            while (temp.next != null) {
                temp = temp.next;
            }

            temp.next = newTask;
        }

        System.out.println("Task Added Successfully.");
    }

    // Search Task
    public void searchTask(int id) {

        Task temp = head;

        while (temp != null) {

            if (temp.taskId == id) {
                System.out.println("Task Found:");
                System.out.println("Task ID: " + temp.taskId +
                        ", Name: " + temp.taskName +
                        ", Status: " + temp.status);
                return;
            }

            temp = temp.next;
        }

        System.out.println("Task Not Found.");
    }

    // Display Tasks
    public void displayTasks() {

        if (head == null) {
            System.out.println("No Tasks Available.");
            return;
        }

        System.out.println("\nTask List:");

        Task temp = head;

        while (temp != null) {

            System.out.println("Task ID: " + temp.taskId +
                    ", Name: " + temp.taskName +
                    ", Status: " + temp.status);

            temp = temp.next;
        }
    }

    
    public void deleteTask(int id) {

        if (head == null) {
            System.out.println("Task List is Empty.");
            return;
        }

        
        if (head.taskId == id) {
            head = head.next;
            System.out.println("Task Deleted Successfully.");
            return;
        }

        Task temp = head;

        while (temp.next != null && temp.next.taskId != id) {
            temp = temp.next;
        }

        if (temp.next == null) {
            System.out.println("Task Not Found.");
        } else {
            temp.next = temp.next.next;
            System.out.println("Task Deleted Successfully.");
        }
    }
}

public class TaskManagementSystem {

    public static void main(String[] args) {

        TaskLinkedList taskList = new TaskLinkedList();

        taskList.addTask(101, "Design Database", "Pending");
        taskList.addTask(102, "Develop Login Page", "In Progress");
        taskList.addTask(103, "Testing", "Pending");

        taskList.displayTasks();

        System.out.println();

        taskList.searchTask(102);

        System.out.println();

        taskList.deleteTask(102);

        taskList.displayTasks();
    }
}
