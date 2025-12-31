"use client";

import Image from "next/image";
import { Instagram, Linkedin, Phone } from "lucide-react";
export interface TeamMember {
  name: string;
  post: string;
  imgname: string;
  phone: string;
  insta?: string;
  link?: string;
}

<<<<<<< HEAD
type Person = {
  name: string;
  post: string;
  phone: string;
  imgname: string;
  insta?: string;
  link?: string;
};

const ContactCard = ({ person }: { person: Person }) => {
=======
interface ContactCardProps {
  person: TeamMember;
}

const ContactCard = ({ person }: ContactCardProps) => {
>>>>>>> upstream/master
  return (
    <div className="group relative w-[240px] bg-zinc-950 border border-zinc-900 overflow-hidden transition-all duration-500 hover:border-white/40">
      
      {/* Profile Image */}
      <div className="relative w-full aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        <Image
          src={`/images/${person.imgname}`}
          alt={person.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Content */}
      <div className="p-3 bg-zinc-950">
        <h3 className="text-sm font-bold text-white uppercase tracking-tight truncate">
          {person.name}
        </h3>

        <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5 font-medium">
          {person.post}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3">
            {person.insta && (
              <a
                href={person.insta}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Instagram size={14} strokeWidth={1.5} />
              </a>
            )}

            {person.link && (
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Linkedin size={14} strokeWidth={1.5} />
              </a>
            )}
          </div>

          <a
            href={`tel:${person.phone}`}
            className="text-zinc-600 hover:text-white transition-colors"
          >
            <Phone size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;