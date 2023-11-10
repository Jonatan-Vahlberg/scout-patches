

class AchivementLevels{
    BRONZE = 0;
    SILVER = 1;
    GOLD = 2;
    EMERALD = 3;

    levels = [
        this.BRONZE,
        this.SILVER,
        this.GOLD,
        this.EMERALD,
    ]

    getBaseColor(level = this.BRONZE){
        switch(level){
            case this.SILVER:
                return 'silver';
            case this.GOLD:
                return 'gold';
            case this.EMERALD:
                return 'emerald';
            default:
                return 'bronze';
        }
    }
    getColors(level = this.BRONZE){
        let baseColor = this.getBaseColor(level);
        return {
            border: `border-${baseColor}`,
            bg: `bg-${baseColor}-light`,
            text: `text-${baseColor}`,
        }
    }

    getTranslation(level = this.BRONZE){
        switch(level){
            case this.SILVER:
                return 'silver';
            case this.GOLD:
                return 'guld';
            case this.EMERALD:
                return 'smaragd';
            default:
                return 'brons';
        }
    }

    getTotal = (level = this.BRONZE, totalPatches = 10) => {
        switch(level){
            case this.SILVER:
                return Math.floor(totalPatches / 3);
            case this.GOLD:
                return Math.ceil(totalPatches / 2);
            case this.EMERALD:
                return totalPatches;
            default:
                return Math.floor(totalPatches / 5);
        }
    }


}

class AchivementKit {
    constructor(patches = [], ageGroups = [], userPatches = []){
        this.levels = new AchivementLevels();
        this.updateKit(patches, ageGroups, userPatches);
    }

    updateKit(patches = [], ageGroups = [], userPatches = []){
        this.patches = patches;
        this.ageGroups = ageGroups;
        this.userPatches = userPatches;
    }

    getTitle(ageGroup = "", levelTranslation = ""){
        return `${ageGroup[0].toUpperCase()}${ageGroup.slice(1,-1)}utmärkelse i ${levelTranslation}`;
    }
    getDescription(total = 10){
        return `Utmärkelsen kräver ${total} avklarade märken`;
    }

    getAchivement(baseAchievement = {
        title: "",
        description: "",
        total: 10,
        level: 0,
        index: 0,
        achived: false,
        achivedPatches: 0,
    }){
        return {
            ...baseAchievement,
            colors: this.levels.getColors(baseAchievement.level),
            img: `/images/age_groups/achievements/${baseAchievement.index}_${this.levels.getBaseColor(baseAchievement.level)}.svg`,
        }
    }
    getAchivements(){

        const ageGroupedAchivements = this.ageGroups.sort((a, b) => a.index - b.index).map((ageGroup) => {
            let achived = 0
            const ageGroupPatches = this.patches.filter((patch) => {
                if(patch.age_groups){
                    const lowestAgeGroup = patch.age_groups.sort((a, b) => a.index - b.index)[0];
                    return lowestAgeGroup === ageGroup.id;
                }
                return false;
            })
            this.userPatches.forEach((userPatch) => {
                if(ageGroupPatches.find((patch) => patch.id === userPatch.id)){
                    achived += 1;
                }
            });
            
            return this.levels.levels.map((level) => {
                const levelTranslation = this.levels.getTranslation(level);
                const total = this.levels.getTotal(level, ageGroupPatches.length);
                return this.getAchivement({
                    total,
                    level,
                    title: this.getTitle(ageGroup.name, levelTranslation),
                    description: this.getDescription(total),
                    index: ageGroup.index,
                    achived: achived >= total,
                    achivedPatches: achived,
                });
            }).filter((achivement) => achivement.total > 0);
        })
        //Sort on if achived
        return ageGroupedAchivements.flat().sort((a, b) => {
            if(a.achived && !b.achived) return -1;
            if(!a.achived && b.achived) return 1;
            return a.index - b.index;
        })
    }

}

export default AchivementKit;