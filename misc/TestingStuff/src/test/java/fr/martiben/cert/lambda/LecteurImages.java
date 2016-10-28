package fr.martiben.cert.lambda;

import java.awt.Color;
import java.net.URL;
import java.nio.file.Paths;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;

public class LecteurImages extends JFrame
{
  private static final long serialVersionUID = 1L;
  private final JPanel imagePanel;
  private       String imagePattern   = "poisson%s.jpg";
  private final String imageDirectory = "Images";
  private final int    numImages      = 10;

  /* poolSize: la taille du pool de threads */
  public LecteurImages(int poolSize) throws Exception
  {
    super("Some Internet Cafes");
    setDefaultCloseOperation(EXIT_ON_CLOSE);
    setNimbusLaf();
    imagePanel = new JPanel();
    imagePanel.setBackground(Color.LIGHT_GRAY);
    JScrollPane contentPane = new JScrollPane(imagePanel);
    setContentPane(contentPane);
    ExecutorService taskList = Executors.newFixedThreadPool(poolSize);
    long            before   = System.currentTimeMillis();

    imagePattern = Paths.get(imageDirectory).toAbsolutePath().toUri().toString() + "/" + imagePattern;

    for (int i = 1; i <= numImages; i++)
    {
      JLabel label    = new JLabel();
      URL    location = new URL(String.format(imagePattern, i));
      taskList.execute(()->{
        ImageIcon icon = new ImageIcon(location);
        label.setIcon(icon);
      });
      imagePanel.add(label);
      System.out.println(" image " + i + " r�cup�e");
    }
    taskList.shutdown();
    taskList.awaitTermination(60, TimeUnit.SECONDS);
    long after = System.currentTimeMillis();
    System.out.println("dur�e totale pour afficher toutes les images = " + (after - before) + " ms");
    setSize(640, 475);
    setVisible(true);
  }

  private static void setNimbusLaf()
  {
    try
    {
      UIManager.setLookAndFeel("javax.swing.plaf.nimbus.NimbusLookAndFeel");
    }
    catch (ClassNotFoundException | InstantiationException | IllegalAccessException
               | UnsupportedLookAndFeelException e)
    {
    }
  }
}
