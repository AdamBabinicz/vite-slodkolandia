import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";

const contactMethods = [
  {
    icon: <Phone className="h-6 w-6 text-sky-600" />,
    title: "Telefon",
    description: "Najszybszy kontakt",
    details: "+48 505 977 940",
    action: "tel:+48505977940",
    bgColor: "bg-sky-100"
  },
  {
    icon: <Mail className="h-6 w-6 text-emerald-600" />,
    title: "Email",
    description: "Napisz do nas",
    details: "kontakt@slodkolandia.pl",
    action: "mailto:kontakt@slodkolandia.pl",
    bgColor: "bg-emerald-100"
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-purple-600" />,
    title: "WhatsApp",
    description: "Szybka wiadomość",
    details: "+48 505 977 940",
    action: "https://wa.me/48505977940",
    bgColor: "bg-purple-100"
  },
  {
    icon: <Calendar className="h-6 w-6 text-amber-600" />,
    title: "Spotkanie",
    description: "Umów się na prezentację",
    details: "Po wcześniejszym kontakcie",
    action: "tel:+48505977940",
    bgColor: "bg-amber-100"
  }
];

const workingHours = [
  { day: "Poniedziałek - Piątek", hours: "8:00 - 20:00" },
  { day: "Sobota", hours: "9:00 - 18:00" },
  { day: "Niedziela", hours: "10:00 - 16:00" },
  { day: "Dni świąteczne", hours: "Na umowę" }
];

const serviceAreas = [
  { city: "Radom", distance: "0km", note: "Siedziba firmy" },
  { city: "Białobrzegi", distance: "25km", note: "Darmowy transport" },
  { city: "Szydłowiec", distance: "30km", note: "Darmowy transport" },
  { city: "Kozienice", distance: "35km", note: "Dodatkowa opłata" },
  { city: "Ostrowiec Św.", distance: "40km", note: "Dodatkowa opłata" },
  { city: "Skarżysko-Kamienna", distance: "45km", note: "Dodatkowa opłata" }
];

export default function Kontakt() {
  return (
    <>
      <SEOHead
        title="Kontakt - Wynajem Atrakcji Eventowych Radom | SŁODKOLANDIA"
        description="Skontaktuj się z nami już dziś! Telefon: +48 505 977 940. Profesjonalny wynajem atrakcji eventowych w Radomiu i okolicach."
        canonical="/kontakt"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Skontaktuj się z Nami
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Zorganizujmy razem Twoją niezapomnianą imprezę! Skontaktuj się z nami już dziś 
                i sprawdź dostępność na Twój termin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  ⚡ Szybka odpowiedź
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  💬 Darmowa konsultacja
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  📋 Indywidualne wyceny
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Wybierz Najwygodniejszy Sposób Kontaktu
              </h2>
              <p className="text-xl text-slate-600">
                Jesteśmy dostępni przez cały tydzień. Odpowiadamy szybko na wszystkie zapytania!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all card-hover group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        {method.description}
                      </p>
                      <a
                        href={method.action}
                        className="text-sky-600 hover:text-sky-700 font-semibold text-sm block"
                        target={method.action.startsWith('http') ? '_blank' : undefined}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {method.details}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Zadzwoń już teraz!</h3>
                <p className="text-lg mb-6 text-white/90">
                  Sprawdzimy dostępność terminu i przygotujemy indywidualną wycenę
                </p>
                <a
                  href="tel:+48505977940"
                  className="inline-block bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-colors transform hover:scale-105 shadow-lg"
                >
                  <Phone className="h-5 w-5 mr-2 inline" />
                  +48 505 977 940
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <InquiryForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Working Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <Clock className="h-5 w-5 mr-2 text-sky-600" />
                      Godziny Pracy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                          <span className="text-slate-700 font-medium">{schedule.day}</span>
                          <span className="text-sky-600 font-semibold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-sky-50 rounded-lg">
                      <p className="text-sm text-sky-800">
                        <strong>Uwaga:</strong> W przypadku pilnych spraw jesteśmy dostępni również poza godzinami pracy.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Area */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                      Obszar Obsługi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                          <div>
                            <span className="text-slate-700 font-medium">{area.city}</span>
                            <span className="text-xs text-slate-500 ml-2">({area.distance})</span>
                          </div>
                          <Badge 
                            variant={area.note === "Darmowy transport" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {area.note}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                      <p className="text-sm text-emerald-800">
                        <strong>Obsługujemy też inne miasta!</strong> Skontaktuj się z nami, aby uzgodnić warunki transportu.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-slate-800">
                      Dodatkowe Informacje
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Oględziny sprzętu</h4>
                        <p className="text-sm text-slate-600">Możliwość obejrzenia atrakcji przed wynajmem</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Darmowa wycena</h4>
                        <p className="text-sm text-slate-600">Przygotujemy bezpłatną ofertę dostosowaną do Twoich potrzeb</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Konsultacje</h4>
                        <p className="text-sm text-slate-600">Pomożemy w planowaniu całego eventu</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Rezerwacja online</h4>
                        <p className="text-sm text-slate-600">Możliwość rezerwacji przez formularz lub telefon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Najczęściej Zadawane Pytania
              </h2>
              <p className="text-xl text-slate-600">
                Odpowiedzi na pytania, które najczęściej otrzymujemy od naszych klientów
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Jak wcześnie należy dokonać rezerwacji?",
                  answer: "Zalecamy rezerwację co najmniej 2 tygodnie przed planowanym eventem, szczególnie w sezonie letnim i okresie świątecznym."
                },
                {
                  question: "Czy ceny zawierają montaż i transport?",
                  answer: "Tak, wszystkie nasze ceny zawierają montaż, demontaż oraz transport w promieniu 15km od Radomia. Za większe odległości pobieramy dodatkową opłatę."
                },
                {
                  question: "Co jeśli pogoda będzie niesprzyjająca?",
                  answer: "Nasze namioty są odporne na warunki atmosferyczne. Dmuchańce można używać przy lekkim deszczu, ale nie podczas burzy ze względów bezpieczeństwa."
                },
                {
                  question: "Czy atrakcje są ubezpieczone?",
                  answer: "Tak, wszystkie nasze atrakcje posiadają pełne ubezpieczenie OC. Dodatkowo regularnie przeprowadzamy przeglądy techniczne sprzętu."
                },
                {
                  question: "Jak wygląda proces rezerwacji?",
                  answer: "Po kontakcie przygotowujemy wycenę, następnie wymagamy wpłaty zadatku 30%. Resztę kwoty można uregulować przy odbiorze sprzętu."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
