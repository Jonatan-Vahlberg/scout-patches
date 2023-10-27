import { Card, CardHeader, Input, Select, SelectItem } from "@nextui-org/react";

const PatchListFilters = ({
  filters = {},
  setFilters = () => {},
  age_groups = [],
}) => {
  return (
    <Card className="w-full mb-3 p-4">
        <CardHeader className="pt-0">
            <h3 className="text-lg font-semibold">Sök/filtrera</h3>
        </CardHeader>
      <div className="flex w-full gap-3">

          <Input
            type="search"
            placeholder="Sök efter märke"
            className="w-1/2"
            value={filters.title}
            onChange={(e) =>
              setFilters((state) => ({
                ...state,
                title: e.target.value,
              }))
            }
          />

          <Select
            className="w-1/2"
            size="small"
            placeholder="Välj åldersgrupp"
            value={filters.age_group}
            onChange={(e) =>
              setFilters((state) => ({
                ...state,
                age_group: e.target.value,
              }))
            }
          >
            {age_groups.map((age_group) => (
              <SelectItem key={age_group.id} value={age_group.id}>
                {age_group.name}
              </SelectItem>
            ))}
          </Select>
      </div>
    </Card>
  );
};

export default PatchListFilters;
