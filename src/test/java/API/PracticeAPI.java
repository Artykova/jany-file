package API;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Test;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;

public class PracticeAPI {


    @Test
    public void infoValidation() throws URISyntaxException, IOException {

        HttpClient client = HttpClientBuilder.create().build(); // opening the postman

        URIBuilder uri = new URIBuilder(); // set the URL
        //http://petstore.swagger.io/v2/pet
        uri.setScheme("http");
        uri.setHost("petstore.swagger.io");
        uri.setPath("v2/pet");

        //set the method
        HttpPost post = new HttpPost(uri.build());

        HttpResponse response= client.execute(post);
        // here we are getting response by clicking 'SEnD" button

        System.out.println(response);

        // Deserialization = json format converting to java

        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, Object> parsedREsponse = objectMapper.readValue(response.getEntity().getContent(),
                new TypeReference<Map<String, Object>>() {
        });

        System.out.println(parsedREsponse.get("id"));

    }
}
