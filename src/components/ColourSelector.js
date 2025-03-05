const ColourSelector = ({ config, selectNextBackground }) => {
  return (
    <button className={`btn ${config.classname}`} onClick={() => selectNextBackground(config.background)}>
      {config.label}
    </button>
  );
};
export default ColourSelector;