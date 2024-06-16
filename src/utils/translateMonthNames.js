export function translateMonthNames(dateString, i18n) {
    const date = new Date(dateString);
    const month = date.toLocaleDateString(i18n.language, { month: "long" });
    return (
        date.toLocaleDateString(i18n.language, { day: "numeric" }) +
        " " +
        month +
        ", " +
        date.toLocaleDateString(i18n.language, { year: "numeric" })
    );
}