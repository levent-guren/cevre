package tr.gov.cevre.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Personel {
	@Id
	private long id;
	private String adi;
	private String soyadi;
	private String resim;
}
