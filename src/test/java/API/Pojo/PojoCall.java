package API.Pojo;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Test;

import java.io.IOException;
import java.net.URISyntaxException;
//import sun.net.www.http.HttpClient;

public class PojoCall {
    @Test
            public void callPojo() throws URISyntaxException, IOException {

//https://reqres.in/api/users/7
        HttpClient client = HttpClientBuilder.create().build();
        URIBuilder uriBuilder = new URIBuilder();
uriBuilder.setScheme("https").setHost("reqres.in").setPath("api/users/7");
        HttpGet get=new HttpGet(uriBuilder.build());
        HttpResponse httpResponse=client.execute(get);
        ObjectMapper objectMapper=new ObjectMapper();
        UserPojo deserialization= objectMapper.readValue(httpResponse.getEntity().getContent(),  UserPojo.class);
        System.out.println(deserialization.getData().getFirstname());



    }

}
