package tr.gov.cevre.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tr.gov.cevre.dao.GlobalResponseDAO;
import tr.gov.cevre.entity.Personel;
import tr.gov.cevre.service.PersonelService;

@RestController
public class PersonelController {
	@Autowired
	private PersonelService personelService;

	@GetMapping("/")
	public List<Personel> getPersoneller(@RequestParam(required = false) Long id) {
		return personelService.getPersoneller(id);
	}

	@PostMapping("/query")
	public List<Personel> personelSorgula(@RequestBody Personel personel) {
		return personelService.personelSorgula(personel);
	}

	@PostMapping("/")
	public Personel personelEkleGuncelle(@RequestBody Personel personel) {
		return personelService.personelEkleGuncelle(personel);
	}

	@DeleteMapping("/{id}")
	public GlobalResponseDAO personelSil(@PathVariable Long id) {
		personelService.personelSil(id);
		return new GlobalResponseDAO("Personel Silindi");
	}

}
