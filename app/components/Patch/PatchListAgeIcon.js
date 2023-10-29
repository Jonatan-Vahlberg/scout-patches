import Image from "next/image";

const PatchListAgeIcon = ({ age_group = {} }) => {
    if(age_group.index === undefined) {
        return null;
    }
  return (
    <div
      className={`bg-ages-${age_group?.index} h-9 w-9 flex items-center justify-center rounded-full`}
    >
      <div className="patch-list-age-icon">
        <Image
          src={`/images/age_groups/${age_group?.index}.svg`}
          width={25}
          height={25}
          className="object-contain invert"
          alt={age_group?.name}
        />
      </div>
      <div className="opacity-0 invisible bg-ages-0" />
      <div className="opacity-0 invisible bg-ages-1" />
      <div className="opacity-0 invisible bg-ages-2" />
      <div className="opacity-0 invisible bg-ages-3" />
    </div>
  );
};

export default PatchListAgeIcon;
