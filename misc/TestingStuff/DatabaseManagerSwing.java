

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

@Component
public class DatabaseManagerSwing
{
   @PostConstruct
   public void init()
   {
      org.hsqldb.util.DatabaseManagerSwing.main(new String[] { "--url", "jdbc:hsqldb:mem:.", "--noexit" });
   }
}
