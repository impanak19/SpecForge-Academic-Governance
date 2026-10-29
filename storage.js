
const SpecForgeStorage = {
  save(key, data) {
    try {
      localStorage.setItem(
        "specforge_" + key,
        JSON.stringify(data)
      );
      return true;
    } catch (error) {
      console.error("Could not save data:", error);
      return false;
    }
  },

  load(key, fallback = null) {
    try {
      const saved = localStorage.getItem("specforge_" + key);
      return saved === null ? fallback : JSON.parse(saved);
    } catch (error) {
      console.error("Could not load data:", error);
      return fallback;
    }
  },

  remove(key) {
    localStorage.removeItem("specforge_" + key);
  }
};
