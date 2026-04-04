package tr.gov.cevre;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UncheckedIOException;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;

import lombok.extern.log4j.Log4j2;
import tr.gov.cevre.entity.Personel;
import tr.gov.cevre.repository.PersonelRepository;

@Component
@Log4j2
public class DBInit implements CommandLineRunner {
	@Value("classpath:isimler.txt")
	private Resource isimlerResource;
	@Value("classpath:soyisimler.txt")
	private Resource soyisimlerResource;

	@Autowired
	private PersonelRepository personelRepository;
	@Value("${isimsayisi}")
	private int isimSayisi;
	private String[] isimler;
	private String[] soyisimler;
	private Random random = new Random();

	@Override
	public void run(String... args) throws Exception {
		isimler = asString(isimlerResource).split("\n");
		soyisimler = asString(soyisimlerResource).split("\n");
		for (int i = 0; i < isimSayisi; i++) {
			String adi = getRandomAd();
			String soyad = getRandomSoyad();
			Personel personel = new Personel(i + 1, adi, soyad, "https://i.pravatar.cc/250?u=" + adi + soyad);
			personelRepository.save(personel);
		}
		log.info(isimSayisi + " adet ornek veri olusturulmustur.");
	}

	public static String asString(Resource resource) {
		try (Reader reader = new InputStreamReader(resource.getInputStream())) {
			return FileCopyUtils.copyToString(reader);
		} catch (IOException e) {
			throw new UncheckedIOException(e);
		}
	}

	private String getRandomSoyad() {
		return soyisimler[random.nextInt(soyisimler.length)].trim();
	}

	private String getRandomAd() {
		return isimler[random.nextInt(isimler.length)].trim();
	}
}
