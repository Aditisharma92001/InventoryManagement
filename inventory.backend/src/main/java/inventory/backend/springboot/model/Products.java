package inventory.backend.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name="product")
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "heading")
	private String heading;
	
	@Column(name = "subHeading")
	private String subHeading;
	
	@Column(name = "stock")
	private int stock;
	
	@Column(name = "expiry")
	private String expiry;
	
	@Column(name = "tags")
	private String tags;
	
	@Column(name = "description")
	private String description;
	
	public Products() {
		
	}
	
	public Products(long id, String name, String heading, String subHeading, int stock, String expiry, String tags,
			String description) {
		super();
		this.id = id;
		this.name = name;
		this.heading = heading;
		this.subHeading = subHeading;
		this.stock = stock;
		this.expiry = expiry;
		this.tags = tags;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHeading() {
		return heading;
	}

	public void setHeading(String heading) {
		this.heading = heading;
	}

	public String getSubHeading() {
		return subHeading;
	}

	public void setSubHeading(String subHeading) {
		this.subHeading = subHeading;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getExpiry() {
		return expiry;
	}

	public void setExpiry(String expiry) {
		this.expiry = expiry;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	
}
