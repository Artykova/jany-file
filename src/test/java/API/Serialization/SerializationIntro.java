package API.Serialization;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

import java.io.File;
import java.io.IOException;

public class SerializationIntro {
    @Test
    public void serializ1() throws IOException {
        Pet pet = new Pet("Hatiko", 2, "waiting");
        pet.setId(2);
        pet.setPhotoUrl("https://s3.petpict.amazon.com");
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(new File("target/pet.json"), pet);


    }}



