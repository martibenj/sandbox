package proto;

import org.junit.Test;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

/**
 * Dl mgmt
 */
public class DlMgmt {

    private String id = "@ID@";
    private int baseInt = 30896;
    private int nbItem = 13;
    private String baseUrl = "http://www.google.fr" + id + ".ext";

    /**
     * Dl Test
     * @throws IOException Error on Http get
     */
    @Test
    public void Dl() throws IOException {
        URL url = null;
        int increment = baseInt;
        String madeUpURL = null;
        String destination = null;
        FileOutputStream fos = null;
        ReadableByteChannel rbc = null;
        while (increment < baseInt + nbItem) {
            madeUpURL = baseUrl;

            destination = "C:\\" + (increment - baseInt + 15) + ".ext";
            url = new URL(madeUpURL.replaceFirst(id, "" + increment));
            rbc = Channels.newChannel(url.openStream());
            fos = new FileOutputStream(destination);

            System.out.println("Downloading " + increment + " to " + destination);
            fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
            fos.flush();
            System.out.println("----------------------------------------");
            increment++;
        }
        rbc.close();
        fos.close();
    }
}
