package inventory.backend.springboot.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import inventory.backend.springboot.model.Products;


@Repository()
public interface ProductRepository extends JpaRepository<Products, Long>{

}
