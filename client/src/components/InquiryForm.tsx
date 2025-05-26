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

const inquirySchema = z.object({
  name: z.string().min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().optional(),
  eventDate: z.string().optional(),
  attractions: z.array(z.string()).optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const attractionOptions = [
  { id: "namioty", label: "Namioty Imprezowe" },
  { id: "dmuchance", label: "Dmuchane Atrakcje" },
  { id: "wata", label: "Wata Cukrowa" },
  { id: "popcorn", label: "Maszyny do Popcornu" },
  { id: "fontanny", label: "Fontanny Czekoladowe" },
  { id: "kompleksowa", label: "Kompleksowa Obsługa" },
];

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAttractions, setSelectedAttractions] = useState<string[]>([]);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      attractions: [],
    },
  });

  const handleAttractionChange = (attractionId: string, checked: boolean) => {
    setSelectedAttractions(prev => 
      checked 
        ? [...prev, attractionId]
        : prev.filter(id => id !== attractionId)
    );
  };

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, this would integrate with EmailJS or a backend service
      console.log("Form data:", { ...data, attractions: selectedAttractions });
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Zapytanie wysłane!",
        description: "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.",
      });
      
      reset();
      setSelectedAttractions([]);
    } catch (error) {
      toast({
        title: "Błąd wysyłania",
        description: "Przepraszamy, wystąpił problem. Spróbuj ponownie lub zadzwoń.",
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
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-slate-800">
            Formularz Zapytania
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                Imię i nazwisko *
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Twoje imię i nazwisko"
                className="mt-1"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="twoj@email.pl"
                className="mt-1"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Telefon
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+48 123 456 789"
                className="mt-1"
                disabled={isSubmitting}
              />
            </div>

            {/* Event Date */}
            <div>
              <Label htmlFor="eventDate" className="text-sm font-medium text-slate-700">
                Data eventu
              </Label>
              <Input
                id="eventDate"
                type="date"
                {...register("eventDate")}
                className="mt-1"
                min={new Date().toISOString().split('T')[0]}
                disabled={isSubmitting}
              />
            </div>

            {/* Attractions */}
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-3 block">
                Interesujące atrakcje
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
                    />
                    <Label htmlFor={option.id} className="text-sm cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                Wiadomość *
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Opisz swój event, liczbę gości, dodatkowe wymagania..."
                rows={4}
                className="mt-1"
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full btn-gradient text-white py-4 text-lg font-semibold hover:shadow-lg transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Wysyłanie...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Wyślij Zapytanie
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
