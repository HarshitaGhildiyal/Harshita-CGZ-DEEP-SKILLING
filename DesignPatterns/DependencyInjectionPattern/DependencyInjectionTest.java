package DesignPatterns.DependencyInjectionPattern;

interface CustomerRepository {
    String findCustomerById(int id);
}

// Concrete Repository
class CustomerRepositoryImpl implements CustomerRepository {

    @Override
    public String findCustomerById(int id) {
        return "Customer Found -> ID: " + id + ", Name: Harshita";
    }
}

// Service Class
class CustomerService {

    private CustomerRepository repository;

    // Constructor Injection
    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public void getCustomerDetails(int id) {
        String customer = repository.findCustomerById(id);
        System.out.println(customer);
    }
}


public class DependencyInjectionTest {

    public static void main(String[] args) {

        // Inject dependency using constructor
        CustomerRepository repository = new CustomerRepositoryImpl();

        CustomerService service = new CustomerService(repository);

        // Fetch customer details
        service.getCustomerDetails(101);
    }
}
