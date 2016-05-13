package old.def;

import java.util.Set;

public class FormEntity implements Cloneable
{

   public static final String PROPERTY_NAME = "name";
   public static final String PROPERTY_DESCRIPTION = "description";

   private long id;

   private String name;

   private String description;

   private Set<Object> objects = null;

   public long getId()
   {
      return id;
   }

   public void setId(long id)
   {
      this.id = id;
   }

   public String getName()
   {
      return name;
   }

   public void setName(String name)
   {
      this.name = name;
   }

   public String getDescription()
   {
      return description;
   }

   public void setDescription(String description)
   {
      this.description = description;
   }

   public Set<Object> getObjects()
   {
      return objects;
   }

   public void setObjects(Set<Object> Object)
   {
      this.objects = Object;
   }

}
