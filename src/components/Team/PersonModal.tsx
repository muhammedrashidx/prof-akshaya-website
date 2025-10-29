"use client";
import { TeamType } from "@/types/team";

export default function PersonModal({ person, onClose }: { person: TeamType; onClose: () => void }) {
  if (!person) return null as any;
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-[1001] max-h-[85vh] w-[92vw] max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl dark:bg-dark">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md px-2 py-1 text-sm text-dark hover:bg-gray-100 dark:text-white dark:hover:bg-dark-3"
          aria-label="Close"
        >
          Close
        </button>
        <h2 className="mb-2 text-2xl font-bold text-dark dark:text-white">{person.name}</h2>
        <p className="mb-4 text-sm text-body-color dark:text-dark-6">{person.designation}</p>
        {person.emails && person.emails.length > 0 && (
          <div className="mb-4 text-sm text-body-color dark:text-dark-6">
            <span className="font-semibold text-dark dark:text-white">Email:</span> {person.emails.join(", ")}
          </div>
        )}
        {person.bio && (
          <div className="prose max-w-none text-[15px] leading-relaxed text-dark dark:prose-invert dark:text-white">
            <p style={{ whiteSpace: "pre-line" }}>{person.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}


