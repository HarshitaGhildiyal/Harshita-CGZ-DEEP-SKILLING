public class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}


// Exercise 3 ------------------->
public class MyService {

    ExternalApi api;
    public MyService(ExternalApi api){
        this.api = api;
    }

    public String fetchUser(int id){
        return  api.getUser(id);
    }
}



public class MyService {

    ExternalApi api;
    public MyService(ExternalApi api){
        this.api = api;
    }

    public void fetchUser(){
         api.getUser();
    }
}





public class MyService {

    ExternalApi api;
    public MyService(ExternalApi api){
        this.api = api;
    }

    public String fetchUser(){
      return    api.getData();
    }
}



public class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {

        api.connect();

        String data = api.getData();

        api.disconnect();

        return data;
    }
}
