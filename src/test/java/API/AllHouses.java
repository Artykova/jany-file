package API;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Test;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

public class AllHouses {

    @Test
    public void getHouse() throws URISyntaxException, IOException {

        HttpClient client = HttpClientBuilder.create().build();
        URIBuilder uriBuilder = new URIBuilder();
        uriBuilder.setScheme("https").setHost("api.got.show").setPath("api/map/characters");

        HttpGet get = new HttpGet(uriBuilder.build());
        HttpResponse response = client.execute(get);
        ObjectMapper objectMapper = new ObjectMapper();
Map<String,Object>parsResponse=
        objectMapper.readValue(response.getEntity().getContent(),
                new TypeReference<Map<String,Object>>() {
});

List<Map<String,Object>> dataValue = (List<Map<String,Object>>)parsResponse.get("data");

//Map<String,Object> firstHouse=dataValue.get(0);
       // List<Map<String,Object>> dataValueAlty = (List<Map<String,Object>>)parsResponse.get("data");
Map<String,Object> firstHouse=dataValue.get(0);
        for (int i=0;i<dataValue.size();i++){
            System.out.println(dataValue.get(i).get("house"));

        }
        System.out.println(firstHouse.get("house"));

    }
}



