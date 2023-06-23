package inventory.backend.springboot.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import inventory.backend.springboot.exception.ResourceNotFoundException;
import inventory.backend.springboot.model.Products;
import inventory.backend.springboot.model.User;
import inventory.backend.springboot.repository.ProductRepository;
import inventory.backend.springboot.repository.UserRepository;


@RestController()
@RequestMapping("/api/v1/")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@CrossOrigin(origins = "http://localhost:50503")
	@GetMapping("/products")
	public List<Products> getAllProducts(){
	    return productRepository.findAll(); 
	}
	
	
	@CrossOrigin(origins = "http://localhost:50503")
	@PostMapping("/products")
	public Products CreateProduct(@RequestBody Products product){
	    return productRepository.save(product); 
	}
	
	
	@CrossOrigin(origins = "http://localhost:50503")
	@GetMapping("/products/{id}")
	public ResponseEntity<Products> FindProductById(@PathVariable Long id){
	    Products product = productRepository.findById(id)
	    		.orElseThrow(() -> new ResourceNotFoundException("Product does not exists with id :" + id));
		return ResponseEntity.ok(product);
	}
	
	
	@CrossOrigin(origins = "http://localhost:50503")
	@PutMapping("/products/{id}")
	public ResponseEntity<Products> UpdateProduct(@PathVariable Long id, @RequestBody Products ProductDetail){
	    Products product = productRepository.findById(id)
	    		.orElseThrow(() -> new ResourceNotFoundException("Product does not exists with id :" + id));
		
	    product.setName(ProductDetail.getName());
	    product.setExpiry(ProductDetail.getExpiry());
	    product.setTags(ProductDetail.getTags());
	    product.setDescription(ProductDetail.getDescription());
	    product.setHeading(ProductDetail.getHeading());
	    product.setSubHeading(ProductDetail.getSubHeading());
	    product.setStock(ProductDetail.getStock());
	    
	    Products updateProduct = productRepository.save(product);
	    return ResponseEntity.ok(updateProduct);
	}
	
	
	@CrossOrigin(origins = "http://localhost:50503")
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Map<String, Boolean>> DeleteProduct(@PathVariable Long id){
	    Products product = productRepository.findById(id)
	    		.orElseThrow(() -> new ResourceNotFoundException("Product does not exists with id :" + id));
		
	    productRepository.delete(product);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
	    return ResponseEntity.ok(response);
	}
	
	
	

}
