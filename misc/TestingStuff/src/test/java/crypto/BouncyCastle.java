// -----------------------------------------------------------------------------
// Projet : Webdeca
// Auteur : B-Martinelli.
// -----------------------------------------------------------------------------
package crypto;

import java.io.FileReader;
import java.io.IOException;
import java.security.Security;

import org.bouncycastle.jce.PKCS10CertificationRequest;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.openssl.PEMReader;
import org.junit.Test;

public class BouncyCastle
{
   @Test
   public void test() throws Exception
   {
      Security.addProvider(new BouncyCastleProvider());
      FileReader fileReader = new FileReader(BouncyCastle.class.getClassLoader()
            .getResource("crypto/csr.csr").getPath());

      PEMReader reader = new PEMReader(fileReader);
      Object pemObject;
      try
      {
         pemObject = reader.readObject();
         reader.close();
      }
      catch (IOException e)
      {
         throw new Exception("Could not read CSR from string: " + e.getMessage(), e);
      }

      if (pemObject instanceof PKCS10CertificationRequest)
      {
         PKCS10CertificationRequest certificationRequest = (PKCS10CertificationRequest) pemObject;
         System.out.println(certificationRequest);

      }
   }
}
