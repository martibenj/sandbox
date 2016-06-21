package string.template;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.junit.Test;
import org.stringtemplate.v4.ST;

/**
 * Created by a453958 on 21/06/2016.
 */
public class STTest {

   @Test
   public void testSTAndMail() {
      ST hello = new ST("Hello, <name> \n <a href=\"www.google.fr\">google</a>");
      hello.add("name", "World");
      System.out.println(hello.render());

      Properties props = new Properties();
      props.setProperty("mail.smtp.host", "smtp.free.fr");
      Session session = Session.getDefaultInstance(props, null);

      try {
         Message msg = new MimeMessage(session);
         msg.setFrom(new InternetAddress("bnj@javaCaiCool.com", "Bnj"));
         msg.addRecipient(Message.RecipientType.TO,
                          new InternetAddress("martinelli.benjamin@gmail.com", "Destinataire"));
         msg.setSubject("Envoi AR2");

         String htmlBody = hello.render();
         byte[] attachmentData = Files.readAllBytes(Paths.get(
               "C:\\home\\src\\sandbox\\misc\\TestingStuff\\src\\test\\resources\\atos_logotype.gif"));
         Multipart mp = new MimeMultipart();

         MimeBodyPart htmlPart = new MimeBodyPart();
         htmlPart.setContent(htmlBody, "text/html");
         mp.addBodyPart(htmlPart);

         MimeBodyPart attachment = new MimeBodyPart();
         InputStream attachmentDataStream = new ByteArrayInputStream(attachmentData);
         attachment.setFileName("logo.gif");
         attachment.setContent(attachmentDataStream, "image/gif");
         mp.addBodyPart(attachment);
         Transport.send(msg);
      }
      catch (MessagingException | IOException e) {
      }
   }
}
