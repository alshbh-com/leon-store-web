
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال الرسالة",
        description: "شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت",
        variant: "default",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium">
            الاسم
          </label>
          <Input
            id="name"
            name="name"
            placeholder="أدخل اسمك"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="font-medium">
            رقم الهاتف
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="رقم الهاتف"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="font-medium">
          البريد الإلكتروني (اختياري)
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="font-medium">
          الرسالة
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="أدخل رسالتك هنا"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-neon text-dark hover:bg-neon/90 w-full md:w-auto"
      >
        {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
      </Button>
    </form>
  );
};

export default ContactForm;
