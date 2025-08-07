import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Truck,
  Star as StarIcon,
} from "lucide-react";
import { BsMessenger } from "react-icons/bs";
import { motion } from "framer-motion";
// import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useLanguage } from "@/hooks/useLanguage";

export default function Kontakt() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-sky-600" />,
      titleKey: "contactPage.phoneTitle",
      descriptionKey: "contactPage.phoneDescription",
      details: "+48 531 890 827",
      action: "tel:+48531890827",
      bgColor: "bg-sky-100",
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      titleKey: "contactPage.emailTitle",
      descriptionKey: "contactPage.emailDescription",
      details: "mariuszek1989poczta@wp.pl",
      action: "mailto:mariuszek1989poczta@wp.pl",
      bgColor: "bg-emerald-100",
    },
    {
      icon: <BsMessenger className="h-6 w-6 text-purple-600" />,
      titleKey: "contactPage.whatsappTitle",
      descriptionKey: "contactPage.whatsappDescription",
      details: "+48 531 890 827",
      action: "https://m.me/wata.cukrowa.popcorn",
      bgColor: "bg-purple-100",
    },
    {
      icon: <Calendar className="h-6 w-6 text-amber-600" />,
      titleKey: "contactPage.meetingTitle",
      descriptionKey: "contactPage.meetingDescription",
      detailsKey: "contactPage.meetingDetails",
      action: "tel:+48531890827",
      bgColor: "bg-amber-100",
    },
  ];

  const workingHours = [
    {
      dayKey: "contactPage.workingHoursMonFri",
      hoursKey: "contactPage.workingHoursMonFriTime",
    },
    {
      dayKey: "contactPage.workingHoursSat",
      hoursKey: "contactPage.workingHoursSatTime",
    },
    {
      dayKey: "contactPage.workingHoursSun",
      hoursKey: "contactPage.workingHoursSunTime",
    },
    {
      dayKey: "contactPage.workingHoursHoliday",
      hoursKey: "contactPage.workingHoursHolidayTime",
    },
  ];

  // Nowa definicja dla głównych miast obsługi
  const mainServiceCities = [
    "contactPage.serviceAreaRadom",
    "contactPage.serviceAreaWarsaw",
    "contactPage.serviceAreaLublin",
  ];

  const faqItems = [
    {
      questionKey: "contactPage.faq1Question",
      answerKey: "contactPage.faq1Answer",
    },
    {
      questionKey: "contactPage.faq2Question",
      answerKey: "contactPage.faq2Answer",
    },
    {
      questionKey: "contactPage.faq3Question",
      answerKey: "contactPage.faq3Answer",
    },
    {
      questionKey: "contactPage.faq4Question",
      answerKey: "contactPage.faq4Answer",
    },
    {
      questionKey: "contactPage.faq5Question",
      answerKey: "contactPage.faq5Answer",
    },
  ];

  return (
    <>
      {/* <SEOHead
        title={t("seo.contactTitle")}
        description={t("seo.contactDescription")}
        canonical="/kontakt"
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
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6">
                {t("contactPage.heroTitle")}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                {t("contactPage.heroDescription")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {t("contactPage.badgeQuickResponse")}
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {t("contactPage.badgeFreeConsultation")}
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {t("contactPage.badgeIndividualQuotes")}
                </Badge>
              </div>
            </motion.div>
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
                {t("contactPage.quickContactTitle")}
              </h2>
              <p className="text-xl text-slate-600">
                {t("contactPage.quickContactDescription")}
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
                      <div
                        className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        {React.cloneElement(method.icon, {
                          className: `${method.icon.props.className} dark:text-slate-600`,
                        })}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">
                        {t(method.titleKey)}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        {t(method.descriptionKey)}
                      </p>
                      <a
                        href={method.action}
                        className="text-sky-600 hover:text-sky-700 font-semibold text-sm block"
                        target={
                          method.action.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          method.action.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {method.detailsKey
                          ? t(method.detailsKey)
                          : method.details}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {t("contactPage.callToActionTitle")}
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  {t("contactPage.callToActionDescription")}
                </p>
                <a
                  href="tel:+48531890827"
                  className="h-11 bg-white text-sky-600 px-8 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5 mr-2 inline" />
                  +48 531 890 827
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <InquiryForm />{" "}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card>
                  {" "}
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <Clock className="h-5 w-5 mr-2 text-sky-600" />{" "}
                      {t("contactPage.workingHoursTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {workingHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0"
                        >
                          <span className="text-slate-700 font-medium">
                            {t(schedule.dayKey)}
                          </span>
                          <span className="text-sky-600 font-semibold">
                            {t(schedule.hoursKey)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-sky-50 rounded-lg">
                      {" "}
                      <p className="text-sm text-sky-800">
                        <strong>{t("contactPage.workingHoursNote")}</strong>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-slate-800">
                      <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                      {t("contactPage.serviceAreaTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 dark:from-emerald-600 dark:to-green-700 text-white shadow-lg text-center mb-6">
                      <Truck className="h-12 w-12 mx-auto mb-4 opacity-80" />
                      <h3 className="text-2xl font-bold mb-2">
                        {t("contactPage.serviceAreaFreeTransport100km")}
                      </h3>
                    </div>
                    <p className="text-slate-700 font-medium">
                      {t("contactPage.serviceAreaMainCities")}
                    </p>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                      {mainServiceCities.map((cityKey) => (
                        <Badge
                          key={cityKey}
                          variant="secondary"
                          className="py-2 px-4 text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600"
                        >
                          <StarIcon className="h-4 w-4 mr-1.5 text-yellow-500 dark:text-yellow-400" />
                          {t(cityKey)}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                      <p className="text-sm text-emerald-800">
                        <strong>{t("contactPage.serviceAreaNote")}</strong>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  {" "}
                  <CardHeader>
                    <CardTitle className="text-slate-800">
                      {t("contactPage.additionalInfoTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        titleKey: "contactPage.infoViewingTitle",
                        descKey: "contactPage.infoViewingDesc",
                        color: "bg-sky-500",
                      },
                      {
                        titleKey: "contactPage.infoFreeQuoteTitle",
                        descKey: "contactPage.infoFreeQuoteDesc",
                        color: "bg-emerald-500",
                      },
                      {
                        titleKey: "contactPage.infoConsultationsTitle",
                        descKey: "contactPage.infoConsultationsDesc",
                        color: "bg-amber-500",
                      },
                      {
                        titleKey: "contactPage.infoOnlineBookingTitle",
                        descKey: "contactPage.infoOnlineBookingDesc",
                        color: "bg-purple-500",
                      },
                    ].map((info) => (
                      <div
                        key={info.titleKey}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className={`w-2 h-2 ${info.color} rounded-full mt-1.5 flex-shrink-0`}
                        ></div>
                        <div>
                          <h4 className="font-semibold text-slate-800">
                            {t(info.titleKey)}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {t(info.descKey)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

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
                {t("contactPage.faqTitle")}
              </h2>
              <p className="text-xl text-slate-600">
                {t("contactPage.faqDescription")}
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    {" "}
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        {t(faq.questionKey)}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {t(faq.answerKey)}
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
