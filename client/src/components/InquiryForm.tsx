import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const inquirySchema = z.object({
  name: z.string().min(2, "inquiryForm.nameError"),
  email: z.string().email("inquiryForm.emailError"),
  phone: z.string().optional(),
  eventDate: z.string().optional(),
  message: z.string().min(10, "inquiryForm.messageError"),
});

type InquiryFormData = Omit<z.infer<typeof inquirySchema>, "attractions">;

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAttractions, setSelectedAttractions] = useState<string[]>([]);
  const { toast } = useToast();
  const { t } = useLanguage();

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnnvqaan";

  const attractionOptions = [
    { id: "namioty", labelKey: "inquiryForm.attractionOptionTents" },
    { id: "stoly", labelKey: "inquiryForm.attractionOptionTables" },
    { id: "krzesla", labelKey: "inquiryForm.attractionOptionChairs" },
    { id: "obrusy", labelKey: "inquiryForm.attractionOptionLinens" },
    { id: "dmuchance", labelKey: "inquiryForm.attractionOptionInflatables" },
    { id: "wata", labelKey: "inquiryForm.attractionOptionCottonCandy" },
    { id: "popcorn", labelKey: "inquiryForm.attractionOptionPopcorn" },
    { id: "fontanna", labelKey: "inquiryForm.attractionOptionFountains" },
    {
      id: "kompleksowa",
      labelKey: "inquiryForm.attractionOptionComprehensive",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {},
  });

  const handleAttractionChange = (attractionId: string, checked: boolean) => {
    setSelectedAttractions((prev) =>
      checked
        ? [...prev, attractionId]
        : prev.filter((id) => id !== attractionId)
    );
  };

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);

    const formDataToSubmit = {
      ...data,
      attractions: selectedAttractions.join(", "),
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSubmit),
      });

      if (response.ok) {
        toast({
          title: t("inquiryForm.successTitle"),
          description: t("inquiryForm.successDescription"),
        });
        reset();
        setSelectedAttractions([]);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error data:", errorData);
        toast({
          title: t("inquiryForm.errorTitle"),
          description: errorData.error || t("inquiryForm.errorDescription"),
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t("inquiryForm.errorTitle"),
        description: t("inquiryForm.errorDescription"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border border-slate-200 shadow-lg">
        {" "}
        {/* Zachowano oryginalne klasy Card */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-slate-800">
            {" "}
            {/* Zachowano oryginalne klasy CardTitle */}
            {t("inquiryForm.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label
                htmlFor="name"
                className="text-sm font-medium text-slate-700" // Zachowano oryginalne klasy Label
              >
                {t("inquiryForm.nameLabel")}
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder={t("inquiryForm.namePlaceholder")}
                className="mt-1" // Zachowano oryginalne klasy Input
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message ? t(errors.name.message) : ""}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-slate-700" // Zachowano oryginalne klasy Label
              >
                {t("inquiryForm.emailLabel")}
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder={t("inquiryForm.emailPlaceholder")}
                className="mt-1" // Zachowano oryginalne klasy Input
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message ? t(errors.email.message) : ""}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-slate-700" // Zachowano oryginalne klasy Label
              >
                {t("inquiryForm.phoneLabel")}
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder={t("inquiryForm.phonePlaceholder")}
                className="mt-1" // Zachowano oryginalne klasy Input
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label
                htmlFor="eventDate"
                className="text-sm font-medium text-slate-700" // Zachowano oryginalne klasy Label
              >
                {t("inquiryForm.eventDateLabel")}
              </Label>
              <Input
                id="eventDate"
                type="date"
                {...register("eventDate")}
                className="mt-1" // Zachowano oryginalne klasy Input
                min={new Date().toISOString().split("T")[0]}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-slate-700 mb-3 block">
                {" "}
                {/* Zachowano oryginalne klasy Label */}
                {t("inquiryForm.attractionsLabel")}
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {attractionOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={selectedAttractions.includes(option.id)}
                      onCheckedChange={(checked) =>
                        handleAttractionChange(option.id, checked as boolean)
                      }
                      disabled={isSubmitting}
                      // Usunięto klasy dark dla Checkbox
                    />
                    <Label
                      htmlFor={option.id}
                      className="text-sm cursor-pointer" // Zachowano oryginalne klasy Label
                    >
                      {t(option.labelKey)}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label
                htmlFor="message"
                className="text-sm font-medium text-slate-700" // Zachowano oryginalne klasy Label
              >
                {t("inquiryForm.messageLabel")}
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder={t("inquiryForm.messagePlaceholder")}
                rows={4}
                className="mt-1" // Zachowano oryginalne klasy Textarea
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.message.message ? t(errors.message.message) : ""}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full btn-gradient text-white py-4 text-lg font-semibold hover:shadow-lg transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  {t("inquiryForm.submittingButton")}
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  {t("inquiryForm.submitButton")}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
