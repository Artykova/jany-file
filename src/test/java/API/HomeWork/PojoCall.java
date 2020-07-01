package API.HomeWork;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Test;

import java.io.IOException;
import java.net.URISyntaxException;


public class PojoCall {
    @Test
    public void callPojo() throws URISyntaxException, IOException {
        //https://swapi.dev/api/starships
        HttpClient client= HttpClientBuilder.create().build();
        URIBuilder uriBuilder=new URIBuilder();
        uriBuilder.setScheme("https").setHost("swapi.dev").setPath("api/starships");
        HttpGet get=new HttpGet(uriBuilder.build());
        HttpResponse httpResponse=client.execute(get);
        ObjectMapper objectMapper=new ObjectMapper();
        objectMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        UserPojo deserial=objectMapper.readValue(httpResponse.getEntity().getContent(),UserPojo.class);
        System.out.println(deserial.getResults().get(0).getName());





    }
}
