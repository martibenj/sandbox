package fr.martiben.cert.lambda.streams;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author martinelli-b
 */
public class Streams
{
  @Test
  public void streamFilter()
  {
    List<String> roles = new ArrayList<>();
    roles.add("role1");
    roles.add("role2");
    roles.add("role3");
    roles.add("role4");
    roles.add("5");
    System.out.println(roles.stream().filter(item->item.contains("role")).collect(Collectors.toList()));
  }

}
