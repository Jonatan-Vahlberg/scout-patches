import AchievementListItem from "./AchivementListItem"

const UserAchievements = ({ achievements = [{
    title: 'No achievements yet',
    img: 'images/age_groups/achievements/0_bronze.svg',
}] }) => {
    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            <h2 className="text-2xl font-semibold my-4">Dina Märken</h2>
            <div className="overflow-y-auto flex flex-col flex-1 gap-4 p-4">
                {achievements.map((achievement) => (
                    <AchievementListItem
                        key={achievement.title}
                        achievement={achievement}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserAchievements