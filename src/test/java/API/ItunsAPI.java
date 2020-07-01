package API;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

public class ItunsAPI {
    @Test
    public void getArtist() throws URISyntaxException, IOException {

        HttpClient client= HttpClientBuilder.create().build();
        URIBuilder uriBuilder=new URIBuilder();
        uriBuilder.setScheme("https");
        uriBuilder.setHost("itunes.apple.com");
        uriBuilder.setPath("search");
uriBuilder.setCustomQuery("term=Imagine Dragons");

        HttpGet get=new HttpGet(uriBuilder.build());
        HttpResponse response=client.execute(get);
        ObjectMapper objectMapper=new ObjectMapper();
        Map<String ,Object> mapper=objectMapper.readValue(response.getEntity().getContent(), new TypeReference<Map<String, Object>>() {
        });

        List<Map<String,Object>> data=(List<Map<String,Object>>)mapper.get("result");

        for(Map<String,Object> n: data){
            String temp=""+n.get("artistName");
            Assert.assertTrue(temp.contains("imagine dragons"));







        }




    }
}
