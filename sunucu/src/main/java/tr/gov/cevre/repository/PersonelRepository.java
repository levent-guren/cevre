package tr.gov.cevre.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tr.gov.cevre.entity.Personel;

public interface PersonelRepository extends JpaRepository<Personel, Long> {

}
