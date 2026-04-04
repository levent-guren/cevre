package tr.gov.cevre.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import tr.gov.cevre.entity.Personel;
import tr.gov.cevre.repository.PersonelRepository;

@Service
public class PersonelService {
	@Autowired
	private PersonelRepository personelRepository;

	@Autowired // @PersistentContext
	private EntityManager entityManager;

	public List<Personel> getPersoneller(Long id) {
		if (id == null) {
			return personelRepository.findAll();
		} else {
			return Arrays.asList(personelRepository.findById(id).orElseThrow());
		}
	}

	public Personel personelEkleGuncelle(Personel personel) {
		return personelRepository.save(personel);
	}

	public void personelSil(long id) {
		personelRepository.deleteById(id);
	}

	public List<Personel> personelSorgula(Personel q) {
		String query = "from Personel p where ";
		if (q.getId() != 0) {
			query += "p.id = :id and ";
		}
		if (q.getAdi() != null) {
			query += "p.adi = :adi and ";
		}
		if (q.getSoyadi() != null) {
			query += "p.soyadi = :soyadi and ";
		}
		query = query.substring(0, query.length() - (query.endsWith("where ") ? 7 : 5));
		TypedQuery<Personel> sqlQuery = entityManager.createQuery(query, Personel.class);
		if (q.getId() != 0) {
			sqlQuery.setParameter("id", q.getId());
		}
		if (q.getAdi() != null) {
			sqlQuery.setParameter("adi", q.getAdi());
		}
		if (q.getSoyadi() != null) {
			sqlQuery.setParameter("soyadi", q.getSoyadi());
		}

		return sqlQuery.getResultList();
	}
}
