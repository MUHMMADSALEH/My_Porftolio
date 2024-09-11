import StarIcon from "../assets/icons/star.svg";
const words = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "Maintainable",
  "Responsive",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div>
      <div className="py-16 lg:py-24 overflow-x-clip ">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
            <div className=" flex flex-none gap-4 py-3">
              {words.map((word) => (
                <div key={word} className="inline-flex gap-4 items-center text-gray-900 font-extrabold text-sm uppercase ">
                  <span>{word}</span>
                  <StarIcon ClassName="size-6 -rotate-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
