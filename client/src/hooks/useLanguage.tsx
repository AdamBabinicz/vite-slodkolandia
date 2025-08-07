import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Language, defaultLang as appDefaultLang } from "@/config/paths";

interface LanguageContextType {
  language: Language;
  setLanguage: (
    lang: Language,
    options?: { preventNavigation?: boolean }
  ) => void;
  t: (
    key: string,
    replacements?: Record<string, string | number | undefined | null>,
    fallback?: string
  ) => string;
  isLanguageInitialized: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  pl: {
    "currencyUnit.pln": "zł",
    "common.close": "Zamknij",
    "nav.home": "Start",
    "nav.about": "O Nas",
    "nav.offer": "Oferta",
    "nav.photo": "Foto",
    "nav.pricing": "Cennik",
    "nav.contact": "Kontakt",
    "nav.terms": "Regulamin",
    "nav.privacyPolicy": "Polityka Prywatności",
    "nav.allAttractions": "Wszystkie Atrakcje",
    "nav.tents": "Namioty Imprezowe",
    "nav.tablesChairs": "Stoły i Krzesła",
    "nav.inflatables": "Dmuchańce",
    "nav.popcorn": "Popcorn",
    "nav.cottonCandy": "Wata Cukrowa",
    "nav.chocolateFountain": "Fontanna Czekoladowa",
    "nav.allPhotos": "Wszystkie Zdjęcia",
    "nav.photoTents": "Namioty",
    "nav.photoTablesChairs": "Stoły i Krzesła",
    "nav.photoInflatables": "Dmuchańce",
    "nav.photoCottonCandy": "Wata Cukrowa",
    "nav.photoPopcorn": "Popcorn",
    "nav.photoFountains": "Fontanny Czekoladowe",
    "nav.review": "Dodaj opinię",
    "hero.title": "SŁODKOLANDIA wita:",
    "hero.subtitle": "Niezapomniane Atrakcje na Twoją Imprezę!",
    "hero.description":
      "Gwarantujemy świetną zabawę i profesjonalną obsługę na każdym evencie!",
    "hero.seeOffer": "Zobacz naszą ofertę",
    "hero.askDate": "Zapytaj o termin",
    "services.title": "Nasze Główne Atrakcje",
    "services.description":
      "Oferujemy kompleksowy wynajem sprzętu eventowego i atrakcji, które sprawią, że Twoja impreza będzie niezapomniana",
    "services.seeAll": "Zobacz wszystkie atrakcje",
    "category.namioty": "Namioty",
    "category.wyposazenie": "Wyposażenie",
    "category.dmuchance": "Dmuchańce",
    "category.cukiernicze": "Mniam mniam",
    "category.uslugi": "Usługi",
    "whyUs.title": "Dlaczego firma SŁODKOLANDIA wita:?",
    "whyUs.description":
      "Łączymy pasję do tworzenia niezapomnianych chwil z profesjonalnym podejściem do każdego eventu",
    "whyUs.experience": "Doświadczenie",
    "whyUs.experienceDesc":
      "Lata doświadczenia w organizacji eventów różnej skali",
    "whyUs.safety": "Bezpieczeństwo",
    "whyUs.safetyDesc":
      "Certyfikowany sprzęt i pełne ubezpieczenie każdej atrakcji",
    "whyUs.punctuality": "Punktualność",
    "whyUs.punctualityDesc":
      "Zawsze na czasie - dotrzymujemy terminów dostaw i montażu",
    "whyUs.individual": "Indywidualne Podejście",
    "whyUs.individualDesc":
      "Każdy event jest wyjątkowy - dostosowujemy się do Twoich potrzeb",
    "cta.mainTitle": "Zorganizujmy razem Twoją wymarzą imprezę!",
    "cta.mainDescription":
      "Skontaktuj się z nami już dziś i sprawdź dostępność na Twój termin. Gwarantujemy profesjonalną obsługę i niezapomnianych wrażeń!",
    "cta.contactForm": "Formularz kontaktowy",
    "cta.secondaryTitle": "Gotowy na niezapomnianą imprezę?",
    "cta.secondaryDescription":
      "Skontaktuj się z nami już dziś i zarezerwuj termin!",
    "cta.callNow": "Zadzwoń teraz",
    "cta.askForDate": "Zapytaj o termin",
    "home.stats.eventsOrganized": "Eventów zorganizowanych",
    "home.stats.happyClientsMonthly": "Zadowolonych Klientów miesięcznie",
    "home.stats.yearsExperience": "lat doświadczenia",
    "home.stats.serviceRadius": "promień obsługi",
    "footer.companyName": "SŁODKOLANDIA wita:",
    "footer.companyDescription":
      "Profesjonalny wynajem atrakcji eventowych w Radomiu i okolicach. Tworzymy niezapomniane chwile dla Twoich Gości!",
    "footer.quickLinks": "Szybkie Linki",
    "footer.servicesTitle": "Nasze Usługi",
    "footer.serviceTents": "Namioty Imprezowe",
    "footer.serviceTables": "Stoły i Krzesła",
    "footer.serviceInflatables": "Dmuchańce",
    "footer.serviceCottonCandy": "Wata Cukrowa",
    "footer.servicePopcorn": "Maszyny do Popcornu",
    "footer.serviceFountains": "Fontanna Czekoladowa",
    "footer.serviceComprehensive": "Kompleksowa Obsługa",
    "footer.seeAlsoTitle": "Zobacz również",
    "footer.clientReviews": "Opinie Klientów",
    "footer.contactTitle": "Kontakt",
    "footer.address": "Radom i okolice",
    "footer.addressDetail": "(promień 100 km)",
    "footer.copyright": "Radom, 2014 - {year} SŁODKOLANDIA wita:.",
    "footer.privacyPolicy": "Polityka Prywatności",
    "footer.terms": "Regulamin",
    "reviews.pageTitle": "Opinie Naszych Klientów",
    "reviews.pageSubtitle":
      "Jesteśmy dumni z zaufania, jakim darzą nas Klienci. Zobacz, co mówią o współpracy z nami.",
    "reviews.showMore": "Pokaż więcej opinii",
    "reviews.seeAllGoogle": "Zobacz wszystkie opinie w Google",
    "reviews.sourceGoogle": "Opinia z Google",
    "reviews.kromer.author": "Kasia Kromer",
    "reviews.kromer.details": "3 opinie",
    "reviews.kromer.text":
      "Serdecznie polecamy! Profesjonalne podejście do Klienta, wywiązanie się z umowy. Duży plus w cenie ubezpieczenie dziecka w razie wypadku. Polecam !",
    "reviews.domosfera.author": "DOMOSFERA P.W.",
    "reviews.domosfera.details": "7 opinii",
    "reviews.domosfera.text":
      "Z Całego Serca Polecam, obsługa na najwyższym Poziomie.",
    "reviews.nowywy.author": "Mateusz Nowywy",
    "reviews.nowywy.details": "5 opinii",
    "reviews.nowywy.text":
      "Polecam tę firmę innym ponieważ urządzenia takie jak dmuchańce pachną świeżością i są nowe. Obsługa jest bardzo miła i pomocna we wszystkim co wiąże się z zabawą i rozrywką dla dzieci. Nasze dzieci obecne na imprezie były bardzo zachwycone.",
    "reviews.holmes.author": "Mr. Holmes",
    "reviews.holmes.details": "Lokalny przewodnik",
    "reviews.holmes.text":
      "Firma Słodkolandia wita: traktuje swoje obowiązki wynikające z umowy bardzo rzetelnie.Jest elastyczna przy negocjacjach odnośnie ceny i oferuje bardzo dobrej jakości sprzęt.",
    "reviews.pawel.author": "Paweł -",
    "reviews.pawel.details": "7 opinii",
    "reviews.pawel.text":
      "Firma profesjonalna, duża fachowość, entuzjazm i zaangażowanie, przystępne ceny, zabawne dmuchańce. Polecam!",
    "reviews.zak.author": "Zosia Żak",
    "reviews.zak.details": "2 opinie",
    "reviews.zak.text": "Bardzo polecam tą firmę 10/10 🙂👍",
    "reviews.prondek.author": "jan prondek",
    "reviews.prondek.details": "13 opinii",
    "reviews.prondek.text":
      "byłem na imprezie organizowanej przez was i musze powiedzieć że było super, pozdrawiam",
    "reviews.chmielinski.author": "Adam Chmieliński",
    "reviews.chmielinski.details": "32 opinie",
    "reviews.chmielinski.text": "Polecam firmę :)",
    "reviews.viranos.author": "viranos s",
    "reviews.viranos.details": "3 opinie",
    "reviews.viranos.text": "Polecam!",
    "reviews.dawidt.author": "Dawid T",
    "reviews.dawidt.details": "Lokalny przewodnik",
    "reviews.dawidt.text": "Imprezy dla dzieci.",
    "reviews.nawara.author": "Martyna Nawara",
    "reviews.nawara.details": "brak danych",
    "reviews.nawara.text": "5/5",
    "reviews.nazwiskowski.author": "Imienin Nazwiskowski",
    "reviews.nazwiskowski.details": "Lokalny przewodnik",
    "reviews.nazwiskowski.text": "5/5",
    "attractionCard.details": "Szczegóły",
    "attractionCard.priceFrom": "od ",
    "pricing.perPeriod.dzień": "dzień",
    "pricing.perPeriod.impreza": "impreza",
    "pricing.perPeriod.event": "event",
    "pricing.perPeriod.sztuka/dzień": "sztuka/dzień",
    "pricing.perPeriod.od": "od",
    "pricing.perPeriod.gratis": "Gratis*",
    "pricing.perPeriod.hour": "godzina",
    "cookieConsent.message":
      "Ta strona używa plików cookies w celu zapewnienia najlepszej jakości usług. Kontynuując przeglądanie zgadzasz się na ich użycie.",
    "cookieConsent.accept": "Akceptuję",
    "cookieConsent.reject": "Odrzuć",
    "inquiryForm.title": "Formularz Zapytania",
    "inquiryForm.nameLabel": "Imię i nazwisko *",
    "inquiryForm.namePlaceholder": "Twoje imię i nazwisko",
    "inquiryForm.nameError": "Imię i nazwisko musi mieć co najmniej 2 znaki",
    "inquiryForm.emailLabel": "Email *",
    "inquiryForm.emailPlaceholder": "twoj@email.pl",
    "inquiryForm.emailError": "Nieprawidłowy adres email",
    "inquiryForm.phoneLabel": "Telefon",
    "inquiryForm.phonePlaceholder": "+48 123 456 789",
    "inquiryForm.eventDateLabel": "Data eventu",
    "inquiryForm.attractionsLabel": "Interesujące atrakcje",
    "inquiryForm.messageLabel": "Wiadomość *",
    "inquiryForm.messagePlaceholder":
      "Opisz swój event, liczbę Gości, dodatkowe wymagania...",
    "inquiryForm.messageError": "Wiadomość musi mieć co najmniej 10 znaków",
    "inquiryForm.submitButton": "Wyślij Zapytanie",
    "inquiryForm.submittingButton": "Wysyłanie...",
    "inquiryForm.successTitle": "Zapytanie wysłane!",
    "inquiryForm.successDescription":
      "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.",
    "inquiryForm.errorTitle": "Błąd wysyłania",
    "inquiryForm.errorDescription":
      "Przepraszamy, wystąpił problem. Spróbuj ponownie lub zadzwoń.",
    "inquiryForm.attractionOptionTents": "Namioty Imprezowe",
    "inquiryForm.attractionOptionTables": "Stoły",
    "inquiryForm.attractionOptionChairs": "Krzesła",
    "inquiryForm.attractionOptionLinens": "Obrusy",
    "inquiryForm.attractionOptionInflatables": "Dmuchane Atrakcje",
    "inquiryForm.attractionOptionCottonCandy": "Wata Cukrowa",
    "inquiryForm.attractionOptionPopcorn": "Maszyny do Popcornu",
    "inquiryForm.attractionOptionFountains": "Fontanna Czekoladowa",
    "inquiryForm.attractionOptionComprehensive": "Kompleksowa Obsługa",
    "pricingPage.heroTitle": "Cennik Naszych Usług",
    "pricingPage.heroDescription":
      "Oferujemy konkurencyjne ceny i indywidualne wyceny dostosowane do Twojego budżetu i potrzeb. Wszystkie ceny zawierają transport w promieniu 100 km od Radomia.",
    "pricingPage.badgeTransportFree15km": "🚚 Darmowy transport do 100 km",
    "pricingPage.badgeSetupIncluded": "🛠️ Montaż i demontaż w cenie",
    "pricingPage.badgeInsuranceOC": "🛡️ Ubezpieczenie OC",
    "pricingPage.packagesTitle": "Pakiety Promocyjne",
    "pricingPage.packagesDescription":
      "Oszczędź wynajmując pakiety atrakcji! Im więcej wynajmujesz, tym więcej oszczędzasz.",
    "pricingPage.popularPackage": "Najpopularniejszy",
    "pricingPage.packageNormally": "Normalnie",
    "pricingPage.packageSave": "Oszczędzasz {amount} zł",
    "pricingPage.packageIncludes": "W pakiecie:",
    "pricingPage.packageAsk": "Zapytaj o pakiet",
    "pricingPage.individualTitle": "Cennik Indywidualny",
    "pricingPage.individualDescription": "Ceny wynajmu pojedynczych atrakcji.",
    "pricingPage.categoryAll": "Wszystkie",
    "pricingPage.categoryGastro": "Słodkości i Wyposażenie",
    "pricingPage.itemizedPricingLabel": "Ceny jednostkowe",
    "pricingPage.additionalServicesTitle": "Usługi Dodatkowe",
    "pricingPage.discountsTitle": "Rabaty i Promocje",
    "pricingPage.discountPackages": "Pakiety Eventowe",
    "pricingPage.discountPackagesDesc":
      "Wynajmij 3 lub więcej atrakcji i otrzymaj 10% rabatu!",
    "pricingPage.discountLongTerm": "Długoterminowy Wynajem",
    "pricingPage.discountLongTermDesc":
      "Eventy powyżej 2 dni - specjalne ceny!",
    "pricingPage.discountLoyal": "Klienci Stali",
    "pricingPage.discountLoyalDesc":
      "Program lojalnościowy dla regularnych Klientów",
    "pricingPage.askForDiscount": "Zapytaj o Rabat",
    "pricingPage.importantInfoTitle": "Ważne Informacje",
    "pricingPage.rentalConditionsTitle": "📋 Warunki Wynajmu",
    "pricingPage.rentalCondition1": "• Rezerwacja wymaga wpłaty 200 zł zadatku",
    "pricingPage.rentalCondition2":
      "• Minimalna doba wynajmu - 1 dzień (24 godziny) dla namiotów, pozostałe atrakcje na czas trwania imprezy",
    "pricingPage.rentalCondition3":
      "• Możliwość anulowania do 7 dni przed eventem",
    "pricingPage.rentalCondition4": "• Ceny brutto",
    "pricingPage.rentalCondition5":
      "• Dla eventów w dni świąteczne - dopłata 20%",
    "pricingPage.transportSetupTitle": "🚚 Transport i Montaż",
    "pricingPage.transportSetup1": "• Darmowy transport do 100 km od Radomia",
    "pricingPage.transportSetup2":
      "• Montaż i demontaż w standardowych godzinach (8:00-18:00)",
    "pricingPage.transportSetup3":
      "• Czas montażu: 2-4 godziny w zależności od atrakcji",
    "pricingPage.transportSetup4":
      "• Wymagane jest zapewnienie dostępu do prądu 230V",
    "pricingPage.transportSetup5":
      "• Dla dmuchańców - płaska powierzchnia trawiasta",
    "pricingPage.packageChildName": "Pakiet Dziecięcy",
    "pricingPage.packageChildDesc": "Idealny na urodziny dziecka",
    "pricingPage.packageChildItem1": "Zamek dmuchany",
    "pricingPage.packageChildItem2": "Wata cukrowa",
    "pricingPage.packageChildItem3": "Popcorn",
    "pricingPage.packageFamilyName": "Pakiet Rodzinny",
    "pricingPage.packageFamilyDesc": "Dla większych rodzinnych spotkań",
    "pricingPage.packageFamilyItem1": "Namiot 6x12m",
    "pricingPage.packageFamilyItem2": "Dmuchana zjeżdżalnia",
    "pricingPage.packageFamilyItem3": "Wata cukrowa",
    "pricingPage.packageFamilyItem4": "Fontanna czekoladowa",
    "pricingPage.packageEventName": "Pakiet Eventowy",
    "pricingPage.packageEventDesc": "Kompleksowa obsługa większych eventów",
    "pricingPage.packageEventItem1": "Namiot 10x20m",
    "pricingPage.packageEventItem2": "2x Dmuchańce",
    "pricingPage.packageEventItem3": "Wata cukrowa",
    "pricingPage.packageEventItem4": "Popcorn",
    "pricingPage.packageEventItem5": "Fontanna czekoladowa",
    "pricingPage.packageEventItem6": "Obsługa",
    "pricingPage.additionalServiceSnacksInfo":
      "• Cena za przekąski 3,5 - 5 PLN/100 g na osobę (cena jest zależna od ilości Gości, rodzaju zamówionych owoców oraz pory roku)",
    "pricingPage.additionalServiceExtraChocolate":
      "• Dodatkowa czekolada 2,5 kg (150 zł)",
    "pricingPage.additionalServiceTablecloth": "• Obrus (50 zł)",
    "pricingPage.additionalServiceTransportInfo":
      "Dojazd na terenie miasta gratis, poza terenem miasta płatne w obie strony 1,5 zł/1 km",
    "pricingPage.unitPriceDefault": "zł",
    "galleryPage.seoTitle":
      "Galeria Zdjęć - Zobacz Nasze Atrakcje w Akcji | SŁODKOLANDIA wita:",
    "galleryPage.seoDescription":
      "Obejrzyj galerię zdjęć z naszych realizacji eventowych. Namioty imprezowe, dmuchańce, wata cukrowa, popcorn i fontanny czekoladowe w akcji.",
    "galleryPage.heroTitle": "Zobacz Nasze Atrakcje w Akcji!",
    "galleryPage.heroDescription":
      "Galeria zdjęć z naszych realizacji eventowych. Odkryj, jak wyglądają nasze atrakcje na prawdziwych imprezach i eventach w Radomiu i okolicach.",
    "galleryPage.badgeEventsDone": "Ponad 500 zrealizowanych eventów",
    "galleryPage.filterLabel": "Kategorie",
    "galleryPage.categoryAll": "Wszystkie",
    "galleryPage.categoryTents": "Namioty Imprezowe",
    "galleryPage.categoryTablesChairs": "Stoły i Krzesła",
    "galleryPage.categoryInflatables": "Dmuchane Atrakcje",
    "galleryPage.categoryCottonCandy": "Wata Cukrowa",
    "galleryPage.categoryPopcorn": "Popcorn",
    "galleryPage.categoryFountains": "Fontanny Czekoladowe",
    "galleryPage.categoryEventSetups": "Realizacje Eventów",
    "galleryPage.sectionTentsDesc":
      "Profesjonalne namioty w różnych konfiguracjach - od kameralnych przyjęć po duże eventy firmowe.",
    "galleryPage.sectionTablesChairsDescription":
      "Kompleksowe wyposażenie stołów, krzeseł, obrusów i więcej.",
    "galleryPage.sectionInflatablesDesc":
      "Bezpieczna zabawa dla dzieci - zjeżdżalnie, zamki dmuchane.",
    "galleryPage.sectionCottonCandyDesc":
      "Kolorowa wata cukrowa w różnych smakach - słodka atrakcja dla Gości w każdym wieku.",
    "galleryPage.sectionPopcornDesc":
      "Aromatyczny popcorn przygotowywany na żywo.",
    "galleryPage.sectionFountainsDesc":
      "Elegancka fontanna czekoladowa z dodatkami - wykwintna atrakcja dla smakoszy.",
    "galleryPage.sectionEventSetupsDesc":
      "Zobacz jak wyglądają nasze kompleksowe realizacje - od małych przyjęć po duże eventy.",
    "galleryPage.currentCategoryInfo": "{count} zdjęć w tej kategorii",
    "galleryPage.noPhotosInCategory": "Brak zdjęć w tej kategorii",
    "galleryPage.noPhotosInCategoryDescription":
      "Spróbuj wybrać inną kategorię lub sprawdź ponownie później.",
    "galleryPage.statsTitle": "Nasze doświadczenie w liczbach",
    "galleryPage.statEvents": "Zrealizowanych eventów",
    "galleryPage.statKids": "Zadowolonych dzieci",
    "galleryPage.statAttractions": "Rodzajów atrakcji",
    "galleryPage.statRadius": "Promień obsługi",
    "contactPage.heroTitle": "Skontaktuj się z Nami",
    "contactPage.heroDescription":
      "Zorganizujmy razem Twoją niezapomnianą imprezę! Skontaktuj się z nami już dziś i sprawdź dostępność na Twój termin.",
    "contactPage.badgeQuickResponse": "⚡ Szybka odpowiedź",
    "contactPage.badgeFreeConsultation": "💬 Darmowa konsultacja",
    "contactPage.badgeIndividualQuotes": "📋 Indywidualne wyceny",
    "contactPage.quickContactTitle": "Wybierz Najwygodniejszy Sposób Kontaktu",
    "contactPage.quickContactDescription":
      "Jesteśmy dostępni przez cały tydzień. Odpowiadamy szybko na wszystkie zapytania!",
    "contactPage.phoneTitle": "Telefon",
    "contactPage.phoneDescription": "Najszybszy kontakt",
    "contactPage.emailTitle": "Email",
    "contactPage.emailDescription": "Napisz do nas",
    "contactPage.whatsappTitle": "Messenger",
    "contactPage.whatsappDescription": "Szybka wiadomość",
    "contactPage.meetingTitle": "Spotkanie",
    "contactPage.meetingDescription": "Umów się na prezentację",
    "contactPage.meetingDetails": "Po wcześniejszym kontakcie",
    "contactPage.callToActionTitle": "Zadzwoń już teraz!",
    "contactPage.callToActionDescription":
      "Sprawdzimy dostępność terminu i przygotujemy indywidualną wycenę",
    "contactPage.workingHoursTitle": "Godziny Pracy",
    "contactPage.workingHoursNote":
      "Uwaga: W przypadku pilnych spraw jesteśmy dostępni również poza godzinami pracy.",
    "contactPage.workingHoursMonFri": "Poniedziałek - Piątek",
    "contactPage.workingHoursSat": "Sobota",
    "contactPage.workingHoursSun": "Niedziela",
    "contactPage.workingHoursHoliday": "Dni świąteczne",
    "contactPage.workingHoursMonFriTime": "8:00 - 18:00",
    "contactPage.workingHoursSatTime": "9:00 - 18:00",
    "contactPage.workingHoursSunTime": "10:00 - 18:00",
    "contactPage.workingHoursHolidayTime": "Na umowę",
    "contactPage.serviceAreaTitle": "Obszar Obsługi",
    "contactPage.serviceAreaNote":
      "Obsługujemy też inne miasta! Skontaktuj się z nami, aby uzgodnić warunki transportu.",
    "contactPage.serviceAreaMainCities":
      "Główne obszary działania (transport GRATIS):",
    "contactPage.serviceAreaRadom": "Radom",
    "contactPage.serviceAreaWarsaw": "Warszawa",
    "contactPage.serviceAreaLublin": "Lublin",
    "contactPage.serviceAreaFreeTransport100km": "Darmowy transport do 100 km!",
    "contactPage.additionalInfoTitle": "Dodatkowe Informacje",
    "contactPage.infoViewingTitle": "Oględziny sprzętu",
    "contactPage.infoViewingDesc":
      "Możliwość obejrzenia atrakcji przed wynajmem",
    "contactPage.infoFreeQuoteTitle": "Darmowa wycena",
    "contactPage.infoFreeQuoteDesc":
      "Przygotujemy bezpłatną ofertę dostosowaną do Twoich potrzeb",
    "contactPage.infoConsultationsTitle": "Konsultacje",
    "contactPage.infoConsultationsDesc": "Pomożemy w planowaniu całego eventu",
    "contactPage.infoOnlineBookingTitle": "Rezerwacja online",
    "contactPage.infoOnlineBookingDesc":
      "Możliwość rezerwacji przez formularz lub telefon",
    "contactPage.faqTitle": "Najczęściej Zadawane Pytania",
    "contactPage.faqDescription":
      "Odpowiedzi na pytania, które najczęściej otrzymujemy od naszych Klientów",
    "contactPage.faq1Question": "Jak wcześnie należy dokonać rezerwacji?",
    "contactPage.faq1Answer":
      "Zalecamy rezerwację co najmniej 2 tygodnie przed planowanym eventem, szczególnie w sezonie letnim i okresie świątecznym.",
    "contactPage.faq2Question": "Czy ceny zawierają montaż i transport?",
    "contactPage.faq2Answer":
      "Tak, wszystkie nasze ceny zawierają montaż, demontaż oraz transport w promieniu 100 km od Radomia. Za większe odległości pobieramy dodatkową opłatę.",
    "contactPage.faq3Question": "Co jeśli pogoda będzie niesprzyjająca?",
    "contactPage.faq3Answer":
      "Nasze namioty są odporne na warunki atmosferyczne. Dmuchańce można używać przy lekkim deszczu, ale nie podczas burzy ze względów bezpieczeństwa.",
    "contactPage.faq4Question": "Czy atrakcje są ubezpieczone?",
    "contactPage.faq4Answer":
      "Tak, wszystkie nasze atrakcje posiadają pełne ubezpieczenie OC. Dodatkowo regularnie przeprowadzamy przeglądy techniczne sprzętu.",
    "contactPage.faq5Question": "Jak wygląda proces rezerwacji?",
    "contactPage.faq5Answer":
      "Po kontakcie przygotowujemy wycenę, następnie wymagamy wpłaty zadatku 200 zł. Resztę kwoty można uregulować przy odbiorze sprzętu.",
    "aboutUsPage.heroTitle": "O Naszej Firmie",
    "aboutUsPage.heroDescription":
      "Jesteśmy firmą z pasją do tworzenia niezapomnianych chwil. Specializujemy się w wynajmie atrakcji eventowych, które sprawiają, że każda impreza staje się wyjątkowa.",
    "aboutUsPage.badgeFounded": "Radom i okolice 100 km",
    "aboutUsPage.storyTitle": "Nasza Historia",
    "aboutUsPage.storyPara1":
      "SŁODKOLANDIA wita: powstała z prostego przekonania, że każde wydarzenie zasługuje na to, aby być niezapomnianym. Rozpoczęliśmy działalność w 2014 roku z trzema dmuchańcami i wielką pasją do organizacji eventów.",
    "aboutUsPage.storyPara2":
      "Dziś jesteśmy rozpoznawalną marką w Radomiu i okolicach, oferującą kompleksowy wynajem atrakcji eventowych. Nasze doświadczenie obejmuje eventy dla firm, wesela, urodziny dzieci, festyny miejskie i wiele innych okazji.",
    "aboutUsPage.storyPara3":
      "To, co nas wyróżnia, to indywidualne podejście do każdego Klienta oraz nieustanna troska o bezpieczeństwo i jakość naszych usług.",
    "aboutUsPage.missionTitle": "🎯 Nasza Misja",
    "aboutUsPage.missionDescription":
      "Tworzymy niezapomniane momenty radości i zabawy, dostarczając najwyższej jakości atrakcje eventowe z pełną obsługą profesjonalną.",
    "aboutUsPage.visionTitle": "🔮 Nasza Wizja",
    "aboutUsPage.visionDescription":
      "Być pierwszym wyborem w regionie dla osób poszukujących profesjonalnych atrakcji eventowych i kompleksowej obsługi wydarzeń.",
    "aboutUsPage.valuesTitle": "Nasze Wartości",
    "aboutUsPage.valuesDescription":
      "Wartości, które wyznaczają nasz sposób działania i podejście do każdego Klienta",
    "aboutUsPage.valuePassionTitle": "Pasja",
    "aboutUsPage.valuePassionDesc":
      "Każdy event traktujemy jako wyjątkowe wydarzenie. Wkładamy serce w to, co robimy.",
    "aboutUsPage.valueSafetyTitle": "Bezpieczeństwo",
    "aboutUsPage.valueSafetyDesc":
      "Priorytetem jest bezpieczeństwo naszych Gości. Cały sprzęt jest certyfikowany i ubezpieczony.",
    "aboutUsPage.valueProfessionalismTitle": "Profesjonalizm",
    "aboutUsPage.valueProfessionalismDesc":
      "Punktualność, rzetelność i wysoka jakość usług to nasze znaki rozpoznawcze.",
    "aboutUsPage.valueQualityTitle": "Jakość",
    "aboutUsPage.valueQualityDesc":
      "Używamy tylko sprawdzonego sprzętu najwyższej jakości od renomowanych producentów.",
    "aboutUsPage.achievementsTitle": "Nasze Osiągnięcia",
    "aboutUsPage.achievementsDescription":
      "Liczby, które najlepiej opisują nasze doświadczenie i zaangażowanie",
    "aboutUsPage.achievementEvents": "Zrealizowanych eventów",
    "aboutUsPage.achievementExperience": "lat doświadczenia",
    "aboutUsPage.achievementAttractions": "rodzajów atrakcji",
    "aboutUsPage.achievementRadius": "promień obsługi",
    "aboutUsPage.achievementSatisfaction": "zadowolonych Klientów",
    "aboutUsPage.achievementAvailability": "dostępność telefoniczna",
    "aboutUsPage.teamTitle": "Nasz Zespół",
    "aboutUsPage.teamDescription":
      "Grupa pasjonatów, którzy dbają o to, aby każdy event był perfekcyjny",
    "aboutUsPage.teamOwnerName": "Właściciel firmy",
    "aboutUsPage.teamOwnerRole": "Założyciel i kierownik projektów",
    "aboutUsPage.teamOwnerDesc":
      "11 lat doświadczenia w branży eventowej. Pasjonat tworzenia niezapomnianych chwil.",
    "aboutUsPage.teamAssemblyName": "Zespół montażowy",
    "aboutUsPage.teamAssemblyRole": "Specjaliści od montażu",
    "aboutUsPage.teamAssemblyDesc":
      "Doświadczeni technicy zapewniający szybki i bezpieczny montaż wszystkich atrakcji.",
    "aboutUsPage.teamSupportName": "Obsługa Klienta",
    "aboutUsPage.teamSupportRole": "Konsultanci eventowi",
    "aboutUsPage.teamSupportDesc":
      "Pomożemy Ci w wyborze idealnych atrakcji i zaplanowaniu całego eventu.",
    "aboutUsPage.certsTitle": "Certyfikaty i Jakość",
    "aboutUsPage.certsDescription":
      "Bezpieczeństwo i jakość to podstawa naszej działalności. Wszystkie nasze atrakcje są regularnie kontrolowane i posiadają wymagane certyfikaty.",
    "aboutUsPage.certInsurance": "Ubezpieczenie OC",
    "aboutUsPage.certInsuranceDesc":
      "Pełne pokrycie odpowiedzialności cywilnej",
    "aboutUsPage.certEquipment": "Certyfikaty sprzętu",
    "aboutUsPage.certEquipmentDesc":
      "Wszystkie atrakcje posiadają wymagane certyfikaty",
    "aboutUsPage.certReviews": "Przeglądy techniczne",
    "aboutUsPage.certReviewsDesc": "Regularne kontrole bezpieczeństwa sprzętu",
    "aboutUsPage.certTraining": "Szkolenia zespołu",
    "aboutUsPage.certTrainingDesc":
      "Ciągłe podnoszenie kwalifikacji pracowników",
    "aboutUsPage.whyChooseUsTitle": "Dlaczego Klienci Nas Wybierają?",
    "aboutUsPage.whyChooseExperience": "Doświadczenie",
    "aboutUsPage.whyChooseExperienceDesc":
      "11 lat na rynku i setki udanych eventów",
    "aboutUsPage.whyChooseSafety": "Bezpieczeństwo",
    "aboutUsPage.whyChooseSafetyDesc":
      "Pełne ubezpieczenie i certyfikowany sprzęt",
    "aboutUsPage.whyChooseProfessionalism": "Profesjonalizm",
    "aboutUsPage.whyChooseProfessionalismDesc":
      "Punktualna dostawa i profesjonalna obsługa",
    "aboutUsPage.whyChooseIndividual": "Indywidualne podejście",
    "aboutUsPage.whyChooseIndividualDesc":
      "Każdy event traktujemy jako wyjątkowy",
    "offerPage.heroTitle": "Nasza Oferta Atrakcji Eventowych",
    "offerPage.heroDescription":
      "Odkryj pełną gamę profesjonalnych atrakcji i usług eventowych. Od namiotów imprezowych po kompleksową obsługę wydarzeń.",
    "offerPage.badgeLocation": "Radom i okolice (100 km)",
    "offerPage.filterLabel": "Kategorie:",
    "offerPage.allAttractionsCount": "Wszystkie atrakcje ({count})",
    "offerPage.categoryAttractionsCount": "{categoryName} ({count})",
    "offerPage.noAttractionsTitle": "Brak atrakcji w tej kategorii",
    "offerPage.noAttractionsDescription":
      "Wybierz inną kategorię lub skontaktuj się z nami w sprawie indywidualnych rozwiązań.",
    "offerPage.sectionTentsTitle": "🏕️ Namioty Imprezowe",
    "offerPage.sectionTentsDescription":
      "Profesjonalne namioty w różnych rozmiarach, idealne na wesela, urodziny i eventy firmowe. Oferujemy pełny serwis montażu i demontażu z możliwością dodania podłogi i oświetlenia.",
    "offerPage.sectionTablesChairsTitle": "🪑 Stoły, Krzesła i Obrusy",
    "offerPage.sectionTablesChairsDescription":
      "Kompleksowe wyposażenie stołów, krzeseł, obrusów, trawy i oświetlenia na Twoją imprezę.",
    "offerPage.sectionInflatablesTitle": "🏰 Dmuchane Atrakcje",
    "offerPage.sectionInflatablesDescription":
      "Bezpieczne i certyfikowane dmuchańce dla dzieci. Zjeżdżalnie, zamki z profesjonalną obsługą i ubezpieczeniem OC.",
    "offerPage.sectionEquipmentTitle": "🍭 Urządzenia gastronomiczne",
    "offerPage.sectionEquipmentDescription":
      "Maszyny do waty cukrowej, popcornu i elegancka fontanna czekoladowa. Wszystko z profesjonalną obsługą i świeżymi produktami.",
    "offerPage.servicesIncludeTitle": "Co zawierają nasze usługi?",
    "offerPage.serviceTransport": "Transport i montaż",
    "offerPage.serviceTransportDesc": "Pełny serwis dostawy i ustawienia",
    "offerPage.serviceProfessional": "Profesjonalna obsługa",
    "offerPage.serviceProfessionalDesc": "Doświadczony personel podczas eventu",
    "offerPage.serviceInsurance": "Ubezpieczenie OC",
    "offerPage.serviceInsuranceDesc": "Pełne pokrycie ubezpieczeniowe",
    "offerPage.serviceCertified": "Certyfikowany sprzęt",
    "offerPage.serviceCertifiedDesc": "Bezpieczne i sprawne urządzenia",
    "offerPage.serviceFlexible": "Elastyczne terminy",
    "offerPage.serviceFlexibleDesc": "Dostosowane do Twoich potrzeb",
    "offerPage.serviceConsultations": "Konsultacje",
    "offerPage.serviceConsultationsDesc": "Pomoc w planowaniu eventu",
    "offerPage.sectionDescriptionTitle": "Opis Atrakcji",
    "pricingPage.title": "Cennik",
    "modal.pricingIncludes":
      "Cena zawiera transport, montaż i obsługę w promieniu 100 km od Radomia.",
    "modal.featuresTitle": "Główne Cechy",
    "modal.pricingDetails": "Szczegóły Cennika",
    "modal.specificationsTitle": "Specyfikacja Techniczna",
    "modal.galleryTitle": "Galeria Atrakcji",
    "galleryPage.title": "Galeria",
    "modal.ctaTitle": "Zainteresowany/a?",
    "modal.ctaDescription":
      "Skontaktuj się z nami już dziś, aby sprawdzić dostępność i otrzymać indywidualną wycenę.",
    "contact.phoneValue": "+48531890827",
    "modal.freeWithTent":
      "* Przy wynajmie namiotu lub indywidualnej wycenie pakietu",
    "modal.pricingNote.fountain":
      "* Cena nie obejmuje dodatków. Klient może opcjonalnie samodzielnie je zakupić.",
    "seo.homeTitle": "SŁODKOLANDIA wita: - Wynajem Atrakcji Eventowych Radom",
    "seo.homeDescription":
      "Profesjonalny wynajem namiotów imprezowych, dmuchańców, waty cukrowej i popcornu w Radomiu i okolicach. Zorganizuj niezapomnianą imprezę!",
    "seo.offerTitle":
      "Oferta - Wynajem Atrakcji Eventowych | SŁODKOLANDIA wita:",
    "seo.offerDescription":
      "Odkryj pełną ofertę atrakcji eventowych: namioty imprezowe, stoły, krzesła, dmuchańce, wata cukrowa, popcorn, fontanny czekoladowe. Profesjonalny wynajem w Radomiu.",
    "seo.galleryTitle":
      "Galeria Zdjęć - Zobacz Nasze Atrakcje w Akcji | SŁODKOLANDIA wita:",
    "seo.galleryDescription":
      "Zobacz galerię zdjęć z naszych realizacji eventowych. Namioty imprezowe, stoły, krzesła, dmuchańce, wata cukrowa, popcorn i fontanny czekoladowe w akcji.",
    "seo.pricingTitle":
      "Cennik Wynajmu Atrakcji Eventowych | SŁODKOLANDIA wita: Radom",
    "seo.pricingDescription":
      "Sprawdź aktualne ceny wynajmu namiotów imprezowych, stołów, krzeseł, dmuchańców i sprzętu do produkcji waty cukrowej oraz popcornu. Pakiety promocyjne i indywidualne wyceny.",
    "seo.contactTitle":
      "Kontakt - Wynajem Atrakcji Eventowych Radom | SŁODKOLANDIA wita:",
    "seo.contactDescription":
      "Skontaktuj się z nami już dziś! Telefon: +48 531 890 827. Profesjonalny wynajem atrakcji eventowych w Radomiu i okolicach.",
    "seo.aboutUsTitle":
      "O Nas - SŁODKOLANDIA wita: | Profesjonalny Wynajem Atrakcji Eventowych Radom",
    "seo.aboutUsDescription":
      "Poznaj naszą historię, wartości i doświadczenie. SŁODKOLANDIA wita: to pasja do tworzenia niezapomnianych eventów w Radomiu i okolicach.",
    "seo.termsTitle": "Regulamin - SŁODKOLANDIA wita:",
    "seo.termsDescription":
      "Zapoznaj się z regulaminem świadczenia usług przez SŁODKOLANDIA wita:.",
    "seo.privacyPolicyTitle": "Polityka Prywatności - SŁODKOLANDIA wita:",
    "seo.privacyPolicyDescription":
      "Dowiedz się, jak SŁODKOLANDIA wita: chroni Twoje dane osobowe.",
    "termsPage.title": "Regulamin Świadczenia Usług",
    "termsPage.lastUpdated": "Ostatnia aktualizacja: 01 czerwca 2025",
    "termsPage.introduction.title": "1. Wstęp",
    "termsPage.introduction.content":
      "Niniejszy regulamin określa zasady świadczenia usług wynajmu atrakcji eventowych przez firmę SŁODKOLANDIA wita: z siedzibą w Radomiu, zwaną dalej Usługodawcą.",
    "termsPage.services.title": "2. Zakres Usług",
    "termsPage.services.content":
      "Usługodawca oferuje wynajem namiotów imprezowych, stołów, krzeseł, obrusów, zjeżdżalni i zamków dmuchanych, urządzeń do waty cukrowej i popcornu oraz fontanny czekoladowej.",
    "termsPage.booking.title": "3. Rezerwacje i Płatności",
    "termsPage.booking.content":
      "Rezerwacja terminu następuje po podpisaniu umowy oraz wpłacie zadatku w wysokości 200 zł. Pozostała kwota płatna jest zgodnie z ustaleniami w umowie.",
    "termsPage.cancellation.title": "4. Anulowanie Rezerwacji",
    "termsPage.cancellation.content":
      "Klient ma prawo do bezkosztowego anulowania rezerwacji na minimum 7 dni przed planowanym terminem eventu. W przypadku anulowania w terminie krótszym, zadatek nie podlega zwrotowi.",
    "termsPage.responsibilities.title": "5. Odpowiedzialność",
    "termsPage.responsibilities.client":
      "Klient zobowiązany jest do zapewnienia odpowiedniego miejsca do montażu atrakcji oraz dostępu do źródła prądu (230V), jeśli jest to wymagane. Klient odpowiada za szkody powstałe z jego winy.",
    "termsPage.responsibilities.provider":
      "Usługodawca zapewnia sprawny i bezpieczny sprzęt oraz jego montaż i demontaż. Usługodawca posiada ubezpieczenie OC.",
    "termsPage.finalProvisions.title": "6. Postanowienia Końcowe",
    "termsPage.finalProvisions.content":
      "W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy Kodeksu Cywilnego. Wszelkie spory będą rozstrzygane polubownie, a w przypadku braku porozumienia przez sąd właściwy dla siedziby Usługodawcy.",
    "privacyPolicyPage.title": "Polityka Prywatności",
    "privacyPolicyPage.lastUpdated": "Ostatnia aktualizacja: 01 czerwca 2025",
    "privacyPolicyPage.introduction.title": "1. Wprowadzenie",
    "privacyPolicyPage.introduction.content":
      "Niniejsza polityka prywatności opisuje, w jaki sposób SŁODKOLANDIA wita: (zwana dalej Administratorem) gromadzi, wykorzystuje i chroni dane osobowe Użytkowników.",
    "privacyPolicyPage.dataAdmin.title": "2. Administrator Danych",
    "privacyPolicyPage.dataAdmin.content":
      "Administratorem Twoich danych osobowych jest firma SŁODKOLANDIA wita: z siedzibą w Radomiu. Kontakt: mariuszek1989poczta@wp.pl, tel. +48 531 890 827.",
    "privacyPolicyPage.dataCollection.title": "3. Jakie dane zbieramy?",
    "privacyPolicyPage.dataCollection.content":
      "Zbieramy dane podane dobrowolnie podczas kontaktu (formularz, email, telefon), takie jak imię i nazwisko, adres email, numer telefonu, informacje dotyczące eventu.",
    "privacyPolicyPage.dataUsage.title": "4. W jakim celu wykorzystujemy dane?",
    "privacyPolicyPage.dataUsage.content":
      "Twoje dane wykorzystujemy w celu odpowiedzi na zapytania, przygotowania oferty, realizacji umowy wynajmu oraz w celach marketingowych (za Twoją zgodą).",
    "privacyPolicyPage.dataSharing.title": "5. Udostępnianie danych",
    "privacyPolicyPage.dataSharing.content":
      "Nie udostępniamy Twoich danych osobowych podmiotom trzecim bez Twojej wyraźnej zgody, chyba że wymagają tego przepisy prawa.",
    "privacyPolicyPage.cookies.title": "6. Pliki Cookies",
    "privacyPolicyPage.cookies.content":
      "Nasza strona internetowa może używać plików cookies w celu poprawy jakości świadczonych usług. Możesz zarządzać ustawieniami cookies w swojej przeglądarce.",
    "privacyPolicyPage.userRights.title": "7. Twoje prawa",
    "privacyPolicyPage.userRights.content":
      "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, a także prawo do wniesienia sprzeciwu oraz przenoszenia danych.",
    "privacyPolicyPage.changes.title": "8. Zmiany w polityce prywatności",
    "privacyPolicyPage.changes.content":
      "Zastrzegamy sobie prawo do wprowadzania zmian w polityce prywatności. Aktualna wersja będzie zawsze dostępna na naszej stronie internetowej.",
    "attractionsData.namioty-imprezowe.name": "Namioty Imprezowe",
    "attractionsData.namioty-imprezowe.shortDescription":
      "Profesjonalne namioty imprezowe w różnych rozmiarach. Idealne na wesela, urodziny i eventy firmowe.",
    "attractionsData.namioty-imprezowe.description":
      "Profesjonalne namioty imprezowe w różnych rozmiarach, idealne na wesela, urodziny, eventy firmowe i inne okazje. Nasze namioty są wykonane z wysokiej jakości materiałów, odpornych na warunki atmosferyczne. Zapewniamy pełny serwis montażu i demontażu.",
    "attractionsData.namioty-imprezowe.materialValue":
      "PVC 650 g/m² - trwały, wodoodporny, ognioodporny, odporny na UV i rozdarcia",
    "attractionsData.namioty-imprezowe.option1.description": "Namiot 6x6m",
    "attractionsData.namioty-imprezowe.option1.capacity": "do 30 osób",
    "attractionsData.namioty-imprezowe.option2.description": "Namiot 6x10m",
    "attractionsData.namioty-imprezowe.option2.capacity": "do 60 osób",
    "specification.label.availableSizes": "Dostępne rozmiary",
    "attractionsData.namioty-imprezowe.availableSizesValue": "6x6m, 6x10m",
    "attractionsData.stoly-krzesla-obrusy.name": "Stoły, Krzesła i Obrusy",
    "attractionsData.stoly-krzesla-obrusy.shortDescription":
      "Kompleksowe wyposażenie stołów, krzeseł, obrusów, trawy i oświetlenia na Twoją imprezę.",
    "attractionsData.stoly-krzesla-obrusy.description":
      "Oferujemy wynajem solidnych stołów bankietowych, wygodnych krzeseł oraz eleganckich obrusów, idealnych do każdego rodzaju namiotu i okazji. Dodatkowo, zapewniamy dekoracyjną trawę oraz oświetlenie nocne, aby stworzyć niepowtarzalny klimat.",
    "attractionsData.dmuchane-atrakcje.name": "Dmuchane Atrakcje",
    "attractionsData.dmuchane-atrakcje.shortDescription":
      "Zjeżdżalnie, zamki dmuchane. Gwarantowana radość dla dzieci w każdym wieku!",
    "attractionsData.dmuchane-atrakcje.description":
      "Kolorowe zjeżdżalnie, zamki dmuchane dla dzieci. Nasze atrakcje są bezpieczne, regularnie serwisowane i posiadają wszystkie wymagane certyfikaty. Gwarantujemy radość i bezpieczną zabawę dla dzieci w każdym wieku.",
    "attractionsData.wata-cukrowa.name": "Wata Cukrowa",
    "attractionsData.wata-cukrowa.shortDescription":
      "Profesjonalne maszyny do waty cukrowej. Słodka atrakcja dla Gości!",
    "attractionsData.wata-cukrowa.description":
      "Profesjonalne maszyny do waty cukrowej z kolorowymi smakami i aromatami. Nasza wata cukrowa to nie tylko słodka przekąska, ale także atrakcja wizualna, która zachwyci Gości w każdym wieku. Oferujemy różne smaki i kolory.",
    "attractionsData.popcorn.name": "Popcorn",
    "attractionsData.popcorn.shortDescription":
      "Maszyny do popcornu. Świeży, aromatyczny popcorn na Twoim evencie.",
    "attractionsData.popcorn.description":
      "Maszyny do popcornu, które dodają wyjątkowego charakteru każdemu eventowi. Świeży, aromatyczny popcorn przygotowywany na żywo podczas imprezy. Dostępne różne smaki - słony, słodki, karmelowy.",
    "attractionsData.fontanna-czekoladowa.name": "Fontanna Czekoladowa",
    "attractionsData.fontanna-czekoladowa.shortDescription":
      "Elegancka fontanna czekoladowa. Wykwintna atrakcja dla smakoszy.",
    "attractionsData.fontanna-czekoladowa.description":
      "Elegancka fontanna czekoladowa z dodatkami. Wykwintna atrakcja dla prawdziwych smakoszy.",
    "attractionsData.kompleksowa-obsluga.name": "Kompleksowa Obsługa Eventów",
    "attractionsData.kompleksowa-obsluga.shortDescription":
      "Pełna organizacja eventów z naszym doświadczonym zespołem.",
    "attractionsData.kompleksowa-obsluga.description":
      "Pełna organizacja eventów z naszym doświadczonym zespołem. Od planowania po realizację.",
    "feature.variousSizes": "Różne rozmiary dostępne",
    "feature.weatherResistant": "Odporne na warunki atmosferyczne",
    "feature.professionalSetup": "Profesjonalny montaż i demontaż",
    "feature.optionalFloor": "Możliwość dodania podłogi",
    "feature.ledLighting": "Oświetlenie LED",
    "feature.weddingDecorations": "Dekoracje ślubne i eventowe",
    "feature.tablesFor6": "Stoły dla 6-8 osób",
    "feature.comfortableChairs": "Wygodne krzesła bankietowe",
    "feature.elegantTablecloths": "Eleganckie obrusy",
    "feature.decorativeGrass": "Sztuczna trawa dekoracyjna",
    "feature.nightLighting": "Oświetlenie nocne (girlandy świetlne)",
    "feature.variousConfigurations": "Możliwość różnych konfiguracji",
    "feature.certifiedSafe": "Certyfikowane i bezpieczne",
    "feature.variousThemes": "Różne motywy i rozmiary",
    "feature.eventSupport": "Obsługa podczas eventu",
    "feature.liabilityInsurance": "Ubezpieczenie OC",
    "feature.generatorIncluded": "Agregat prądotwórczy w zestawie",
    "feature.protectiveMats": "Maty ochronne",
    "feature.variousFlavorsColors": "Wata cukrowa w kolorze białym",
    "feature.professionalService": "Profesjonalna obsługa",
    "feature.hygienicPackaging": "Ekologiczne, jednorazowe patyczki drewniane",
    "feature.visualAttraction": "Atrakcja wizualna",
    "feature.fastProduction": "Szybka produkcja",
    "feature.ecoSugars": "Ekologiczne cukry",
    "feature.popcornMachines": "Maszyny do popcornu",
    "feature.freshPopcornLive": "Świeży popcorn na żywo",
    "feature.variousFlavors": "Różne smaki dostępne",
    "feature.attractivePackaging": "Atrakcyjne opakowania",
    "feature.hygieneQuality": "Higiena i jakość",
    "feature.variousChocolateTypes": "Różne rodzaje czekolady",
    "feature.freshFruitIncluded": "Świeże owoce w zestawie",
    "feature.elegantPresentation": "Elegancka prezentacja",
    "feature.hygieneSafety": "Higiena i bezpieczeństwo",
    "feature.toppings": "Dodatki do maczania",
    "feature.consultationPlanning": "Konsultacja i planowanie",
    "feature.spaceDesign": "Projekt aranżacji przestrzeni",
    "feature.deliveryCoordination": "Koordynacja dostaw",
    "feature.comprehensiveInsurance": "Ubezpieczenie kompleksowe",
    "specification.label.sizes": "Rozmiary",
    "specification.label.material": "Materiał",
    "specification.label.height": "Wysokość",
    "specification.label.assemblyTime": "Montaż",
    "specification.label.capacity": "Pojemność",
    "specification.label.tableRentalItem": "Wynajem stołu (180x75cm)",
    "specification.value.tableRentalDesc": "Solidny stół bankietowy.",
    "specification.value.tableRentalPrice": "od 25 zł/szt.",
    "specification.label.chairRentalItem": "Wynajem krzesła",
    "specification.value.chairRentalDesc": "Wygodne krzesło bankietowe.",
    "specification.value.chairRentalPrice": "od 10 zł/szt.",
    "specification.label.tableclothRentalItem": "Wynajem obrusa",
    "specification.value.tableclothRentalDesc": "Elegancki biały obrus.",
    "specification.value.tableclothRentalPrice": "od 20 zł/szt.",
    "specification.label.grassRentalItem": "Trawa dekoracyjna (rolka)",
    "specification.value.grassRentalDesc": "Dekoracyjna sztuczna trawa.",
    "specification.value.grassRentalFreeItem": "Gratis*",
    "specification.label.lightingRentalItem": "Oświetlenie nocne (girlandy)",
    "specification.value.lightingRentalDesc": "Girlandy świetlne.",
    "specification.value.lightingRentalFreeItem": "Gratis*",
    "specification.label.age": "Wiek dzieci",
    "specification.label.dimensions": "Wymiary",
    "specification.label.power": "Zasilanie",
    "specification.label.flavors": "Smaki",
    "specification.label.colors": "Kolory",
    "specification.label.efficiency": "Wydajność",
    "specification.label.operator": "Obsługa",
    "specification.label.machineType": "Typ maszyny",
    "specification.label.packaging": "Opakowania",
    "specification.label.chocolateTypes": "Rodzaje czekolady",
    "specification.label.fountainHeight": "Wysokość fontanny",
    "specification.label.chocolateCapacity": "Pojemność",
    "specification.label.toppings": "Dodatki",
    "specification.label.waiter": "Kelner",
    "specification.label.experience": "Doświadczenie",
    "specification.label.team": "Zespół",
    "specification.label.area": "Obszar",
    "specification.label.eventTypes": "Rodzaje eventów",
    "specification.label.realizationTime": "Czas realizacji",
    "specification.value.assemblyTime24": "2-4 godziny",
    "specification.value.capacity815children": "5 dzieci jednocześnie",
    "specification.value.flavorsCottonCandy":
      "Truskawka, wanilia, malina, jabłko",
    "specification.value.colorsCottonCandy":
      "Różowy, niebieski, żółty, zielony",
    "specification.value.efficiency100150Portions": "100-150 porcji/godzinę",
    "specification.value.operatorIncluded": "Obsługa operatora",
    "specification.value.flavorsPopcorn": "Słony, słodki, karmelowy, serowy",
    "specification.value.efficiency200Portions": "200 porcji/godzinę",
    "specification.value.machineTypePopcorn": "Do popcornu",
    "specification.value.packagingPaper": "Papierowe torby i pudełka",
    "specification.value.chocolateTypesFull": "Mleczna, gorzka, biała",
    "specification.value.fountainHeightCm": "60-80 cm",
    "specification.value.chocolateCapacityKg": "3-5 kg czekolady",
    "specification.value.toppingsFull": "Owoce, ciasteczka, marshmallows",
    "specification.value.waiterIncluded":
      "Profesjonalna obsługa fontanny czekoladowej",
    "specification.value.experienceYears": "Ponad 11 lat",
    "specification.value.teamProfessional": "Profesjonalni organizatorzy",
    "specification.value.areaKm": "Radom i okolice 100 km",
    "specification.value.eventTypesFull": "Wesela, urodziny, eventy firmowe",
    "specification.value.realizationTimeHours": "2-8 godzin",
    "reviewModal.title": 'Dodaj opinię o "{companyName}"!',
    "reviewModal.description":
      "Zeskanuj kod QR, aby dodać opinię w Google Maps.",
    "reviewModal.qrAlt": "Kod QR - Dodaj opinię",
    "reviewModal.qrLabelLine1": "Kod QR - Dodaj opinię",
    "reviewModal.qrLabelLine2": "lub kliknij w link:",
    "reviewModal.googleButton": "Dodaj opinię w Google",
  },
  en: {
    "currencyUnit.pln": "PLN",
    "common.close": "Close",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.offer": "Offer",
    "nav.photo": "Photos",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.terms": "Terms of Service",
    "nav.privacyPolicy": "Privacy Policy",
    "nav.allAttractions": "All Attractions",
    "nav.tents": "Party Tents",
    "nav.tablesChairs": "Tables & Chairs",
    "nav.inflatables": "Inflatables",
    "nav.popcorn": "Popcorn",
    "nav.cottonCandy": "Cotton Candy",
    "nav.chocolateFountain": "Chocolate Fountain",
    "nav.allPhotos": "All Photos",
    "nav.photoTents": "Tents",
    "nav.photoTablesChairs": "Tables & Chairs",
    "nav.photoInflatables": "Inflatables",
    "nav.photoCottonCandy": "Cotton Candy",
    "nav.photoPopcorn": "Popcorn",
    "nav.photoFountains": "Chocolate Fountains",
    "nav.review": "Add Review",
    "hero.title": "SŁODKOLANDIA wita:",
    "hero.subtitle": "Unforgettable Attractions for Your Event!",
    "hero.description":
      "We guarantee great fun and professional service at every event!",
    "hero.seeOffer": "See our offer",
    "hero.askDate": "Ask about availability",
    "services.title": "Our Main Attractions",
    "services.description":
      "We offer comprehensive rental of event equipment and attractions that will make your party unforgettable",
    "services.seeAll": "See all attractions",
    "category.namioty": "Tents",
    "category.wyposazenie": "Equipment",
    "category.dmuchance": "Inflatables",
    "category.cukiernicze": "Yummy Yummy",
    "category.uslugi": "Services",
    "whyUs.title": "Why SŁODKOLANDIA wita:?",
    "whyUs.description":
      "We combine passion for creating unforgettable moments with a professional approach to every event",
    "whyUs.experience": "Experience",
    "whyUs.experienceDesc":
      "Years of experience in organizing events of various scales",
    "whyUs.safety": "Safety",
    "whyUs.safetyDesc":
      "Certified equipment and full insurance for every attraction",
    "whyUs.punctuality": "Punctuality",
    "whyUs.punctualityDesc":
      "Always on time - we meet delivery and assembly deadlines",
    "whyUs.individual": "Individual Approach",
    "whyUs.individualDesc": "Every event is unique - we adapt to your needs",
    "cta.mainTitle": "Let's organize your dream event together!",
    "cta.mainDescription":
      "Contact us today and check availability for your date. We guarantee professional service and unforgettable experiences!",
    "cta.contactForm": "Contact Form",
    "cta.secondaryTitle": "Ready for an unforgettable party?",
    "cta.secondaryDescription": "Contact us today and book your date!",
    "cta.callNow": "Call now",
    "cta.askForDate": "Ask for date",
    "home.stats.eventsOrganized": "Events organized",
    "home.stats.happyClientsMonthly": "Satisfied clients monthly",
    "home.stats.yearsExperience": "years of experience",
    "home.stats.serviceRadius": "service radius",
    "footer.companyName": "SŁODKOLANDIA wita:",
    "footer.companyDescription":
      "Professional rental of event attractions in Radom and surroundings. We create unforgettable moments for your guests!",
    "footer.quickLinks": "Quick Links",
    "footer.servicesTitle": "Our Services",
    "footer.serviceTents": "Party Tents",
    "footer.serviceTables": "Tables & Chairs",
    "footer.serviceInflatables": "Inflatables",
    "footer.serviceCottonCandy": "Cotton Candy",
    "footer.servicePopcorn": "Popcorn Machines",
    "footer.serviceFountains": "Chocolate Fountains",
    "footer.serviceComprehensive": "Comprehensive Service",
    "footer.seeAlsoTitle": "See Also",
    "footer.clientReviews": "Client Reviews",
    "footer.contactTitle": "Contact",
    "footer.address": "Radom and surroundings",
    "footer.addressDetail": "(100km radius)",
    "footer.copyright": "Radom, 2014 - {year} SŁODKOLANDIA wita:.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "reviews.pageTitle": "Our Client Reviews",
    "reviews.pageSubtitle":
      "We are proud of the trust our clients place in us. See what they say about working with us.",
    "reviews.showMore": "Show more reviews",
    "reviews.seeAllGoogle": "See all reviews on Google",
    "reviews.sourceGoogle": "Review from Google",
    "reviews.kromer.author": "Kasia Kromer",
    "reviews.kromer.details": "3 reviews",
    "reviews.kromer.text":
      "We highly recommend! Professional approach to the customer, fulfillment of the contract. A big plus is the child's accident insurance included in the price. I recommend!",
    "reviews.domosfera.author": "DOMOSFERA P.W.",
    "reviews.domosfera.details": "7 reviews",
    "reviews.domosfera.text":
      "I recommend with all my heart, service at the highest level.",
    "reviews.nowywy.author": "Mateusz Nowywy",
    "reviews.nowywy.details": "5 reviews",
    "reviews.nowywy.text":
      "I recommend this company to others because the equipment, such as the bouncy castles, smells fresh and is new. The staff is very nice and helpful with everything related to fun and entertainment for children. Our children at the party were very delighted.",
    "reviews.holmes.author": "Mr. Holmes",
    "reviews.holmes.details": "Local Guide",
    "reviews.holmes.text":
      "The company Słodkolandia wita: treats its contractual obligations very reliably. It is flexible in price negotiations and offers very good quality equipment.",
    "reviews.pawel.author": "Paweł -",
    "reviews.pawel.details": "7 reviews",
    "reviews.pawel.text":
      "Professional company, great expertise, enthusiasm and commitment, affordable prices, fun inflatables. I recommend!",
    "reviews.zak.author": "Zosia Żak",
    "reviews.zak.details": "2 reviews",
    "reviews.zak.text": "I highly recommend this company 10/10 🙂👍",
    "reviews.prondek.author": "jan prondek",
    "reviews.prondek.details": "13 reviews",
    "reviews.prondek.text":
      "I was at a party organized by you and I must say it was great, greetings",
    "reviews.chmielinski.author": "Adam Chmieliński",
    "reviews.chmielinski.details": "32 reviews",
    "reviews.chmielinski.text": "I recommend the company :)",
    "reviews.viranos.author": "viranos s",
    "reviews.viranos.details": "3 reviews",
    "reviews.viranos.text": "I recommend!",
    "reviews.dawidt.author": "Dawid T",
    "reviews.dawidt.details": "Local Guide",
    "reviews.dawidt.text": "Parties for children.",
    "reviews.nawara.author": "Martyna Nawara",
    "reviews.nawara.details": "no data",
    "reviews.nawara.text": "5/5",
    "reviews.nazwiskowski.author": "Imienin Nazwiskowski",
    "reviews.nazwiskowski.details": "Local Guide",
    "reviews.nazwiskowski.text": "5/5",
    "attractionCard.details": "Details",
    "attractionCard.priceFrom": "from ",
    "pricing.perPeriod.dzień": "day",
    "pricing.perPeriod.impreza": "party",
    "pricing.perPeriod.event": "event",
    "pricing.perPeriod.sztuka/dzień": "pc./day",
    "pricing.perPeriod.od": "from",
    "pricing.perPeriod.gratis": "Free*",
    "pricing.perPeriod.hour": "hour",
    "cookieConsent.message":
      "This site uses cookies to ensure the best quality of service. By continuing to browse, you agree to their use.",
    "cookieConsent.accept": "Accept",
    "cookieConsent.reject": "Reject",
    "inquiryForm.title": "Inquiry Form",
    "inquiryForm.nameLabel": "Name and surname *",
    "inquiryForm.namePlaceholder": "Your name and surname",
    "inquiryForm.nameError":
      "Name and surname must be at least 2 characters long",
    "inquiryForm.emailLabel": "Email *",
    "inquiryForm.emailPlaceholder": "your@email.com",
    "inquiryForm.emailError": "Invalid email address",
    "inquiryForm.phoneLabel": "Phone",
    "inquiryForm.phonePlaceholder": "+48 123 456 789",
    "inquiryForm.eventDateLabel": "Event date",
    "inquiryForm.attractionsLabel": "Interesting attractions",
    "inquiryForm.messageLabel": "Message *",
    "inquiryForm.messagePlaceholder":
      "Describe your event, number of guests, additional requirements...",
    "inquiryForm.messageError": "Message must be at least 10 characters long",
    "inquiryForm.submitButton": "Send Inquiry",
    "inquiryForm.submittingButton": "Sending...",
    "inquiryForm.successTitle": "Inquiry sent!",
    "inquiryForm.successDescription":
      "Thank you for your contact. We will reply within 24 hours.",
    "inquiryForm.errorTitle": "Sending error",
    "inquiryForm.errorDescription":
      "Sorry, there was a problem. Please try again or call us.",
    "inquiryForm.attractionOptionTents": "Party Tents",
    "inquiryForm.attractionOptionTables": "Tables",
    "inquiryForm.attractionOptionChairs": "Chairs",
    "inquiryForm.attractionOptionLinens": "Linens",
    "inquiryForm.attractionOptionInflatables": "Inflatable Attractions",
    "inquiryForm.attractionOptionCottonCandy": "Cotton Candy",
    "inquiryForm.attractionOptionPopcorn": "Popcorn Machines",
    "inquiryForm.attractionOptionFountains": "Chocolate Fountains",
    "inquiryForm.attractionOptionComprehensive": "Comprehensive Service",
    "pricingPage.heroTitle": "Our Service Pricing",
    "pricingPage.heroDescription":
      "We offer competitive prices and individual quotes tailored to your budget and needs. All prices include transport within a 100km radius of Radom.",
    "pricingPage.badgeTransportFree15km": "🚚 Free transport up to 100 km",
    "pricingPage.badgeSetupIncluded": "🛠️ Setup and dismantling included",
    "pricingPage.badgeInsuranceOC": "🛡️ Liability insurance",
    "pricingPage.packagesTitle": "Promotional Packages",
    "pricingPage.packagesDescription":
      "Save by renting attraction packages! The more you rent, the more you save.",
    "pricingPage.popularPackage": "Most Popular",
    "pricingPage.packageNormally": "Normally",
    "pricingPage.packageSave": "You save {amount} PLN",
    "pricingPage.packageIncludes": "Included in package:",
    "pricingPage.packageAsk": "Ask about package",
    "pricingPage.individualTitle": "Individual Pricing",
    "pricingPage.individualDescription":
      "Rental prices for individual attractions.",
    "pricingPage.categoryAll": "All",
    "pricingPage.categoryGastro": "Sweets & Equipment",
    "pricingPage.itemizedPricingLabel": "Itemized Pricing",
    "pricingPage.additionalServicesTitle": "Additional Services",
    "pricingPage.discountsTitle": "Discounts and Promotions",
    "pricingPage.discountPackages": "Event Packages",
    "pricingPage.discountPackagesDesc":
      "Rent 3 or more attractions and get a 10% discount!",
    "pricingPage.discountLongTerm": "Long-term Rental",
    "pricingPage.discountLongTermDesc":
      "Events longer than 2 days - special prices!",
    "pricingPage.discountLoyal": "Loyal Customers",
    "pricingPage.discountLoyalDesc": "Loyalty program for regular customers",
    "pricingPage.askForDiscount": "Ask for Discount",
    "pricingPage.importantInfoTitle": "Important Information",
    "pricingPage.rentalConditionsTitle": "📋 Rental Conditions",
    "pricingPage.rentalCondition1": "• A 200 PLN deposit is required to book",
    "pricingPage.rentalCondition2":
      "• Minimum rental period - 1 day (24 hours) for tents, other attractions for the duration of the party",
    "pricingPage.rentalCondition3":
      "• Cancellation possible up to 7 days before the event",
    "pricingPage.rentalCondition4": "• Gross prices",
    "pricingPage.rentalCondition5":
      "• For events on public holidays - 20% surcharge",
    "pricingPage.transportSetupTitle": "🚚 Transport and Setup",
    "pricingPage.transportSetup1": "• Free transport up to 100 km from Radom",
    "pricingPage.transportSetup2":
      "• Setup and dismantling during standard hours (8:00 AM - 6:00 PM)",
    "pricingPage.transportSetup3":
      "• Setup time: 2-4 hours depending on the attraction",
    "pricingPage.transportSetup4": "• Access to 230V power supply required",
    "pricingPage.transportSetup5": "• For inflatables - flat grassy surface",
    "pricingPage.packageChildName": "Kids Package",
    "pricingPage.packageChildDesc": "Perfect for a child's birthday",
    "pricingPage.packageChildItem1": "Bouncy castle",
    "pricingPage.packageChildItem2": "Cotton candy",
    "pricingPage.packageChildItem3": "Popcorn",
    "pricingPage.packageFamilyName": "Family Package",
    "pricingPage.packageFamilyDesc": "For larger family gatherings",
    "pricingPage.packageFamilyItem1": "Tent 6x12m",
    "pricingPage.packageFamilyItem2": "Inflatable slide",
    "pricingPage.packageFamilyItem3": "Cotton candy",
    "pricingPage.packageFamilyItem4": "Chocolate fountain",
    "pricingPage.packageEventName": "Event Package",
    "pricingPage.packageEventDesc": "Comprehensive service for larger events",
    "pricingPage.packageEventItem1": "Tent 10x20m",
    "pricingPage.packageEventItem2": "2x Inflatables",
    "pricingPage.packageEventItem3": "Cotton candy",
    "pricingPage.packageEventItem4": "Popcorn",
    "pricingPage.packageEventItem5": "Chocolate fountain",
    "pricingPage.packageEventItem6": "Service staff",
    "pricingPage.additionalServiceSnacksInfo":
      "• Price for snacks 3.5 - 5 PLN/100 g per person (price depends on the number of guests, type of fruit ordered, and season)",
    "pricingPage.additionalServiceExtraChocolate":
      "• Additional chocolate 2.5 kg (150 PLN)",
    "pricingPage.additionalServiceTablecloth": "• Tablecloth (50 PLN)",
    "pricingPage.additionalServiceTransportInfo":
      "Delivery within the city is free, outside the city it is charged both ways at 1.5 PLN/km",
    "pricingPage.unitPriceDefault": "PLN",
    "galleryPage.seoTitle":
      "Photo Gallery - See Our Attractions in Action | SŁODKOLANDIA wita:",
    "galleryPage.seoDescription":
      "View the photo gallery from our event productions. Party tents, inflatables, cotton candy, popcorn, and chocolate fountains in action.",
    "galleryPage.heroTitle": "See Our Attractions in Action!",
    "galleryPage.heroDescription":
      "Photo gallery from our event productions. Discover how our attractions look at real parties and events in Radom and the surrounding area.",
    "galleryPage.badgeEventsDone": "Over 500 events completed",
    "galleryPage.filterLabel": "Categories",
    "galleryPage.categoryAll": "All",
    "galleryPage.categoryTents": "Party Tents",
    "galleryPage.categoryTablesChairs": "Tables & Chairs",
    "galleryPage.categoryInflatables": "Inflatable Attractions",
    "galleryPage.categoryCottonCandy": "Cotton Candy",
    "galleryPage.categoryPopcorn": "Popcorn",
    "galleryPage.categoryFountains": "Chocolate Fountains",
    "galleryPage.categoryEventSetups": "Event Setups",
    "galleryPage.sectionTentsDesc":
      "Professional tents in various configurations - from intimate parties to large corporate events.",
    "galleryPage.sectionTablesChairsDescription":
      "Comprehensive equipment of tables, chairs, tablecloths, and more.",
    "galleryPage.sectionInflatablesDesc":
      "Safe fun for children - slides, bouncy castles.",
    "galleryPage.sectionCottonCandyDesc":
      "Colorful cotton candy in various flavors - a sweet attraction for guests of all ages.",
    "galleryPage.sectionPopcornDesc": "Aromatic popcorn prepared live.",
    "galleryPage.sectionFountainsDesc":
      "Elegant chocolate fountain with toppings - an exquisite attraction for connoisseurs.",
    "galleryPage.sectionEventSetupsDesc":
      "See what our comprehensive setups look like - from small parties to large events.",
    "galleryPage.currentCategoryInfo": "{count} photos in this category",
    "galleryPage.noPhotosInCategory": "No photos in this category",
    "galleryPage.noPhotosInCategoryDescription":
      "Try selecting another category or check back later.",
    "galleryPage.statsTitle": "Our experience in numbers",
    "galleryPage.statEvents": "Events completed",
    "galleryPage.statKids": "Happy children",
    "galleryPage.statAttractions": "Types of attractions",
    "galleryPage.statRadius": "Service radius",
    "contactPage.heroTitle": "Contact Us",
    "contactPage.heroDescription":
      "Let's organize your unforgettable party together! Contact us today and check availability for your date.",
    "contactPage.badgeQuickResponse": "⚡ Quick response",
    "contactPage.badgeFreeConsultation": "💬 Free consultation",
    "contactPage.badgeIndividualQuotes": "📋 Individual quotes",
    "contactPage.quickContactTitle":
      "Choose the Most Convenient Way to Contact Us",
    "contactPage.quickContactDescription":
      "We are available all week. We respond quickly to all inquiries!",
    "contactPage.phoneTitle": "Phone",
    "contactPage.phoneDescription": "Fastest contact",
    "contactPage.emailTitle": "Email",
    "contactPage.emailDescription": "Write to us",
    "contactPage.whatsappTitle": "Messenger",
    "contactPage.whatsappDescription": "Quick message",
    "contactPage.meetingTitle": "Meeting",
    "contactPage.meetingDescription": "Arrange a presentation",
    "contactPage.meetingDetails": "By prior contact",
    "contactPage.callToActionTitle": "Call us now!",
    "contactPage.callToActionDescription":
      "We will check date availability and prepare an individual quote",
    "contactPage.workingHoursTitle": "Working Hours",
    "contactPage.workingHoursNote":
      "Note: For urgent matters, we are also available outside working hours.",
    "contactPage.workingHoursMonFri": "Monday - Friday",
    "contactPage.workingHoursSat": "Saturday",
    "contactPage.workingHoursSun": "Sunday",
    "contactPage.workingHoursHoliday": "Public holidays",
    "contactPage.workingHoursMonFriTime": "8:00 AM - 6:00 PM",
    "contactPage.workingHoursSatTime": "9:00 AM - 6:00 PM",
    "contactPage.workingHoursSunTime": "10:00 AM - 6:00 PM",
    "contactPage.workingHoursHolidayTime": "By appointment",
    "contactPage.serviceAreaTitle": "Service Area",
    "contactPage.serviceAreaNote":
      "We also serve other cities! Contact us to arrange transport conditions.",
    "contactPage.serviceAreaMainCities":
      "Main areas of operation (FREE transport):",
    "contactPage.serviceAreaRadom": "Radom",
    "contactPage.serviceAreaWarsaw": "Warsaw",
    "contactPage.serviceAreaLublin": "Lublin",
    "contactPage.serviceAreaFreeTransport100km": "Free transport up to 100 km!",
    "contactPage.additionalInfoTitle": "Additional Information",
    "contactPage.infoViewingTitle": "Equipment viewing",
    "contactPage.infoViewingDesc":
      "Possibility to view attractions before renting",
    "contactPage.infoFreeQuoteTitle": "Free quote",
    "contactPage.infoFreeQuoteDesc":
      "We will prepare a free offer tailored to your needs",
    "contactPage.infoConsultationsTitle": "Consultations",
    "contactPage.infoConsultationsDesc":
      "We will help in planning the entire event",
    "contactPage.infoOnlineBookingTitle": "Online booking",
    "contactPage.infoOnlineBookingDesc":
      "Possibility to book via form or phone",
    "contactPage.faqTitle": "Frequently Asked Questions",
    "contactPage.faqDescription":
      "Answers to questions we most often receive from our clients",
    "contactPage.faq1Question": "How early should I make a reservation?",
    "contactPage.faq1Answer":
      "We recommend booking at least 2 weeks before the planned event, especially during the summer season and holidays.",
    "contactPage.faq2Question": "Do prices include setup and transport?",
    "contactPage.faq2Answer":
      "Yes, all our prices include setup, dismantling, and transport within a 100 km radius of Radom. We charge an additional fee for longer distances.",
    "contactPage.faq3Question": "What if the weather is unfavorable?",
    "contactPage.faq3Answer":
      "Our tents are weather-resistant. Inflatables can be used in light rain, but not during a storm for safety reasons.",
    "contactPage.faq4Question": "Are the attractions insured?",
    "contactPage.faq4Answer":
      "Yes, all our attractions have full liability insurance. Additionally, we regularly conduct technical inspections of the equipment.",
    "contactPage.faq5Question": "What is the reservation process?",
    "contactPage.faq5Answer":
      "After contact, we prepare a quote, then we require a 200 PLN deposit. The remaining amount can be settled upon equipment pickup.",
    "aboutUsPage.heroTitle": "About Our Company",
    "aboutUsPage.heroDescription":
      "We are a company with a passion for creating unforgettable moments. We specialize in renting event attractions that make every party unique.",
    "aboutUsPage.badgeFounded": "Radom and 100 km surroundings",
    "aboutUsPage.storyTitle": "Our Story",
    "aboutUsPage.storyPara1":
      "SŁODKOLANDIA wita: was created from a simple belief that every event deserves to be unforgettable. We started our business in 2014 with three inflatables and a great passion for organizing events.",
    "aboutUsPage.storyPara2":
      "Today, we are a recognizable brand in Radom and the surrounding areas, offering comprehensive rental of event attractions. Our experience includes corporate events, weddings, children's birthdays, city festivals, and many other occasions.",
    "aboutUsPage.storyPara3":
      "What sets us apart is our individual approach to each client and our constant concern for the safety and quality of our services.",
    "aboutUsPage.missionTitle": "🎯 Our Mission",
    "aboutUsPage.missionDescription":
      "We create unforgettable moments of joy and fun by providing the highest quality event attractions with full professional service.",
    "aboutUsPage.visionTitle": "🔮 Our Vision",
    "aboutUsPage.visionDescription":
      "To be the first choice in the region for people looking for professional event attractions and comprehensive event management.",
    "aboutUsPage.valuesTitle": "Our Values",
    "aboutUsPage.valuesDescription":
      "The values that guide our way of working and our approach to every client",
    "aboutUsPage.valuePassionTitle": "Passion",
    "aboutUsPage.valuePassionDesc":
      "We treat every event as a unique occasion. We put our heart into what we do.",
    "aboutUsPage.valueSafetyTitle": "Safety",
    "aboutUsPage.valueSafetyDesc":
      "The safety of our guests is a priority. All equipment is certified and insured.",
    "aboutUsPage.valueProfessionalismTitle": "Professionalism",
    "aboutUsPage.valueProfessionalismDesc":
      "Punctuality, reliability, and high-quality services are our hallmarks.",
    "aboutUsPage.valueQualityTitle": "Quality",
    "aboutUsPage.valueQualityDesc":
      "We use only proven, top-quality equipment from reputable manufacturers.",
    "aboutUsPage.achievementsTitle": "Our Achievements",
    "aboutUsPage.achievementsDescription":
      "Numbers that best describe our experience and commitment",
    "aboutUsPage.achievementEvents": "Events completed",
    "aboutUsPage.achievementExperience": "years of experience",
    "aboutUsPage.achievementAttractions": "types of attractions",
    "aboutUsPage.achievementRadius": "service radius",
    "aboutUsPage.achievementSatisfaction": "satisfied clients",
    "aboutUsPage.achievementAvailability": "phone availability",
    "aboutUsPage.teamTitle": "Our Team",
    "aboutUsPage.teamDescription":
      "A group of enthusiasts who ensure every event is perfect",
    "aboutUsPage.teamOwnerName": "Company Owner",
    "aboutUsPage.teamOwnerRole": "Founder and Project Manager",
    "aboutUsPage.teamOwnerDesc":
      "11 years of experience in the event industry. Passionate about creating unforgettable moments.",
    "aboutUsPage.teamAssemblyName": "Assembly Team",
    "aboutUsPage.teamAssemblyRole": "Assembly Specialists",
    "aboutUsPage.teamAssemblyDesc":
      "Experienced technicians ensuring quick and safe assembly of all attractions.",
    "aboutUsPage.teamSupportName": "Customer Support",
    "aboutUsPage.teamSupportRole": "Event Consultants",
    "aboutUsPage.teamSupportDesc":
      "We will help you choose the ideal attractions and plan the entire event.",
    "aboutUsPage.certsTitle": "Certificates and Quality",
    "aboutUsPage.certsDescription":
      "Safety and quality are the foundation of our business. All our attractions are regularly inspected and have the required certificates.",
    "aboutUsPage.certInsurance": "Liability Insurance",
    "aboutUsPage.certInsuranceDesc": "Full civil liability coverage",
    "aboutUsPage.certEquipment": "Equipment Certificates",
    "aboutUsPage.certEquipmentDesc":
      "All attractions have the required certificates",
    "aboutUsPage.certReviews": "Technical Inspections",
    "aboutUsPage.certReviewsDesc": "Regular safety checks of equipment",
    "aboutUsPage.certTraining": "Team Training",
    "aboutUsPage.certTrainingDesc":
      "Continuous improvement of employee qualifications",
    "aboutUsPage.whyChooseUsTitle": "Why Clients Choose Us?",
    "aboutUsPage.whyChooseExperience": "Experience",
    "aboutUsPage.whyChooseExperienceDesc":
      "11 years on the market and hundreds of successful events",
    "aboutUsPage.whyChooseSafety": "Safety",
    "aboutUsPage.whyChooseSafetyDesc": "Full insurance and certified equipment",
    "aboutUsPage.whyChooseProfessionalism": "Professionalism",
    "aboutUsPage.whyChooseProfessionalismDesc":
      "Punctual delivery and professional service",
    "aboutUsPage.whyChooseIndividual": "Individual Approach",
    "aboutUsPage.whyChooseIndividualDesc": "We treat every event as unique",
    "offerPage.heroTitle": "Our Event Attraction Offer",
    "offerPage.heroDescription":
      "Discover our full range of professional event attractions and services. From party tents to comprehensive event management.",
    "offerPage.badgeLocation": "Radom and surroundings (100 km)",
    "offerPage.filterLabel": "Categories:",
    "offerPage.allAttractionsCount": "All attractions ({count})",
    "offerPage.categoryAttractionsCount": "{categoryName} ({count})",
    "offerPage.noAttractionsTitle": "No attractions in this category",
    "offerPage.noAttractionsDescription":
      "Choose another category or contact us for individual solutions.",
    "offerPage.sectionTentsTitle": "🏕️ Party Tents",
    "offerPage.sectionTentsDescription":
      "Professional tents in various sizes, ideal for weddings, birthdays, and corporate events. We offer full assembly and dismantling service with options for flooring and lighting.",
    "offerPage.sectionTablesChairsTitle": "🪑 Tables, Chairs & Linens",
    "offerPage.sectionTablesChairsDescription":
      "Comprehensive equipment of tables, chairs, tablecloths, grass, and lighting for your event.",
    "offerPage.sectionInflatablesTitle": "🏰 Inflatable Attractions",
    "offerPage.sectionInflatablesDescription":
      "Safe and certified inflatables for children. Slides, castles, and playgrounds with professional service and liability insurance.",
    "offerPage.sectionEquipmentTitle": "🍭 Confectionery Equipment",
    "offerPage.sectionEquipmentDescription":
      "Cotton candy and popcorn machines, and elegant chocolate fountains. All with professional service and fresh products.",
    "offerPage.servicesIncludeTitle": "What do our services include?",
    "offerPage.serviceTransport": "Transport and assembly",
    "offerPage.serviceTransportDesc": "Full delivery and setup service",
    "offerPage.serviceProfessional": "Professional service",
    "offerPage.serviceProfessionalDesc": "Experienced staff during the event",
    "offerPage.serviceInsurance": "Liability insurance",
    "offerPage.serviceInsuranceDesc": "Full insurance coverage",
    "offerPage.serviceCertified": "Certified equipment",
    "offerPage.serviceCertifiedDesc": "Safe and functional devices",
    "offerPage.serviceFlexible": "Flexible dates",
    "offerPage.serviceFlexibleDesc": "Tailored to your needs",
    "offerPage.serviceConsultations": "Consultations",
    "offerPage.serviceConsultationsDesc": "Help in planning the event",
    "offerPage.sectionDescriptionTitle": "Attraction Description",
    "pricingPage.title": "Pricing",
    "modal.pricingIncludes":
      "Price includes transport, setup, and service within a 100 km radius of Radom.",
    "modal.featuresTitle": "Main Features",
    "modal.pricingDetails": "Pricing Details",
    "modal.specificationsTitle": "Technical Specifications",
    "modal.galleryTitle": "Attraction Gallery",
    "galleryPage.title": "Gallery",
    "modal.ctaTitle": "Interested?",
    "modal.ctaDescription":
      "Contact us today to check availability and get an individual quote.",
    "contact.phoneValue": "+48531890827",
    "modal.freeWithTent": "* With tent rental or individual package quote",
    "modal.pricingNote.fountain":
      "* Price does not include toppings. The client may optionally purchase them separately.",
    "seo.homeTitle": "SŁODKOLANDIA wita: - Event Attraction Rental Radom",
    "seo.homeDescription":
      "Professional rental of party tents, inflatables, cotton candy, and popcorn in Radom and surroundings. Organize an unforgettable party!",
    "seo.offerTitle": "Offer - Event Attraction Rental | SŁODKOLANDIA wita:",
    "seo.offerDescription":
      "Discover our full range of event attractions: party tents, tables, chairs, inflatables, cotton candy, popcorn, chocolate fountains. Professional rental in Radom.",
    "seo.galleryTitle":
      "Photo Gallery - See Our Attractions in Action | SŁODKOLANDIA wita:",
    "seo.galleryDescription":
      "View the photo gallery from our event productions. Party tents, tables, chairs, inflatables, cotton candy, popcorn, and chocolate fountains in action.",
    "seo.pricingTitle":
      "Pricing for Event Attraction Rental | SŁODKOLANDIA wita: Radom",
    "seo.pricingDescription":
      "Check current rental prices for party tents, tables, chairs, inflatables, and catering equipment. Promotional packages and individual quotes.",
    "seo.contactTitle":
      "Contact - Event Attraction Rental Radom | SŁODKOLANDIA wita:",
    "seo.contactDescription":
      "Contact us today! Phone: +48 531 890 827. Professional event attraction rental in Radom and surroundings.",
    "seo.aboutUsTitle":
      "About Us - SŁODKOLANDIA wita: | Professional Event Attraction Rental Radom",
    "seo.aboutUsDescription":
      "Learn our history, values, and experience. SŁODKOLANDIA wita: is a passion for creating unforgettable events in Radom and surroundings.",
    "seo.termsTitle": "Terms of Service - SŁODKOLANDIA wita:",
    "seo.termsDescription": "Read the terms of service for SŁODKOLANDIA wita:.",
    "seo.privacyPolicyTitle": "Privacy Policy - SŁODKOLANDIA wita:",
    "seo.privacyPolicyDescription":
      "Learn how SŁODKOLANDIA wita: protects your personal data.",
    "termsPage.title": "Terms of Service",
    "termsPage.lastUpdated": "Last updated: June 1, 2025",
    "termsPage.introduction.title": "1. Introduction",
    "termsPage.introduction.content":
      "These terms and conditions outline the rules and regulations for the use of SŁODKOLANDIA wita:'s event attraction rental services, located in Radom, hereinafter referred to as the Service Provider.",
    "termsPage.services.title": "2. Scope of Services",
    "termsPage.services.content":
      "The Service Provider offers rental of party tents, tables, chairs, linens, slides and bouncy castles, cotton candy and popcorn machines, and a chocolate fountain.",
    "termsPage.booking.title": "3. Bookings and Payments",
    "termsPage.booking.content":
      "A reservation is confirmed upon signing the agreement and payment of a 200 PLN deposit. The remaining amount is payable according to the terms specified in the agreement.",
    "termsPage.cancellation.title": "4. Cancellations",
    "termsPage.cancellation.content":
      "The Client may cancel a reservation free of charge at least 7 days prior to the scheduled event date. If a cancellation is made less than 7 days in advance, the deposit is non-refundable.",
    "termsPage.responsibilities.title": "5. Responsibilities",
    "termsPage.responsibilities.client":
      "The Client is responsible for providing a suitable location for the assembly of attractions and access to a 230V power source if required. The Client is liable for any damages caused by their fault.",
    "termsPage.responsibilities.provider":
      "The Service Provider ensures that the equipment is in good working order and safe, and is responsible for its assembly and disassembly. The Service Provider holds public liability insurance.",
    "termsPage.finalProvisions.title": "6. Final Provisions",
    "termsPage.finalProvisions.content":
      "Matters not regulated by these terms and conditions shall be governed by the provisions of the Civil Code. Any disputes shall be settled amicably, and in the absence of agreement, by the court competent for the Service Provider's seat.",
    "privacyPolicyPage.title": "Privacy Policy",
    "privacyPolicyPage.lastUpdated": "Last updated: June 1, 2025",
    "privacyPolicyPage.introduction.title": "1. Introduction",
    "privacyPolicyPage.introduction.content":
      "This Privacy Policy describes how SŁODKOLANDIA wita: (hereinafter referred to as the Administrator) collects, uses, and protects the personal data of Users.",
    "privacyPolicyPage.dataAdmin.title": "2. Data Administrator",
    "privacyPolicyPage.dataAdmin.content":
      "The administrator of your personal data is SŁODKOLANDIA wita:, based in Radom. Contact: mariuszek1989poczta@wp.pl, phone +48 531 890 827.",
    "privacyPolicyPage.dataCollection.title": "3. What data do we collect?",
    "privacyPolicyPage.dataCollection.content":
      "We collect data provided voluntarily during contact (form, email, phone), such as name, email address, phone number, and event information.",
    "privacyPolicyPage.dataUsage.title": "4. How do we use your data?",
    "privacyPolicyPage.dataUsage.content":
      "We use your data to respond to inquiries, prepare offers, fulfill rental agreements, and for marketing purposes (with your consent).",
    "privacyPolicyPage.dataSharing.title": "5. Data Sharing",
    "privacyPolicyPage.dataSharing.content":
      "We do not share your personal data with third parties without your explicit consent, unless required by law.",
    "privacyPolicyPage.cookies.title": "6. Cookies",
    "privacyPolicyPage.cookies.content":
      "Our website may use cookies to improve the quality of services provided. You can manage cookie settings in your browser.",
    "privacyPolicyPage.userRights.title": "7. Your Rights",
    "privacyPolicyPage.userRights.content":
      "You have the right to access, rectify, delete, or limit the processing of your data, as well as the right to object and to data portability.",
    "privacyPolicyPage.changes.title": "8. Changes to the Privacy Policy",
    "privacyPolicyPage.changes.content":
      "We reserve the right to make changes to the privacy policy. The current version will always be available on our website.",
    "attractionsData.namioty-imprezowe.name": "Party Tents",
    "attractionsData.namioty-imprezowe.shortDescription":
      "Professional party tents in various sizes. Perfect for weddings, birthdays, and corporate events.",
    "attractionsData.namioty-imprezowe.description":
      "Professional party tents in various sizes, ideal for weddings, birthdays, corporate events, and other occasions. Our tents are made of high-quality, weather-resistant materials. We provide full assembly and disassembly service.",
    "attractionsData.namioty-imprezowe.materialValue":
      "PVC 650 g/m² - durable, waterproof, fire-retardant, UV and tear resistant",
    "attractionsData.namioty-imprezowe.option1.description": "Tent 6x6m",
    "attractionsData.namioty-imprezowe.option1.capacity": "up to 30 people",
    "attractionsData.namioty-imprezowe.option2.description": "Tent 6x10m",
    "attractionsData.namioty-imprezowe.option2.capacity": "up to 60 people",
    "specification.label.availableSizes": "Available sizes",
    "attractionsData.namioty-imprezowe.availableSizesValue": "6x6m, 6x10m",
    "attractionsData.stoly-krzesla-obrusy.name": "Tables, Chairs & Linens",
    "attractionsData.stoly-krzesla-obrusy.shortDescription":
      "Comprehensive equipment of tables, chairs, tablecloths, grass, and lighting for your event.",
    "attractionsData.stoly-krzesla-obrusy.description":
      "We offer rental of sturdy banquet tables, comfortable chairs, and elegant tablecloths, perfect for any type of tent and occasion. Additionally, we provide decorative artificial grass and night lighting to create a unique atmosphere.",
    "attractionsData.dmuchane-atrakcje.name": "Inflatable Attractions",
    "attractionsData.dmuchane-atrakcje.shortDescription":
      "Slides, bouncy castles. Guaranteed fun for children of all ages!",
    "attractionsData.dmuchane-atrakcje.description":
      "Colorful slides, bouncy castles for children. Our attractions are safe, regularly serviced, and have all required certificates. We guarantee joy and safe fun for children of all ages.",
    "attractionsData.wata-cukrowa.name": "Cotton Candy",
    "attractionsData.wata-cukrowa.shortDescription":
      "Professional cotton candy machines. A sweet treat for guests!",
    "attractionsData.wata-cukrowa.description":
      "Professional cotton candy machines with colorful flavors and aromas. Our cotton candy is not only a sweet snack but also a visual attraction that will delight guests of all ages. We offer various flavors and colors.",
    "attractionsData.popcorn.name": "Popcorn",
    "attractionsData.popcorn.shortDescription":
      "Popcorn machines. Fresh, aromatic popcorn at your event.",
    "attractionsData.popcorn.description":
      "Popcorn machines that add a unique character to any event. Fresh, aromatic popcorn prepared live during the party. Various flavors available - salty, sweet, caramel.",
    "attractionsData.fontanna-czekoladowa.name": "Chocolate Fountain",
    "attractionsData.fontanna-czekoladowa.shortDescription":
      "Elegant chocolate fountain. An exquisite attraction for connoisseurs.",
    "attractionsData.fontanna-czekoladowa.description":
      "Elegant chocolate fountain with toppings. An exquisite attraction for true connoisseurs.",
    "attractionsData.kompleksowa-obsluga.name": "Comprehensive Event Service",
    "attractionsData.kompleksowa-obsluga.shortDescription":
      "Full event organization with our experienced team.",
    "attractionsData.kompleksowa-obsluga.description":
      "Full event organization with our experienced team. From planning to execution.",
    "feature.variousSizes": "Various sizes available",
    "feature.weatherResistant": "Weather resistant",
    "feature.professionalSetup": "Professional assembly & disassembly",
    "feature.optionalFloor": "Optional flooring",
    "feature.ledLighting": "LED lighting",
    "feature.weddingDecorations": "Wedding & event decorations",
    "feature.tablesFor6": "Tables for 6-8 people",
    "feature.comfortableChairs": "Comfortable banquet chairs",
    "feature.elegantTablecloths": "Elegant tablecloths",
    "feature.decorativeGrass": "Decorative artificial grass",
    "feature.nightLighting": "Night lighting (string lights)",
    "feature.variousConfigurations": "Various configurations available",
    "feature.certifiedSafe": "Certified and safe",
    "feature.variousThemes": "Various themes and sizes",
    "feature.eventSupport": "On-site event support",
    "feature.liabilityInsurance": "Liability insurance (OC)",
    "feature.generatorIncluded": "Power generator included",
    "feature.protectiveMats": "Protective mats",
    "feature.variousFlavorsColors": "Cotton candy in white color",
    "feature.professionalService": "Professional service",
    "feature.hygienicPackaging": "Ecological, disposable wooden sticks",
    "feature.visualAttraction": "Visual attraction",
    "feature.fastProduction": "Fast production",
    "feature.ecoSugars": "Ecological sugars",
    "feature.popcornMachines": "Popcorn machines",
    "feature.freshPopcornLive": "Fresh popcorn made live",
    "feature.variousFlavors": "Various flavors available",
    "feature.attractivePackaging": "Attractive packaging",
    "feature.hygieneQuality": "Hygiene and quality",
    "feature.variousChocolateTypes": "Various types of chocolate",
    "feature.freshFruitIncluded": "Fresh fruit included",
    "feature.elegantPresentation": "Elegant presentation",
    "feature.hygieneSafety": "Hygiene and safety",
    "feature.toppings": "Dipping extras",
    "feature.consultationPlanning": "Consultation & planning",
    "feature.spaceDesign": "Space arrangement design",
    "feature.deliveryCoordination": "Delivery coordination",
    "feature.comprehensiveInsurance": "Comprehensive insurance",
    "specification.label.sizes": "Sizes",
    "specification.label.material": "Material",
    "specification.label.height": "Height",
    "specification.label.assemblyTime": "Assembly",
    "specification.label.capacity": "Capacity",
    "specification.label.tableRentalItem": "Table rental (180x75cm)",
    "specification.value.tableRentalDesc": "Sturdy banquet table.",
    "specification.value.tableRentalPrice": "from 25 PLN/pc.",
    "specification.label.chairRentalItem": "Chair rental",
    "specification.value.chairRentalDesc": "Comfortable banquet chair.",
    "specification.value.chairRentalPrice": "from 10 PLN/pc.",
    "specification.label.tableclothRentalItem": "Tablecloth rental",
    "specification.value.tableclothRentalDesc": "Elegant white tablecloth.",
    "specification.value.tableclothRentalPrice": "from 20 PLN/pc.",
    "specification.label.grassRentalItem": "Decorative grass (roll)",
    "specification.value.grassRentalDesc": "Decorative artificial grass.",
    "specification.value.grassRentalFreeItem": "Free*",
    "specification.label.lightingRentalItem": "Night lighting (string lights)",
    "specification.value.lightingRentalDesc": "String lights for atmosphere.",
    "specification.value.lightingRentalFreeItem": "Free*",
    "specification.label.age": "Children's Age",
    "specification.label.dimensions": "Dimensions",
    "specification.label.power": "Power Supply",
    "specification.label.flavors": "Flavors",
    "specification.label.colors": "Colors",
    "specification.label.efficiency": "Efficiency",
    "specification.label.operator": "Operator",
    "specification.label.machineType": "Machine Type",
    "specification.label.packaging": "Packaging",
    "specification.label.chocolateTypes": "Chocolate Types",
    "specification.label.fountainHeight": "Fountain Height",
    "specification.label.chocolateCapacity": "Capacity",
    "specification.label.toppings": "Extras",
    "specification.label.waiter": "Waiter",
    "specification.label.experience": "Experience",
    "specification.label.team": "Team",
    "specification.label.area": "Service Area",
    "specification.label.eventTypes": "Event Types",
    "specification.label.realizationTime": "Realization Time",
    "specification.value.assemblyTime24": "2-4 hours",
    "specification.value.capacity815children": "5 children simultaneously",
    "specification.value.flavorsCottonCandy":
      "Strawberry, vanilla, raspberry, apple",
    "specification.value.colorsCottonCandy": "Pink, blue, yellow, green",
    "specification.value.efficiency100150Portions": "100-150 servings/hour",
    "specification.value.operatorIncluded": "Operator included",
    "specification.value.flavorsPopcorn": "Salty, sweet, caramel, cheese",
    "specification.value.efficiency200Portions": "200 servings/hour",
    "specification.value.machineTypePopcorn": "Popcorn machine",
    "specification.value.packagingPaper": "Paper bags and boxes",
    "specification.value.chocolateTypesFull": "Milk, dark, white",
    "specification.value.fountainHeightCm": "60-80 cm",
    "specification.value.chocolateCapacityKg": "3-5 kg of chocolate",
    "specification.value.toppingsFull": "Fruits, cookies, marshmallows",
    "specification.value.waiterIncluded":
      "Professional chocolate fountain service",
    "specification.value.experienceYears": "Over 11 years",
    "specification.value.teamProfessional": "Professional organizers",
    "specification.value.areaKm": "Radom and 100 km surroundings",
    "specification.value.eventTypesFull":
      "Weddings, birthdays, corporate events",
    "specification.value.realizationTimeHours": "2-8 hours",
    "reviewModal.title": 'Add a review for "{companyName}"!',
    "reviewModal.description":
      "Scan the QR code to add a review on Google Maps.",
    "reviewModal.qrAlt": "QR Code - Add Review",
    "reviewModal.qrLabelLine1": "QR Code - Add Review",
    "reviewModal.qrLabelLine2": "or click the link:",
    "reviewModal.googleButton": "Add Google Review",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(appDefaultLang);
  const [isLanguageInitialized, setIsLanguageInitialized] = useState(false);

  useEffect(() => {
    setIsLanguageInitialized(true);
  }, []);

  const setLanguage = (
    newLang: Language,
    options?: { preventNavigation?: boolean }
  ) => {
    setLanguageState(newLang);
  };

  const t = (
    key: string,
    replacements?: Record<string, string | number | undefined | null>,
    fallback?: string
  ): string => {
    let translation = translations[language]?.[key];

    if (translation === undefined) {
      if (fallback !== undefined) {
        translation = fallback;
      } else if (replacements?.defaultValue) {
        translation = String(replacements.defaultValue);
      } else {
        translation = key;
      }
    }

    if (replacements && typeof translation === "string") {
      Object.keys(replacements).forEach((placeholder) => {
        if (placeholder === "defaultValue") return;
        const regex = new RegExp(`{${placeholder}}`, "g");
        const replacementValue = replacements[placeholder];
        if (replacementValue !== undefined && replacementValue !== null) {
          translation = (translation as string).replace(
            regex,
            String(replacementValue)
          );
        }
      });
    }
    return translation || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, isLanguageInitialized }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
