package API;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;
import java.net.URISyntaxException;

public class GETRequestIntro {
@Test
    public void getRequest() throws URISyntaxException, IOException {
/*

To send API call:
1.Open a client (POSTMAN,terminal)
2.Specify the HTTP method (GET,POSt)
3.Specify URL/URIO/endpoint
4.Add query parameter (if need)
5.Add header parameter (content-type,accpet)
6.Add body parameter (for POST)
7.Execute (click on Send button)
 */

    HttpClient client = HttpClientBuilder.create().build();

    //http://petstore.swagger.io/v2/pet
    URIBuilder uri = new URIBuilder();
    uri.setScheme("https");
    uri.setHost("petstore.swagger.io");
    uri.setPath("v2/pet/7890");
    HttpGet get = new HttpGet(uri.build());
get.setHeader("Accept","application/json");
//execute
 client.execute(get);
    HttpResponse response = client.execute(get);


   Assert.assertEquals(HttpStatus.SC_OK,response.getStatusLine().getStatusCode());
Assert.assertEquals("application/json",response.getEntity().getContentType().getValue());

}


@Test
    public void getRequest2() throws URISyntaxException, IOException {
    // execute a GET request to :
    //http://petstore.swagger.io/v2/pet/findByStatus?status=sold
    HttpClient client = HttpClientBuilder.create().build();
    URIBuilder uri = new URIBuilder();
    uri.setScheme("https");
    uri.setHost("petstore.swagger.io");
    uri.setPath("v2/pet/findByStatus");
    uri.setCustomQuery("status-sold");
    HttpGet httpGet = new HttpGet(uri.build());
    //Add header parameters
    httpGet.setHeader("Accept", "application/json");
    HttpResponse response = client.execute(httpGet);
    Assert.assertEquals(200, response.getStatusLine().getStatusCode());
    Assert.assertEquals("application/json", response.getEntity().getContentType().getValue());

}

}
