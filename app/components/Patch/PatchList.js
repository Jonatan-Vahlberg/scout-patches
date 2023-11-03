"use client";
import { useCallback, useRef, useState } from "react";
import { usePatches } from "../../../context/PatchContext";
import PatchListItem from "./PatchListItem";
import PatchListFilters from "./PatchListFilters";
import { FaChevronUp } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import PatchListLoadingItem from "./PatchListLoadingItem";

const filterHeight = 150;

const PatchList = () => {
  const patches = usePatches();
  const [filterIsvisible, setFilterIsVisible] = useState(true);

  const list = useRef(null);

  const handleScroll = useCallback(
    (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
      if (scrollTop > filterHeight && filterIsvisible) {
        setFilterIsVisible(false);
      } else if (scrollTop < filterHeight && !filterIsvisible) {
        setFilterIsVisible(true);
      }

      if (patches.patchesLoading) return;
      if (patches.patches.length === patches.shownPatches.length) return;
      if (scrollTop + clientHeight >= scrollHeight) {
        patches.setPatchFilters((state) => ({
          ...state,
          page: state.page + 1,
        }));
      }
    },
    [
      patches.patchesLoading,
      patches.patches.length,
      patches.shownPatches.length,
      filterIsvisible,
    ]
  );

  return (
    <div
      onScroll={handleScroll}
      ref={list}
      className="relative overflow-y-auto h-[calc(100vh-82px)] w-full p-4 gap-6"
    >
      <h2 className="text-2xl font-semibold mb-4">Märken</h2>
      <PatchListFilters
        age_groups={patches.ageGroups}
        filters={patches.patchFilters}
        setFilters={patches.setPatchFilters}
      />
      {!filterIsvisible && (
        <Button
          onClick={() => {
            list.current.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="sticky -top-2 left-1/2 -translate-x-1/2 z-10 bg-sweden-dark h-12 rounded-full aspect-square p-0 flex justify-center items-center"
        >
          <FaChevronUp
            className="absolute -translate-y-1 text-white"
            size={20}
          />
          <FaChevronUp
            className="absolute translate-y-1 text-white"
            size={20}
          />
        </Button>
      )}
      {!patches.patchesLoading &&
        patches.shownPatches.map((patch) => (
          <PatchListItem
            key={patch.id}
            patch={patch}
          />
        ))}
      {patches.patchesLoading && (
        <>
        <PatchListLoadingItem/>
        <PatchListLoadingItem/>
        <PatchListLoadingItem/>
        </>
      )}
    </div>
  );
};

export default PatchList;
