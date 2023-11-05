import Checkbox from "../../globals/Checkbox";



const PatchRequirement = ({ 
    requirement, 
    checked = false,
    onChange = (checked) => {} 
}) => {

    return (
        <li className="flex items-center gap-2 mb-2">

            <Checkbox size="md"
                checked={checked}
                onChange={(e) => {
                    onChange(e.target.checked);
                }}
                id={requirement}
            >
                {requirement}
            </Checkbox>
        </li>
    )

}

export default PatchRequirement;