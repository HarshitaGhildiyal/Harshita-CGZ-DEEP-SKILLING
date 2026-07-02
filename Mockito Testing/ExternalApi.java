public class ExternalApi {
    public String getData() {
        return "Real Data";
    }
}

---------------------------<----------------------->----------------
    // Exercise 3------------->

    public class ExternalApi {
    public String getUser(int id){
        return "Real User";
    }
}
-------------------------<------------------------>----------

    public class ExternalApi {
    public void getUser(){
        System.out.println("Real User....");
    }
}



public class ExternalApi {
    public String getData(){
        return "Real data";
    }
}




public class ExternalApi {

    public void connect() {
        System.out.println("Connected");
    }

    public String getData() {
        return "Real Data";
    }

    public void disconnect() {
        System.out.println("Disconnected");
    }
}
