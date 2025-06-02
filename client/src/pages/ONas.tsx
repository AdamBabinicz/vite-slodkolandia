import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Heart,
  Zap,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
// import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { useLanguage } from "@/hooks/useLanguage";

export default function ONas() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      titleKey: "aboutUsPage.valuePassionTitle",
      descriptionKey: "aboutUsPage.valuePassionDesc",
      bgColor: "bg-red-100",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      titleKey: "aboutUsPage.valueSafetyTitle",
      descriptionKey: "aboutUsPage.valueSafetyDesc",
      bgColor: "bg-blue-100",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      titleKey: "aboutUsPage.valueProfessionalismTitle",
      descriptionKey: "aboutUsPage.valueProfessionalismDesc",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <Star className="h-8 w-8 text-purple-500" />,
      titleKey: "aboutUsPage.valueQualityTitle",
      descriptionKey: "aboutUsPage.valueQualityDesc",
      bgColor: "bg-purple-100",
    },
  ];

  const achievements = [
    { number: "500+", labelKey: "aboutUsPage.achievementEvents", icon: "🎪" },
    { number: "11", labelKey: "aboutUsPage.achievementExperience", icon: "📅" },
    {
      number: "50+",
      labelKey: "aboutUsPage.achievementAttractions",
      icon: "🎨",
    },
    { number: "100 km", labelKey: "aboutUsPage.achievementRadius", icon: "🚛" },
    {
      number: "100%",
      labelKey: "aboutUsPage.achievementSatisfaction",
      icon: "😊",
    },
    {
      number: "8/6",
      labelKey: "aboutUsPage.achievementAvailability",
      icon: "📞",
    },
  ];

  const teamMembers = [
    {
      nameKey: "aboutUsPage.teamOwnerName",
      roleKey: "aboutUsPage.teamOwnerRole",
      descriptionKey: "aboutUsPage.teamOwnerDesc",
      icon: "👨‍💼",
    },
    {
      nameKey: "aboutUsPage.teamAssemblyName",
      roleKey: "aboutUsPage.teamAssemblyRole",
      descriptionKey: "aboutUsPage.teamAssemblyDesc",
      icon: "🔧",
    },
    {
      nameKey: "aboutUsPage.teamSupportName",
      roleKey: "aboutUsPage.teamSupportRole",
      descriptionKey: "aboutUsPage.teamSupportDesc",
      icon: "💬",
    },
  ];

  const certificates = [
    {
      nameKey: "aboutUsPage.certInsurance",
      descriptionKey: "aboutUsPage.certInsuranceDesc",
    },
    {
      nameKey: "aboutUsPage.certEquipment",
      descriptionKey: "aboutUsPage.certEquipmentDesc",
    },
    {
      nameKey: "aboutUsPage.certReviews",
      descriptionKey: "aboutUsPage.certReviewsDesc",
    },
    {
      nameKey: "aboutUsPage.certTraining",
      descriptionKey: "aboutUsPage.certTrainingDesc",
    },
  ];

  return (
    <>
      {/* <SEOHead
        title={t("seo.aboutUsTitle")}
        description={t("seo.aboutUsDescription")}
        canonical="/o-nas"
      /> */}

      <div className="pt-16">
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
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6">
                {t("aboutUsPage.heroTitle")}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                {t("aboutUsPage.heroDescription")}
              </p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {t("aboutUsPage.badgeFounded")}
              </Badge>
            </motion.div>
          </div>
        </section>

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
                  {t("aboutUsPage.storyTitle")}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>{t("aboutUsPage.storyPara1")}</p>
                  <p>{t("aboutUsPage.storyPara2")}</p>
                  <p>{t("aboutUsPage.storyPara3")}</p>
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
                      {t("aboutUsPage.missionTitle")}
                    </h3>
                    <p className="text-slate-600">
                      {t("aboutUsPage.missionDescription")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-emerald-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                      {t("aboutUsPage.visionTitle")}
                    </h3>
                    <p className="text-slate-600">
                      {t("aboutUsPage.visionDescription")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

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
                {t("aboutUsPage.valuesTitle")}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t("aboutUsPage.valuesDescription")}
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
                      <div
                        className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">
                        {t(value.titleKey)}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {t(value.descriptionKey)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                {t("aboutUsPage.achievementsTitle")}
              </h2>
              <p className="text-xl text-slate-600">
                {t("aboutUsPage.achievementsDescription")}
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
                      {t(achievement.labelKey)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                {t("aboutUsPage.teamTitle")}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t("aboutUsPage.teamDescription")}
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
                        {t(member.nameKey)}
                      </h3>
                      <Badge variant="secondary" className="mb-4">
                        {t(member.roleKey)}
                      </Badge>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {t(member.descriptionKey)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                  {t("aboutUsPage.certsTitle")}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("aboutUsPage.certsDescription")}
                </p>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800">
                          {t(cert.nameKey)}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {t(cert.descriptionKey)}
                        </p>
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
                      {t("aboutUsPage.whyChooseUsTitle")}
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: "⭐",
                          titleKey: "aboutUsPage.whyChooseExperience",
                          descKey: "aboutUsPage.whyChooseExperienceDesc",
                        },
                        {
                          icon: "🛡️",
                          titleKey: "aboutUsPage.whyChooseSafety",
                          descKey: "aboutUsPage.whyChooseSafetyDesc",
                        },
                        {
                          icon: "⚡",
                          titleKey: "aboutUsPage.whyChooseProfessionalism",
                          descKey: "aboutUsPage.whyChooseProfessionalismDesc",
                        },
                        {
                          icon: "💝",
                          titleKey: "aboutUsPage.whyChooseIndividual",
                          descKey: "aboutUsPage.whyChooseIndividualDesc",
                        },
                      ].map((item) => (
                        <div key={item.titleKey} className="flex items-start">
                          <div className="text-amber-300 text-xl mr-4 mt-1">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">
                              {t(item.titleKey)}
                            </h4>
                            <p className="text-white/90 text-sm">
                              {t(item.descKey)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <CallToAction />
      </div>
    </>
  );
}
