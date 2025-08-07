import { useState } from "react";
import { Star, MessageCircle, ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import CallToAction from "@/components/CallToAction";

const ReviewCard = ({
  author,
  text,
  details,
  source,
}: {
  author: string;
  text: string;
  details: string;
  source: string;
}) => (
  <motion.div
    className="bg-card dark:bg-slate-800/40 p-6 rounded-lg shadow-lg flex flex-col h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    layout
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mr-4 flex-shrink-0">
        <MessageCircle className="h-6 w-6 dark:text-slate-400 text-slate-500" />
      </div>
      <div>
        <p className="font-bold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{details}</p>
      </div>
    </div>
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <blockquote className="text-muted-foreground dark:text-slate-300 italic flex-grow">
      "{text}"
    </blockquote>
    <p className="text-xs text-slate-400 mt-4 text-right">{source}</p>
  </motion.div>
);

export default function Opinie() {
  const { t } = useLanguage();
  const [showAllReviews, setShowAllReviews] = useState(false);

  const allReviewsKeys = [
    {
      authorKey: "reviews.kromer.author",
      detailsKey: "reviews.kromer.details",
      textKey: "reviews.kromer.text",
    },
    {
      authorKey: "reviews.domosfera.author",
      detailsKey: "reviews.domosfera.details",
      textKey: "reviews.domosfera.text",
    },
    {
      authorKey: "reviews.nowywy.author",
      detailsKey: "reviews.nowywy.details",
      textKey: "reviews.nowywy.text",
    },
    {
      authorKey: "reviews.holmes.author",
      detailsKey: "reviews.holmes.details",
      textKey: "reviews.holmes.text",
    },
    {
      authorKey: "reviews.pawel.author",
      detailsKey: "reviews.pawel.details",
      textKey: "reviews.pawel.text",
    },
    {
      authorKey: "reviews.zak.author",
      detailsKey: "reviews.zak.details",
      textKey: "reviews.zak.text",
    },
    {
      authorKey: "reviews.prondek.author",
      detailsKey: "reviews.prondek.details",
      textKey: "reviews.prondek.text",
    },
    {
      authorKey: "reviews.chmielinski.author",
      detailsKey: "reviews.chmielinski.details",
      textKey: "reviews.chmielinski.text",
    },
    {
      authorKey: "reviews.viranos.author",
      detailsKey: "reviews.viranos.details",
      textKey: "reviews.viranos.text",
    },
    {
      authorKey: "reviews.dawidt.author",
      detailsKey: "reviews.dawidt.details",
      textKey: "reviews.dawidt.text",
    },
    {
      authorKey: "reviews.nawara.author",
      detailsKey: "reviews.nawara.details",
      textKey: "reviews.nawara.text",
    },
    {
      authorKey: "reviews.nazwiskowski.author",
      detailsKey: "reviews.nazwiskowski.details",
      textKey: "reviews.nazwiskowski.text",
    },
  ];

  const visibleReviews = showAllReviews
    ? allReviewsKeys
    : allReviewsKeys.slice(0, 6);

  return (
    <>
      <div className="pt-16">
        <section className="py-12 md:py-20 bg-gradient-to-br from-sky-100 to-emerald-100 dark:from-slate-900 dark:to-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                {t("reviews.pageTitle")}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t("reviews.pageSubtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background dark:bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {visibleReviews.map((review) => (
                  <ReviewCard
                    key={review.authorKey}
                    author={t(review.authorKey)}
                    text={t(review.textKey)}
                    details={t(review.detailsKey)}
                    source={t("reviews.sourceGoogle")}
                  />
                ))}
              </AnimatePresence>
            </div>

            {!showAllReviews && allReviewsKeys.length > 6 && (
              <div className="text-center mt-12">
                <motion.button
                  onClick={() => setShowAllReviews(true)}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("reviews.showMore")}
                  <ChevronDown className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            )}

            <div className="text-center mt-16">
              <a
                href="https://www.google.com/search?q=słodkolandia+wita#lrd=0x4718f7734a706b81:0x7e296a80a221f75e,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                {t("reviews.seeAllGoogle")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <CallToAction
          variant="secondary"
          className="mx-4 sm:mx-6 lg:mx-8 my-12 md:my-16"
        />
      </div>
    </>
  );
}
