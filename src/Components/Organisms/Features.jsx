import {
  Box,
  ChartArea,
  ServerIcon,
  ShieldCheck,
  TimerIcon,
  User,
} from "lucide-react";
import Content from "../Atoms/Content";
import Feature from "../Atoms/Feature";

export default function Features() {
  return (
    <div className="py-10">
      <Content
        miniTitle="Core Features"
        title="Why Choose Us"
        paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />
      <div className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-6">
        <Feature icon={<User strokeWidth={3} />} title="Expert Team" />
        <Feature icon={<TimerIcon strokeWidth={3} />} title="Timely Delivery" />
        <Feature icon={<ChartArea strokeWidth={3} />} title="24/7 support" />
        <Feature icon={<ServerIcon strokeWidth={3} />} title="Best Equipment" />
        <Feature icon={<ShieldCheck strokeWidth={3} />} title="100% Guranty" />
        <Feature icon={<Box strokeWidth={3} />} title="Timely Delivery" />
      </div>
    </div>
  );
}
