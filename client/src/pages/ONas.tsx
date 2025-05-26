import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Zap, Shield, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";

const values = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Pasja",
    description: "Każdy event traktujemy jako wyjątkowe wydarzenie. Wkładamy serce w to, co robimy.",
    bgColor: "bg-red-100"
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Bezpieczeństwo",
    description: "Priorytetem jest bezpieczeństwo naszych gości. Cały sprzęt jest certyfikowany i ubezpieczony.",
    bgColor: "bg-blue-100"
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Profesjonalizm",
    description: "Punktualność, rzetelność i wysoka jakość usług to nasze znaki rozpoznawcze.",
    bgColor: "bg-yellow-100"
  },
  {
    icon: <Star className="h-8 w-8 text-purple-500" />,
    title: "Jakość",
    description: "Używamy tylko sprawdzonego sprzętu najwyższej jakości od renomowanych producentów.",
    bgColor: "bg-purple-100"
  }
];

const achievements = [
  { number: "500+", label: "Zrealizowanych eventów", icon: "🎪" },
  { number: "5", label: "lat doświadczenia", icon: "📅" },
  { number: "50+", label: "rodzajów atrakcji", icon: "🎨" },
  { number: "30km", label: "promień obsługi", icon: "🚛" },
  { number: "100%", label: "zadowolonych klientów", icon: "😊" },
  { number: "24/7", label: "dostępność telefoniczna", icon: "📞" }
];

const teamMembers = [
  {
    name: "Właściciel firmy",
    role: "Założyciel i kierownik projektów",
    description: "5 lat doświadczenia w branży eventowej. Pasjonat tworzenia niezapomnianych chwil.",
    icon: "👨‍💼"
  },
  {
    name: "Zespół montażowy",
    role: "Specjaliści od montażu",
    description: "Doświadczeni technicy zapewniający szybki i bezpieczny montaż wszystkich atrakcji.",
    icon: "🔧"
  },
  {
    name: "Obsługa klienta",
    role: "Konsultanci eventowi",
    description: "Pomożemy Ci w wyborze idealnych atrakcji i zaplanowaniu całego eventu.",
    icon: "💬"
  }
];

const certificates = [
  { name: "Ubezpieczenie OC", description: "Pełne pokrycie odpowiedzialności cywilnej" },
  { name: "Certyfikaty sprzętu", description: "Wszystkie atrakcje posiadają wymagane certyfikaty" },
  { name: "Przeglądy techniczne", description: "Regularne kontrole bezpieczeństwa sprzętu" },
  { name: "Szkolenia zespołu", description: "Ciągłe podnoszenie kwalifikacji pracowników" }
];

export default function ONas() {
  return (
    <>
      <SEOHead
        title="O Nas - SŁODKOLANDIA | Profesjonalny Wynajem Atrakcji Eventowych Radom"
        description="Poznaj naszą historię, wartości i doświadczenie. SŁODKOLANDIA to pasja do tworzenia niezapomnianych eventów w Radomiu i okolicach."
        canonical="/o-nas"
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
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                O Naszej Firmie
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Jesteśmy firmą z pasją do tworzenia niezapomnianych chwil. Specializujemy się w wynajmie 
                atrakcji eventowych, które sprawiają, że każda impreza staje się wyjątkowa.
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Radom i okolice od 2019 roku
              </Badge>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Nasza Historia
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    SŁODKOLANDIA powstała z prostego przekonania, że każde wydarzenie zasługuje na to, 
                    aby być niezapomniane. Rozpoczęliśmy działalność w 2019 roku z jedną dmuchańcą 
                    i wielką pasją do organizacji eventów.
                  </p>
                  <p>
                    Dziś jesteśmy rozpoznawalną marką w Radomiu i okolicach, oferującą kompleksowy 
                    wynajem atrakcji eventowych. Nasze doświadczenie obejmuje eventy dla firm, 
                    wesela, urodziny dzieci, festyny miejskie i wiele innych okazji.
                  </p>
                  <p>
                    To, co nas wyróżnia, to indywidualne podejście do każdego klienta oraz 
                    nieustanna troska o bezpieczeństwo i jakość naszych usług.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="border-l-4 border-l-sky-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                      🎯 Nasza Misja
                    </h3>
                    <p className="text-slate-600">
                      Tworzymy niezapomniane momenty radości i zabawy, dostarczając najwyższej jakości 
                      atrakcje eventowe z pełną obsługą profesjonalną.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-emerald-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                      🔮 Nasza Wizja
                    </h3>
                    <p className="text-slate-600">
                      Być pierwszym wyborem w regionie dla osób poszukujących profesjonalnych 
                      atrakcji eventowych i kompleksowej obsługi wydarzeń.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Nasze Wartości
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Wartości, które wyznaczają nasz sposób działania i podejście do każdego klienta
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow card-hover">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
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
                Nasze Osiągnięcia
              </h2>
              <p className="text-xl text-slate-600">
                Liczby, które najlepiej opisują nasze doświadczenie i zaangażowanie
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">{achievement.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold text-sky-600 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-slate-600 text-sm leading-tight">
                      {achievement.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Nasz Zespół
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Grupa pasjonatów, którzy dbają o to, aby każdy event był perfekcyjny
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-6xl mb-4">{member.icon}</div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {member.name}
                      </h3>
                      <Badge variant="secondary" className="mb-4">
                        {member.role}
                      </Badge>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates & Quality */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                  <Award className="h-8 w-8 text-amber-500 mr-3" />
                  Certyfikaty i Jakość
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Bezpieczeństwo i jakość to podstawa naszej działalności. Wszystkie nasze atrakcje 
                  są regularnie kontrolowane i posiadają wymagane certyfikaty.
                </p>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">{cert.name}</h4>
                        <p className="text-sm text-slate-600">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-sky-500 to-emerald-500 text-white h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Dlaczego Klienci Nas Wybierają?
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="text-amber-300 text-xl mr-4 mt-1">⭐</div>
                        <div>
                          <h4 className="font-semibold mb-2">Doświadczenie</h4>
                          <p className="text-white/90 text-sm">
                            5 lat na rynku i setki udanych eventów
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-amber-300 text-xl mr-4 mt-1">🛡️</div>
                        <div>
                          <h4 className="font-semibold mb-2">Bezpieczeństwo</h4>
                          <p className="text-white/90 text-sm">
                            Pełne ubezpieczenie i certyfikowany sprzęt
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-amber-300 text-xl mr-4 mt-1">⚡</div>
                        <div>
                          <h4 className="font-semibold mb-2">Profesjonalizm</h4>
                          <p className="text-white/90 text-sm">
                            Punktualna dostawa i profesjonalna obsługa
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-amber-300 text-xl mr-4 mt-1">💝</div>
                        <div>
                          <h4 className="font-semibold mb-2">Indywidualne podejście</h4>
                          <p className="text-white/90 text-sm">
                            Każdy event traktujemy jako wyjątkowy
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </>
  );
}
