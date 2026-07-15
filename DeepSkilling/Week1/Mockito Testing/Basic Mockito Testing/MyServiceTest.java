// Exercise1------------>

import org.junit.jupiter.api.Test;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


public class MyServiceTest {

    @Test
    void testExternalapi(){
         ExternalApi mockapi = mock(ExternalApi.class);

         when(mockapi.getData()).thenReturn("Mock Data");

         MyService  service = new MyService(mockapi);

         String result = service.fetchData();

         assertEquals("Mock Data" , result);
    }

}

----------------------------<------------------------------------------>---------------------
    // Exercise-2--------->

    import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;




public class MyServiceVerifyTest {

    @Test
    void  verifyTest(){

        ExternalApi mockapi=  mock(ExternalApi.class);

        when(mockapi.getData()).thenReturn("mock Data");

        MyService  service = new MyService(mockapi);
        
        service.fetchData();
        
        verify(mockapi).getData();
    }


}

----------------------------------------<-------------------------->--------------------
// Exercise 3 ----->

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ArguementVerify {

    @Test
    void testArguement(){
        ExternalApi mockapi = mock(ExternalApi.class);

        when(mockapi.getUser(101)).thenReturn("Sahil");

        MyService service = new MyService(mockapi);

        String result = service.fetchUser(101);

        assertEquals("Sahil" ,result);

        verify(mockapi).getUser(101);
    }


}
-------------------------------------<----------------------------------->------------------


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ArguementVerify {

    @Test
    void testArguement(){
        ExternalApi mockapi = mock(ExternalApi.class);

       doNothing().when(mockapi).getUser();

        MyService service = new MyService(mockapi);

        service.fetchUser();


        verify(mockapi).getUser();
    }


}




import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ArguementVerify {

    @Test
    void testArguement(){
        ExternalApi mockapi = mock(ExternalApi.class);

       when(mockapi.getData())
               .thenReturn("First Call")
               .thenReturn("Second Call")
               .thenReturn("Third Call");

        MyService service = new MyService(mockapi);

       String first =  service.fetchUser();
       String second = service.fetchUser();
       String third = service.fetchUser();


        assertEquals("First Call", first);
        assertEquals("Second Call", second);
        assertEquals("Third Call", third);

        verify(mockapi, times(3)).getData();
    }


}






import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ArguementVerify {

    @Test
    void testInteractionOrder() {

        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);

        service.fetchData();

        InOrder inOrder = inOrder(mockApi);

        inOrder.verify(mockApi).connect();
        inOrder.verify(mockApi).getData();
        inOrder.verify(mockApi).disconnect();
    }
    }
