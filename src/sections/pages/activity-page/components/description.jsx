export const Description = ({ feature, selectedLanguage }) => {
  return (
    <div>
      <dt className="text-lg font-medium text-neutral-900">
        {feature.name[selectedLanguage]}
      </dt>
      <dd className="mt-3 text-base text-neutral-500">
        {feature.description[selectedLanguage]}
      </dd>
    </div>
  );
};
