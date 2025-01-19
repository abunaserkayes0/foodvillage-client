import { Contact2Icon, LocateIcon, Timer } from "lucide-react";
import SubContact from "../Atoms/SubContact";

export default function ContactInfo() {
  return (
    <div className="bg-orange-500 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md p-20 my-16">
      <SubContact
        icon={<Timer size={50} strokeWidth={3} />}
        heading="7:00 am - 9:00 pm"
        paragraph="We are open monday-friday"
      />
      <SubContact
        icon={<Contact2Icon size={50} strokeWidth={3} />}
        heading="+2546 251 2658"
        paragraph="Have a question?"
      />
      <SubContact
        icon={<LocateIcon size={50} strokeWidth={3} />}
        heading="Liza Street, New York"
        paragraph="Need a repair? our address"
      />
    </div>
  );
}
