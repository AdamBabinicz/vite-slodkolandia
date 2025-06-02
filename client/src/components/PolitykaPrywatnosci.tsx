import React from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import { ShieldCheck, Info } from "lucide-react";
import { getLocalizedPath, PAGE_KEYS } from "@/config/paths"; // Upewnij się, że PAGE_KEYS.PRIVACY_POLICY istnieje

export default function PolitykaPrywatnosci() {
  const { t, language } = useLanguage();

  const sections = [
    {
      titleKey: "privacyPolicyPage.introduction.title",
      contentKey: "privacyPolicyPage.introduction.content",
    },
    {
      titleKey: "privacyPolicyPage.dataAdmin.title",
      contentKey: "privacyPolicyPage.dataAdmin.content",
    },
    {
      titleKey: "privacyPolicyPage.dataCollection.title",
      contentKey: "privacyPolicyPage.dataCollection.content",
    },
    {
      titleKey: "privacyPolicyPage.dataUsage.title",
      contentKey: "privacyPolicyPage.dataUsage.content",
    },
    {
      titleKey: "privacyPolicyPage.dataSharing.title",
      contentKey: "privacyPolicyPage.dataSharing.content",
    },
    {
      titleKey: "privacyPolicyPage.cookies.title",
      contentKey: "privacyPolicyPage.cookies.content",
    },
    {
      titleKey: "privacyPolicyPage.userRights.title",
      contentKey: "privacyPolicyPage.userRights.content",
    },
    {
      titleKey: "privacyPolicyPage.changes.title",
      contentKey: "privacyPolicyPage.changes.content",
    },
  ];

  return (
    <>
      <SEOHead
        title={t("seo.privacyPolicyTitle")}
        description={t("seo.privacyPolicyDescription")}
        canonical={getLocalizedPath(PAGE_KEYS.PRIVACY_POLICY, language)}
      />
      <div className="pt-16">
        <section className="py-12 md:py-20 bg-gradient-to-br from-sky-100 to-emerald-100 dark:from-slate-800 dark:to-slate-400">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                {t("privacyPolicyPage.title")}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-200">
                {t("privacyPolicyPage.lastUpdated")}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-slate-900/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-4 border-b pb-2 border-slate-200 dark:border-slate-700">
                  {t(section.titleKey)}
                </h2>
                {Array.isArray(section.contentKey) ? (
                  section.contentKey.map((itemKey, itemIndex) => (
                    <p
                      key={itemIndex}
                      className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"
                    >
                      {t(itemKey)}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t(section.contentKey)}
                  </p>
                )}
              </motion.div>
            ))}
            <motion.div
              className="mt-12 p-6 bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <Info className="h-6 w-6 text-emerald-500 dark:text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                    {t("contactPage.additionalInfoTitle")}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t("contactPage.faq1Answer")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
