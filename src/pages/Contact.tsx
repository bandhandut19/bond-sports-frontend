import ContactForm from "@/components/ui/ContactForm";
import TopMarginSetter from "@/utils/TopMarginSetter";

const Contact = () => {
  return (
    <div className="w-11/12 mx-auto">
      <TopMarginSetter></TopMarginSetter>
      <TopMarginSetter></TopMarginSetter>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
