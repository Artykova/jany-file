package API;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;

public class DeserializationIntro {

  @Test
  public void deserialization() throws URISyntaxException, IOException {

      HttpClient client=HttpClientBuilder.create().build();
      URIBuilder uriBuilder=new URIBuilder();
      uriBuilder.setScheme("https");
      uriBuilder.setHost("petstore.swagger.io");
      uriBuilder.setPath("v2/pet/1");

      HttpPost httpGet= new HttpPost(uriBuilder.build());
      httpGet.setHeader("Accept", "application/json");
      HttpResponse response=client.execute(httpGet);
      if(response.getStatusLine().getStatusCode() !=200){
          Assert.fail();
      }
      ObjectMapper objectMapper=new ObjectMapper();
     Map<String,Object> deserializedResponse= objectMapper.readValue(response.getEntity().getContent(),
             new TypeReference<Map<String, Object>>() {});
      System.out.println("The id from response bpody: "+deserializedResponse.get("id"));
      System.out.println("The id from response bpody: "+deserializedResponse.get("name"));

        Map<String, Object>category=(Map<String,Object>)deserializedResponse.get("category");
      System.out.println("category name is: "+category.get("name"));

  }
  @Test
    public void deserialization2() throws URISyntaxException, IOException {
      HttpClient client=HttpClientBuilder.create().build();
      URIBuilder uriBuilder=new URIBuilder();
      uriBuilder.setScheme("https");
      uriBuilder.setHost("regres.in");
      uriBuilder.setPath("api/users?page=2");

      HttpPost httpGet= new HttpPost(uriBuilder.build());
      httpGet.setHeader("Accept", "application/json");
      HttpResponse response=client.execute(httpGet);
      Assert.assertEquals(HttpStatus.SC_OK,response.getStatusLine().getStatusCode());
      ObjectMapper objectMapper=new ObjectMapper();
      Map<String,Object> deserObject=objectMapper.readValue(response.getEntity().getContent(),
              new TypeReference<Map<String,Object>>() {
      });
     Map<String,String> ad=(Map<String, String>) deserObject.get("ad");
      System.out.println(ad.get("company"));


  }

}









