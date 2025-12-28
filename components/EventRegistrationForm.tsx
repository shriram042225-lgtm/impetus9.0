"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RegistrationProvider } from "../context/RegistrationProvider"; 
import { useRegistrationContext } from "../context/RegistrationContext";
import { FormHeader, FormFooter, SuccessView, StepCaptain, StepMember, ErrorNotification } from "./RegistrationComponents"; // Adjust imports

// The inner logic that uses the context
const FormContent = () => {
  const { isSuccess, step } = useRegistrationContext();

  // If success, show the success view
  if (isSuccess) return <SuccessView />;

  return (
    <div className="bg-zinc-900 border border-zinc-700 w-full max-w-lg rounded-3xl overflow-hidden flex flex-col max-h-[90vh]">
      <ErrorNotification />  
      <FormHeader />
      <div className="flex-1 overflow-y-auto p-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Logic to choose which Step to render */}
            {step === 0 ? <StepCaptain /> : <StepMember />}
          </motion.div>
        </AnimatePresence>
      </div>
      <FormFooter />
    </div>
  );
};

// The Main Export - Wraps everything in the Provider
interface EventRegistrationFormProps {
  event: any;
  onClose: () => void;
}

export default function EventRegistrationForm(props: EventRegistrationFormProps) {
  return (
    <RegistrationProvider {...props}>
      <FormContent />
    </RegistrationProvider>
  );
}